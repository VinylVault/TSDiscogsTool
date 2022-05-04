import Dotenv from 'dotenv';
import Fetch from 'node-fetch';
import { info, debug, log } from './utils/debug';

Dotenv.config();

info('JS TS Discogs API v2 Library Version 0.0.3')
info('© Dex Vinyl 2022')
info('Released under MIT License')

interface Ratelimit {
    ratelimit: number,
    remaining: number,
    used: number,
}

export default class Client {
    private protocol = 'https';
    private host: string;
    private port: number;
    private userAgent: string;
    private auth: string|null;
    private ratelimit: Ratelimit;
    private discogsUserName: string;
    private perPage: string;

    private defaults = {
        host: 'api.discogs.com',
        port: 443,
        userAgent: 'JSTSDiscogsAPIV2Library',
        apiVersion: 'v2',
        outputFormat: 'discogs',    // Possible values: 'discogs' / 'plaintext' / 'html'
        requestLimit: 25,           // Maximum number of requests to the Discogs API per interval
        requestLimitAuth: 60,       // Maximum number of requests to the Discogs API per interval when authenticated
        requestLimitInterval: 60000, // Request interval in milliseconds
        discogsUserName:' ', // Default Username can only be set in ENV file
        perPage:'50',
    }

    constructor({
                    host,
                    port,
                    userAgent,
                    token,
                    key,
                    secret,
                    discogsUserName,
                }: {
        host?: string,
        port?: number;
        userAgent?: string;
        token?: string,
        key?: string,
        secret?: string,
        discogsUserName?: string,
    }) {
        this.discogsUserName = process.env.DISCOGS_USER_NAME || this.defaults.discogsUserName;
        this.host = host || this.defaults.host;
        this.port = port || this.defaults.port;
        this.userAgent = userAgent || this.defaults.userAgent;
        this.auth = this.createAuthString({ token, key, secret });
        this.ratelimit = {
            ratelimit: 25,
            remaining: 25,
            used: 0,
        };
        this.perPage = process.env.DISCOGS_PER_PAGE || this.defaults.perPage;
    }

    private createAuthString({
                                 token,
                                 key,
                                 secret,
                             }: {
        token?: string,
        key?: string,
        secret?: string,
    }) {
        let authString;

        let discogsToken = token || process.env.DISCOGS_API_TOKEN
        let discogsKey = key || process.env.DISCOGS_API_KEY
        let discogsSecret = secret || process.env.DISCOGS_API_SECRET

        if (discogsToken) {
            authString = `token=${(discogsToken)}`;
        } else if ((discogsKey) && (discogsSecret)) {
            authString = `key=${(discogsKey)}, secret=${(discogsSecret)}`;
        }

        return authString || null;
    }

    private async request(path: string, method: string = 'GET', body?: any) {
        const requestHeaders: any = {
            'User-Agent': this.userAgent,
        };

        if (this.auth) {
            requestHeaders['Authorization'] = `Discogs ${this.auth}`
        }
        while (true) {
            try {
                const fetchObject: any = {
                    method,
                    headers: requestHeaders,
                }
                if(body) {
                    if(typeof body == 'object') {
                        fetchObject.body = JSON.stringify(body)
                        fetchObject.headers['Content-Type'] = 'application/json'
                    } else {
                        fetchObject.body = body
                    }
                }
                const response = await Fetch(`${this.protocol}://${this.host}/${path}`, fetchObject);
                const responseHeaders = response.headers;
                const data = await response.json();
                this.ratelimit = {
                    ratelimit: Number(responseHeaders.get('x-discogs-ratelimit')),
                    remaining: Number(responseHeaders.get('x-discogs-ratelimit-remaining')),
                    used: Number(responseHeaders.get('x-discogs-ratelimit-used'))
                }
                return {
                    data,
                    headers: responseHeaders,
                };
            } catch (error) {
                console.error(error);
                // @ts-ignore
                if (theError.type == "invalid-json") {
                    log("Invalid JSON Received Waiting 5 Seconds Before Retry");
                    await this.delay(5000);
                    debug("Trying Again")
                }
            }
        }
    }

    public getRatelimit(): Ratelimit {
        return this.ratelimit;
    }

    // Helper Functions
    public async getRequest (path: string) {
        return this.request(path, 'GET');
    }
    public async deleteRequest (path: string) {
        return this.request(path, 'DELETE');
    }
    public async postRequest(path: string, body: any) {
        return this.request(path, 'POST', body);
    }
    public async putRequest(path: string, body: any) {
        return this.request(path, 'PUT', body);
    }

//
// HAVE A NAP
//

    private async delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

//
// CALCULATE RATE LIMIT
//

    public async calculateRateLimitRemaining(){
        let rateRemaining = this.getRatelimit().remaining;
        let rateBarrier = 2;//this.getRatelimit().ratelimit/5;
        log ("You Have " + rateRemaining + " Requests Remaining");
        if (rateRemaining <= rateBarrier) {
            log("Generating Random Wait Time");
            const rngWaitTime = Math.floor(Math.random() * (55 - 15 + 1)) + 15;
            log("You've Used ALL You API Rate Allowance, Waiting for " + rngWaitTime + " Seconds");
            log ("The Threshold is " + rateBarrier + " Requests");
            log(new Date());
            let rngWaitTimeMS = rngWaitTime * 1000;
            await this.delay(rngWaitTimeMS);
            log ("Ok I Waited " + rngWaitTime + " Seconds, Continuing... ");
            log (new Date());
            await this.delay(1000);
        }
    }

//
// USER SPECIFIC ENDPOINTS
//

    public async getUser() {
        return this.getRequest(`users/${this.discogsUserName}`);
    }

    public async deleteUser() {
        return this.deleteRequest(`users/${this.discogsUserName}`);
    }

    public async getUserCollection(pageNumber:string, sort:string, sortOrder:string) {
        await this.calculateRateLimitRemaining();

        if (!pageNumber){
            pageNumber="1"
        }

        if (!sortOrder){
            sortOrder="desc"
        }

        if (!sort) {
            sort = "added"
        }
        else if (sort == "year") {}
        else if (sort == "artist") {}
        else if (sort == "title") {}
        else if (sort == "catno") {}
        else if (sort == "format") {}
        else if (sort == "rating") {}
        else{
            sort = "added"
        }

        return this.getRequest(`users/${this.discogsUserName}/collection?sort=${sort}&sort_order=${sortOrder}&per_page=${this.perPage}&page=${pageNumber}`);
    }

    public async getUserWantlist(pageNumber:string, sort:string, sortOrder:string) {
        await this.calculateRateLimitRemaining();

        if (!pageNumber){
            pageNumber="1"
        }

        if (!sortOrder){
            sortOrder="desc"
        }

        if (!sort) {
            sort = "added"
        }
        else if (sort == "year") {}
        else if (sort == "artist") {}
        else if (sort == "title") {}
        else if (sort == "catno") {}
        else if (sort == "format") {}
        else if (sort == "rating") {}
        else{
            sort = "added"
        }

        return this.getRequest(`users/${this.discogsUserName}/wants?sort=${sort}&sort_order=${sortOrder}&per_page=${this.perPage}&page=${pageNumber}`);
    }

    public async getUserFolders() {
        await this.calculateRateLimitRemaining();

        return this.getRequest(`users/${this.discogsUserName}/collection/folders`);
    }

    public async getUserFolderContents(folder:string, pageNumber:string, sort:string, sortOrder:string) {
        await this.calculateRateLimitRemaining();

        if (!pageNumber){
            pageNumber="1"
        }

        if (!sortOrder){
            sortOrder="desc"
        }

        if (!sort) {
            sort = "added"
        }
        else if (sort == "year") {}
        else if (sort == "artist") {}
        else if (sort == "title") {}
        else if (sort == "catno") {}
        else if (sort == "format") {}
        else if (sort == "rating") {}
        else{
            sort = "added"
        }

        return this.getRequest(`users/${this.discogsUserName}/collection/folders/${folder}/releases?sort=${sort}&sort_order=${sortOrder}&per_page=${this.perPage}&page=${pageNumber}`);
    }

    public async getUserCollectionValue() {
        await this.calculateRateLimitRemaining();

        return this.getRequest(`users/${this.discogsUserName}/collection/value`);
    }

//
// RELEASE ENDPOINTS
//

    public async getRelease(releaseId: string) {
        await this.calculateRateLimitRemaining();

        return this.getRequest(`releases/${releaseId}`);
    }

    public async getReleaseUserRating(releaseId: string) {
        await this.calculateRateLimitRemaining();

        return this.getRequest(`releases/${releaseId}/rating/${this.discogsUserName}`);
    }

    public async getReleaseCommunityRating(releaseId: string) {
        await this.calculateRateLimitRemaining();

        return this.getRequest(`releases/${releaseId}/rating`);
    }

    public async getReleaseStats(releaseId: string) {
        await this.calculateRateLimitRemaining();

        return this.getRequest(`releases/${releaseId}/stats`);
    }

    public async getMasterRelease(masterId: string) {
        await this.calculateRateLimitRemaining();

        return this.getRequest(`masters/${masterId}`);
    }

    public async getMasterReleaseVersions(masterId: string) {
        await this.calculateRateLimitRemaining();

        return this.getRequest(`masters/${masterId}/versions`); // takes parameters, needs adding
    }

//
// ARTIST ENDPOINTS
//

    public async getArtistDetails(ArtistId: string) {
        await this.calculateRateLimitRemaining();

        return this.getRequest(`artists/${ArtistId}`);
    }

    public async getArtistReleases(ArtistId: string, pageNumber:string, sort:string, sortOrder:string) {
        await this.calculateRateLimitRemaining();

        if (!pageNumber){
            pageNumber="1"
        }

        if (!sortOrder){
            sortOrder="desc"
        }

        if (!sort) {
            sort = "title"
        }
        else if (sort == "year") {}
        else if (sort == "format") {}
        else{
            sort = "title"
        }

        return this.getRequest(`artists/${ArtistId}/releases?sort=${sort}&sort_order=${sortOrder}&per_page=${this.perPage}&page=${pageNumber}`); // takes parameters, needs adding
    }


//
// LABEL ENDPOINTS
//

    public async getLabelDetails(LabelId: string) {
        await this.calculateRateLimitRemaining();

        return this.getRequest(`labels/${LabelId}`);
    }

    public async getLabelReleases(LabelId: string, pageNumber:string, sort:string, sortOrder:string) {
        await this.calculateRateLimitRemaining();

        if (!pageNumber){
            pageNumber="1"
        }

        if (!sortOrder){
            sortOrder="desc"
        }

        if (!sort) {
            sort = "title"
        }
        else if (sort == "year") {}
        else if (sort == "artist") {}
        else if (sort == "catno"){}
        else if (sort == "format") {}
        else{
            sort = "added"
        }

        return this.getRequest(`labels/${LabelId}/releases?sort=${sort}&sort_order=${sortOrder}&per_page=${this.perPage}&page=${pageNumber}`); // takes parameters, needs adding
    }

//
// SEARCH ENDPOINTS
// 

    public getSearch(query: string, pageNumber: string) {
        if (!pageNumber) {
            pageNumber = "1"
        }
        return this.request(`database/search?q=${query}&page=${pageNumber}`);
    }

    public getSearchArtist(query: string, pageNumber: string) {
        if (!pageNumber) {
            pageNumber = "1"
        }
        return this.request(`database/search?q=${query}&type=artist&page=${pageNumber}`);
    }

    public getSearchReleaseId(query: string, pageNumber: string) {
        if (!pageNumber) {
            pageNumber = "1"
        }
        return this.request(`database/search?release_id=${query}&type=release&page=${pageNumber}`);
    }

    public getSearchCatalogueNumber(query: string, pageNumber: string) {
        if (!pageNumber) {
            pageNumber = "1"
        }
        return this.request(`database/search?catno=${query}&type=release&page=${pageNumber}`);
    }

    public getSearchReleaseTitle(query: string, pageNumber: string) {
        if (!pageNumber) {
            pageNumber = "1"
        }
        return this.request(`database/search?release_title=${query}&type=release&page=${pageNumber}`);
    }

    public getSearchTrackTitle(query: string, pageNumber: string) {
        if (!pageNumber) {
            pageNumber = "1"
        }
        return this.request(`database/search?track=${query}&type=release&page=${pageNumber}`);
    }

    public getSearchLabelReleases(query: string, pageNumber: string) {
        if (!pageNumber) {
            pageNumber = "1"
        }
        return this.request(`database/search?label=${query}&type=release&page=${pageNumber}`);
    }

    public getSearchLabel(query: string, pageNumber: string) {
        if (!pageNumber) {
            pageNumber = "1"
        }
        return this.request(`database/search?q=${query}&type=label&page=${pageNumber}`);
    }

}