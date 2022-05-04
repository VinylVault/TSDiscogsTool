# TS/JS Discogs APIv2 Library Version 0.0.3

Tool to talk to Discogs API V2

Currently, Only Supports Personal Access Key.

# Installation

This library is libraried on NPM, to install, execute the command :

`npm i js_ts_discogs_api_v2_library`

Add the following to your `.env` file (or create a new one)

Exclude sections in []

DISCOGS_API_TOKEN="" [This is Your Personal Access Token, get one here : https://www.discogs.com/settings/developers and click "Generate New Token", Paste the token here]
DISCOGS_USER_NAME = "" [Your Discogs UserProfile Name]
DISCOGS_CURRENCY_MARK = "" [Options are : USD GBP EUR CAD AUD JPY CHF MXN BRL NZD SEK ZAR - per Discogs API]
DISCOGS_PER_PAGE=500 [In Testing 500 is the maximum successful, default is 50, change this to your desired number, 500 or less.]

## Roadmap

v0.0.1 only support GET endpoints

v0.0.2 adds Auto Rate-Limiting 

v0.0.3 adds Search capability **Current Version**

v0.0.4 will add PUT, POST, DELETE endpoints.

v0.0.5 will add oAuth Support

v0.0.6+ will add user suggestions, and further enhancements, including adding CSV Import.

### Additional Modules, Additional Functionality (Currently In Development)

**Complete**:

Currently None

**Currently In Development**:

For A Personal DB Interface use `TSDiscogsTool-DBInterface` (Requires this library) this will create a user updatable `Prisma` which you can link to your database backend of choice, or `Supabase` (TBD) basic database schema, and makes all the Database API endpoints available.

**Yet To Be Started**:

For Playlist creation use `TSDiscogsTool-Playlists` (Requires `TSDiscogsTool-DBInterface` et al) this will allow you to create custom playlists, for display on a website.

For Review creation use `TSDiscogsTool-Reviews` (Requires `TSDiscogsTool-DBInterface` et al) this will allow you to create reviews, for display on a website. [Potentially will allow posting of review to the relevant discogs release.]

For Shop Management use `TSDiscogsTool-Shop` (Requires `TSDiscogsTool-DBInterface` et al) this will give you access to all the Marketplace Endpoints.

We would like to manage some kind of marketplace searching, which is currently not supported natively by the API, how it will be possible, at the moment we don't know, but we will work on this.

## To Display Full Headers

`console.log(data.headers)`

## To Display RateLimit Information

`console.log(discogs.getRatelimit());`

## Access Endpoints

Users should set Discogs Username in .env file

Discogs Personal Access Key should be set in .env file

### USER INFORMATION

`const user = await discogs.getUser();`

`const collection = await discogs.getUserCollection();`

`const wantlist = await discogs.getUserWantlist();`

`const folders = await discogs.getUserFolders();`

`const folderContents = await discogs.getUserFolderContents("#");`  **# = FolderID As In Your Custom Folders in Discogs Dashboard**

`const collectionValue = await discogs.getUserCollectionValue();`

### RELEASE INFORMATION

`const releaseDetails = await discogs.getRelease("249504");` **//RICK-ROLL (same as Official Docs)**

`const releaseUserRating = await discogs.getReleaseUserRating("249504");`

`const releaseCommunityRating = await discogs.getReleaseCommunityRating( "249504" );`

`const releaseStats = await discogs.getReleaseStats("249504");`

`const releaseMaster = await discogs.getMasterRelease("96559");`

`const releaseMasterVersions = await discogs.getMasterReleaseVersions("96559");`

### ARTIST INFORMATION

`const artist = await discogs.getArtistDetails("72872");` **//RICK ASTLEY**

`const artistReleases = await discogs.getArtistReleases("72872");`

### LABEL INFORMATION

`const label = await discogs.getLabelDetails("895");` **//RCA**

`const labelReleases = await discogs.getLabelReleases("895");`

# Suggestions, Updates & Errors

If you choose to use this library, and run into a problem, please log an issue or raise a PR, we are committed to this project in the long term and will act on all Issues promptly.

If you have suggestions for further functionality that is not already in the roadmap, please raise an Issue, we will add it to the list.

# Thanks

Thanks go out to [Mike Elsmore](https://github.com/ukmadLz). Without your help and support this project would never have got off the ground.

Thanks go to [Discogs](https://discogs.com) for enabling an API

Thanks go to [Bartve](https://github.com/bartve) for [Disconnect](https://github.com/bartve/disconnect) which although now unsupported, is a great library.  Disconnect was part of the inspiration for this Library.

Thanks go to [Joalla](https://github.com/joalla) for [Disgogs_Client](https://github.com/joalla/discogs_client) which was part of the inspirtion for this library.  I used this library extensively when I created a Python / Django version of the [VinylVault Website](https://www.thevinylvaultshow.co.uk)

# License 

MIT

# Other Resources

[Discogs API Documentation](https://www.discogs.com/developers/)

[RichCodesWeb on Twitch](https://twitch.tv/RichCodesWeb) - I live stream here most days writing code, it is where the development of this is being completed, as well as other projects.  
Come ask me questions, and / or make suggestions in livechat to shape further development of this library and add-on modules.