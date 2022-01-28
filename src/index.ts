import Dotenv from 'dotenv';
import Debug from 'debug';
import Fetch from 'node-fetch';

Dotenv.config();

const debug = Debug('discog:info');

debug('Welcome To The Last Discogs API v2 Library You Will Ever Need')
debug('(c) Dex Vinyl & Mike Elsmore 2022')
debug('Released under MIT License')

interface Ratelimit {
    ratelimit: number,
    remaining: number,
    used: number,
}

export class Client {
    private protocol = 'https';
    private host: string;
    private port: number;
    private userAgent: string;
    private auth: string|null;
    private ratelimit: Ratelimit;

    private defaults = {
        host: 'api.discogs.com',
        port: 443,
        userAgent: 'DisConnectClient',
        apiVersion: 'v2',
        outputFormat: 'discogs',    // Possible values: 'discogs' / 'plaintext' / 'html'
        requestLimit: 25,           // Maximum number of requests to the Discogs API per interval
        requestLimitAuth: 60,       // Maximum number of requests to the Discogs API per interval when authenticated
        requestLimitInterval: 60000 // Request interval in milliseconds
    }

    constructor({
        host,
        port,
        userAgent,
        token,
        key,
        secret,
    }: {
        host?: string,
        port?: number;
        userAgent?: string;
        token?: string,
        key?: string,
        secret?: string,
    }) {
        this.host = host || this.defaults.host;
        this.port = port || this.defaults.port;
        this.userAgent = userAgent || this.defaults.userAgent;
        this.auth = this.createAuthString({ token, key, secret });
        this.ratelimit = {
            ratelimit: 25,
            remaining: 25,
            used: 0,
        }
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
        if (token || process.env.DISCOGS_API_TOKEN) {
            authString = `token=${(token || process.env.DISCOGS_API_TOKEN)}`;
        } else if ((key || process.env.DISCOGS_API_KEY) && (secret || process.env.DISCOGS_API_SECRET)) {
            authString = `key=${(key || process.env.DISCOGS_API_KEY)}, secret=${(secret || process.env.DISCOGS_API_SECRET)}`;
        }
        return authString || null;
    }

    private async request(path: string) {
        const requestHeaders: any = {
            'User-Agent': this.userAgent,
        };
        if (this.auth) {
            requestHeaders['Authorization'] = `Discogs ${this.auth}`
        }
        try {
            const response = await Fetch(`${this.protocol}://${this.host}/${path}`, {
                // method: 'post',
                // body: JSON.stringify({}),
                headers: requestHeaders,
            });
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
        }
    }

    public getRatelimit(): Ratelimit {
        return this.ratelimit;
    }

    // Helper Functions
    public getRequest (path: string) {
        return this.request(path);
    }

    public getArtist(id: string) {
        return this.request(`artists/${id}`);
    }

    public getUser(id: string) {
        return this.request(`users/${id}`);
    }
    public getUserCollection(id: string) {
        return this.request(`users/${id}/collection`);
    }
    public getUserWantlist(id: string) {
        return this.request(`users/${id}/wants`);
    }
    public getUserFolders(id: string) {
        return this.request(`users/${id}/collection/folders`);
    }
    public getUserFolderContents(id: string, folder:string) {
        return this.request(`users/${id}/collection/folders/${folder}/releases`);
    }
    public getUserCollectionValue(id: string) {
        return this.request(`users/${id}/collection/value`);
    }

    public getRelease(id: string) {
        return this.request(`users/${id}/collection/folders`);
    }
}
export default Client;