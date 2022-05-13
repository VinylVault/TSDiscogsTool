# Roadmap

Items that are here are subject to change, things may slip between versions or get bumped to an earlier release.

### Features Planned to be on Releases:

`v0.0.6` (Internal Release Only)
- All `PUT` `POST` `DELETE` Endpoints to be completed.
- Update of Currency handling from `.env` to Discogs Profile.
- `README.md`, `ROADMAP.md` and `CHANGELOG.md` Updates to reflect changes. 

`v0.1.0`
- Same as `v0.0.6` per functionality, code fully tested and better streamlined.
- **THIS WILL BE THE NEXT NPM RELEASE**

`v.0.1.1` (Internal Release Only)
- Bulk Import from CSV, sample file will be provided for both WantList, and Collection.
- `README.md`, `ROADMAP.md` and `CHANGELOG.md` Updates to reflect changes.

`v.0.2.0`
- Same as `v0.1.1` per functionality, code fully tested and better streamlined.
- **THIS WILL BE AN NPM RELEASE**

### Features with NO Planned Release

- oAuth

Please feel free to create `Issues` or `Pull Requests` on the GitHub project for any features you think should be added, or any code or documentation you want to contribute.  All help is very much appreciated.

# Other Modules For The Wider Scoped Project

Some of these may become part of this module, and others may be merged into other modules or may be scrapped completely.

### Additional Modules, Additional Functionality

**Complete**:

Currently None

**Currently In Development**:

For A Personal DB Interface use `TSDiscogsTool-DBInterface` (Requires this library) this will create a user updatable `Prisma` which you can link to your database backend of choice, or `Supabase` (TBD) basic database schema, and makes all the Database API endpoints available.

**Yet To Be Started**:

For Playlist creation use `TSDiscogsTool-Playlists` (Requires `TSDiscogsTool-DBInterface`) this will allow you to create custom playlists, for display on a website.

For Review creation use `TSDiscogsTool-Reviews` (Requires `TSDiscogsTool-DBInterface`) this will allow you to create reviews, for display on a website. [Potentially will allow posting of review to the relevant discogs release.]

For Shop Management use `TSDiscogsTool-Shop` (Requires `TSDiscogsTool-DBInterface`) this will give you access to all the Marketplace Endpoints.

We would like to manage some kind of marketplace searching, which is currently not supported natively by the API, how it will be possible, at the moment we don't know, but we will work on this.