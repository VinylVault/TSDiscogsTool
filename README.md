# TS/JS Discogs APIv2 Library Version 0.0.5(1) 

(Starting to add PUT, POST, DELETE endpoints, this will not see a formal release until all are complete)

Tool to talk to Discogs API V2

Currently, Only Supports Personal Access Key.

---
## Installation

This library is libraried on NPM, to install, execute the command :

`npm i js_ts_discogs_api_v2_library`

Add the following to your `.env` file (or create a new one)

Exclude sections in `[]`

`DISCOGS_API_TOKEN=""` [This is Your Personal Access Token, get one here : https://www.discogs.com/settings/developers and click "Generate New Token", Paste the token here]

`DISCOGS_USER_NAME = ""` [Your Discogs UserProfile Name]

`DISCOGS_CURRENCY_MARK = ""` [Options are : `USD`  `GBP` `EUR`  `CAD`  `AUD`  `JPY`  `CHF`  `MXN`  `BRL`  `NZD`  `SEK`  `ZAR` - per Discogs API]

`DISCOGS_PER_PAGE=500` [In Testing 500 is the maximum successful, default is 50, change this to your desired number, 500 or less.]

---
## Usage

After installing via NPM (see top of this file), at the top of your `.ts` file you need to import into your project in the usual way.

We advise to import as `Discogs` but that is of course up to you.

Once imported, you will need to define a variable that you use through your code to call the construct ...   
`const discogs = new Discogs({});`

You are now set up to connect to the Discogs API and start using the data provided.

### To Display RateLimit Information

`console.log(discogs.getRatelimit());`

#### USER INFORMATION

`GET` 
`const user = await discogs.getUser();`

`POST`
`const editUser = await discogs.editUser("[Name]" , "[HomePage]", "[Location]", "[Profile]", "[Currency]");`    
If any of the above need to be changed they should **MUST** be left in order and marked as `""`.  When this happens the field will **NOT** be updated, all other fields will be updated, if a field needs to be blanked, please set to `" "`.

#### SUPPORTED OPTIONS FOR DISCOGS VARIABLES
Some of the variables have a limited set of options defined by Discogs.

`SORT FIELD`
- `label` Sort By Record Label
- `artist` Sort By Artist
- `title` Sort By Release Title
- `catno` Sort By Catalogue Number
- `format` Sort By Format Description
- `rating` Sort By Community Rating
- `added` Sort By Date Added To Collection
- `year` Sort By Release Year

`SORT ORDER`
- `asc` Sort Low to High / A-Z / Old to New
- `desc` Sort High to Low / Z-A / New to Old

#### COLLECTION INFORMATION

- This function will get your collection for further working on, using the values set in your `.env` file, if not included the values are defaulted to : `Page Number`:`1`; `Sort Field`:`added`; `Sort Order`:`desc`.   
`GET` 
`const <Variable> = await discogs.getUserCollection(<Page Number>, <Sort Field>, <Sort Order>);`

- This function will get the `Minimum`, `Median` and `Maximum` Values according to Discogs.    
`GET`
`const <Variable> = await discogs.getUserCollectionValue();`

- This function will get any Custom Fields with their ID number.    
`GET` 
`const <variable> = await discogs.listCustomFields();`

- This function will edit the **CONTENTS** of a custom field and update the field for **EVERY** instance of it, at the current time there is no endpoint to allow creation of Custom Fields or edit Title of Custom Fields.   
`POST`
`const <Variable> = await discogs.editCustomValue(<Release ID>,<Custom Field ID>,<Custom Field Content>);`
- 
#### FOLDER INFORMATION

- This function will get a list of all user created folders    
`GET` 
`const <Variable> = await discogs.getUserFolders();`

- This function will create a new folder.    
`POST` 
`const <Variable> = await discogs.createUserFolder("<New Folder Name>");`

- This function will edit the name of a custom folder. You **CAN NOT** rename either of the default folders: `0`:`Everything` or `1`:`Uncategorised`.    
`POST` 
`const <Variable> = await discogs.editUserFolder("<Folder ID>", "<New Folder Name>");`

- This function will delete a custom folder, if you delete a folder with contents, all the contents will be moved to `1`:`Uncategorised`.    
`DELETE`
`const <Variable> = await discogs.deleteUserFolder("<Folder ID>");`

- This function will get the contents of your collection that are in a specific folder.    
`GET` 
`const <Variable> = await discogs.getUserFolderContents("<Folder ID>");`

- This function adds a new release to your collection and automatically puts it in a folder.     
`POST`
`const <Variable> = await discogs.addReleaseToFolder("<Release ID>, <Folder ID>")`

- This function finds a release in your collection, and will move **EVERY** instance of it into the specified folder.     
`POST`
`const <Variable> = await discogs.changeReleaseFolder("<Release ID>, <Folder ID>")`    
- This function finds a release in your collection, and will move **EVERY** instance of it into the default `Uncategorised` folder (ID `1`).     
`DELETE`
`const <Variable> = await discogs.removeReleaseFromFolder("<Release ID>")`

#### RELEASE INFORMATION

- This function gets the details for the specified Release.   
`GET` 
`const <Variable> = await discogs.getRelease("<Release ID>");`

- This function gets any rating you have set for the specified Release.   
`GET` 
`const <Variable> = await discogs.getReleaseUserRating("<Release ID>}");`

- This function sets your personal rating for the specified Release.    
`POST`
`const <Variable> = await discogs.setChangeReleaseUserRating("<Release ID>","<Rating>");`

- This function deletes your personal rating for the specified Release.   
`DELETE`
`const <Variable> = await discogs.deleteReleaseUserRating("<Release ID>");`

- This function get the global Discogs (Community) rating for the specified Release.    
`GET` 
`const <Variable> = await discogs.getReleaseCommunityRating("<Release ID>");`

- This function gets the `Have` and `Want` Statistics for the specified Release.    
`GET` 
`const <Variable> = await discogs.getReleaseStats("<Release ID>");`

- This function gets the details for the specified Master Release.    
`GET` 
`const <Variable> = await discogs.getMasterRelease("<Master ID>");`

- This function gets the version details for the specified Master Release.    
`GET` 
`const <Variable> = await discogs.getMasterReleaseVersions("<Master ID>");`

#### ARTIST INFORMATION

- This function gets the details for the specified Artist.    
`GET` 
`const <Variable> = await discogs.getArtistDetails("<Artist ID>");`

- This function gets the Releases associated with the specified Artist.    
`GET` 
`const <Variable> = await discogs.getArtistReleases("<Artist ID>");`

#### LABEL INFORMATION

- This function gets the details for the specified Record Label.    
`GET` 
`const <Variable> = await discogs.getLabelDetails("<RecordLabel ID>");`

- This function gets the releases for the specified Record Label.    
`GET` 
`const <Variable> = await discogs.getLabelReleases("<RecordLabel ID>");`

#### WANTLIST INFORMATION

- This function will get the contents of your wishlist / wantlist    
`GET` 
`const <Variable> = await discogs.getUserWantlist();`

- This function will add a release to your wishlist / wantlist.    
`POST`
`const <Variable> = await discogs.addToUserWantlist("<Release ID>");`

- This function will remove a release from your wishlist / wantlist.  It **DOES NOT** add to your collection at the same time, if you want to do this, just chain commands.    
`DELETE`
`const <Variable> = await discogs.removeReleaseFromFolder("<Release ID>");`

# Suggestions, Updates & Errors

If you choose to use this library, and run into a problem, please log an issue or raise a PR, we are committed to this project in the long term and will act on all Issues promptly.

If you have suggestions for further functionality that is not already in the roadmap, please raise an Issue, we will add it to the list.

# Thanks

Thanks go out to [Mike Elsmore](https://github.com/ukmadLz). Without your help and support this project would never have got off the ground.

Thanks go to [Discogs](https://discogs.com) for enabling an API

Thanks go to [Bartve](https://github.com/bartve) for [Disconnect](https://github.com/bartve/disconnect) which although now unsupported, is a great library.  Disconnect was part of the inspiration for this Library.

Thanks go to [Joalla](https://github.com/joalla) for [Discogs_Client](https://github.com/joalla/discogs_client) which was part of the inspiration for this library.  I used this library extensively when I created a Python / Django version of the [VinylVault Website](https://www.thevinylvaultshow.co.uk)

# License 

MIT

# Other Resources

[Discogs API Documentation](https://www.discogs.com/developers/)

[RichCodesWeb on Twitch](https://twitch.tv/RichCodesWeb) - I live stream here most days writing code, it is where the development of this is being completed, as well as other projects.  

Come ask me questions, and / or make suggestions in livechat to shape further development of this library and add-on modules.