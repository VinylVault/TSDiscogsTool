# TS/JS Discogs APIv2 Library Version 0.0.1

Tool to talk to Discogs API V2

Currently, Only Supports Personal Access Key, Key/Secret will be supported in 0.0.2 and oAuth2 in 0.0.3

# Installation

Information to follow, once NPM has populated.

## Roadmap

v0.0.1 only support GET endpoints

v0.0.2 will support PUT, POST, DELETE endpoints and add Key:Secret

v0.0.3 will add oAuth Access and Auto Rate-Limiting based on specific user permissions.

v0.0.4 and further will add user suggestions, and further enhancements.

### Additional Modules, Additional Functionality (Currently In Development)

**Complete**:

Currently None

**Currently In Development**:

For Search, use `TSDiscogsTool-Search` (Requires this library) this is a separate library as it will (when 100% feature complete) add extra functionality than just simply searching.

**Yet To Be Started**:

For A Personal DB Interface use `TSDiscogsTool-DBInterface` (Requires this library and `Search`) this will create a user updatable `Prisma` basic database schema, which you can link to your database backend of choice, and makes all the Database API endpoints available.

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

[Discogs API Documentation](http://www.discogs.com/developers/)