require("dotenv");
const Discogs = require("../dist").default;
// console.log("Bollocks, This Works, I'm A Software Engineer!");

const main = async () => {
  const discogs = new Discogs({});

    // USER INFORMATION
    // const user = await discogs.getUser();
    // console.log(user.data);

    // const collection = await discogs.getUserCollection("1", "artist", "desc");
    // const collection2 = await discogs.getUserCollection("1", "added", "desc");
    // const wantlist = await discogs.getUserWantlist();
    // const folders = await discogs.getUserFolders();
    // const folderContents = await discogs.getUserFolderContents("3784660", "2");
    // const collectionValue = await discogs.getUserCollectionValue();

    // FOLDER INFORMATION


    // COLLECTION INFORMATION


    // RELEASE INFORMATION

    // const releaseDetails = await discogs.getRelease("249504"); //RICK-ROLL   829032
    // const releaseUserRating = await discogs.getReleaseUserRating("829032");

    // const releaseCommunityRating = await discogs.getReleaseCommunityRating("829032");
    // const releaseStats = await discogs.getReleaseStats("249504");
    // const releaseMaster = await discogs.getMasterRelease("96559");
    // const releaseMasterVersions = await discogs.getMasterReleaseVersions("96559");

    // ARTIST INFORMATION

    // const artistDetails = await discogs.getArtistDetails("72872"); //RICK ASTLEY
    // const artistReleases = await discogs.getArtistReleases("72872");

    // LABEL INFORMATION

    // const labelDetails = await discogs.getLabelDetails("157"); //RCA
    // const labelReleases = await discogs.getLabelReleases("895");

    // DISPLAY STUFF ON SCREEN TO TEST

  
    // console.log(folders.data);
    // console.log(collection.data);
    // console.log(wantlist.data);
    // console.log(folderContents.data);
    // console.log(collectionValue.data);
    // console.log(releaseDetails.data);
    // console.log(releaseUserRating.data);
    // console.log(releaseUserRating.headers);
    // console.log(releaseCommunityRating.data);
    // console.log(releaseStats.data);
    // console.log(releaseMaster.data);
    // console.log(releaseMasterVersions.data);
    // console.log(artistDetails.data);
    // console.log(artistReleases.data);
    // console.log(labelDetails.data);
    // console.log(labelReleases.data);
    // console.log(discogs.getRatelimit());

    // const createUserFolder = await discogs.createUserFolder("ZzZ Something So Wrong");
    // console.log(createUserFolder);

    // const editFolder = await discogs.editUserFolder("4456646", "ZzZ Something Went Right");
    // console.log(editFolder);

    // const deleteFolder = await discogs.deleteUserFolder("4456646");
    // console.log(deleteFolder);

    // const addReleaseToFolder = await discogs.addReleaseToFolder("23035481", "1");
    // console.log(addReleaseToFolder);

    // const changeReleaseFolder = await discogs.changeReleaseFolder("1773118", "4456646");
    // console.log(changeReleaseFolder);

    // const removeReleaseFromFolder = await discogs.removeReleaseFromFolder("23035481");
    // console.log(removeReleaseFromFolder);

    // const editUser = await discogs.editUser("" , "", "", "", "GBP");
    // console.log(editUser);

    // const listCustomFields = await discogs.listCustomFields();
    // console.log(listCustomFields.data);

    // const editCustomFieldValue = await discogs.editCustomFieldValue("829032", "4", "farty noises");
    // console.log(editCustomFieldValue.headers);
    // console.log(editCustomFieldValue.data);

    // const addToWantlist = await discogs.addToUserWantlist("10053468");
    // console.log(addToWantlist.data);
    // console.log(addToWantlist.headers);

    // const addReleaseToCollection = await discogs.removeFromUserCollection("23035481");
    // console.log(addReleaseToCollection.data);
    // console.log(addReleaseToCollection.headers);

    // const setChangeReleaseUserRating = await discogs.setChangeReleaseUserRating("829032", 2);
    // console.log(setChangeReleaseUserRating.data);
    // console.log(setChangeReleaseUserRating.headers);

    // const deleteReleaseUserRating = await discogs.deleteReleaseUserRating("829032");
    // console.log(deleteReleaseUserRating.data);
    // console.log(deleteReleaseUserRating.headers);

};

main();
