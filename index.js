require("dotenv");
const Discogs = require("./dist").default; // needs changing, but what too?
// console.log("Bollocks, This Works, I'm A Software Engineer!");

const main = async () => {
  const discogs = new Discogs({});

  //USER INFORMATION
  const user = await discogs.getUser();
  // console.log(user.data);

  const collection = await discogs.getUserCollection("1", "artist", "desc");
  // console.log(collection.data);

  const wantlist = await discogs.getUserWantlist();
  // console.log(wantlist.data);

  const folders = await discogs.getUserFolders();
  console.log(folders.data);
  console.log(folders.data.folders);

  const folderContents = await discogs.getUserFolderContents("3784660", "2");
  // console.log(folderContents.data);

  const collectionValue = await discogs.getUserCollectionValue();
  // console.log(collectionValue.data);

  // RELEASE INFORMATION

  const releaseDetails = await discogs.getRelease("249504"); //RICK-ROLL
  // console.log(releaseDetails.data);

  const releaseUserRating = await discogs.getReleaseUserRating("249504");
  // console.log(releaseUserRating.data);

  const releaseCommunityRating = await discogs.getReleaseCommunityRating("8749543");
  // console.log(releaseCommunityRating.data);

  const releaseStats = await discogs.getReleaseStats("249504");
  // console.log(releaseStats.data);

  const releaseMaster = await discogs.getMasterRelease("9655");
  // console.log(releaseMaster.data);

  const releaseMasterVersions = await discogs.getMasterReleaseVersions("96559");
  // console.log(releaseMasterVersions.data);


  // ARTIST INFORMATION

  const artistDetails = await discogs.getArtistDetails("72872"); //RICK ASTLEY
  // console.log(artistDetails.data);

  const artistReleases = await discogs.getArtistReleases("72872");
  // console.log(artistReleases.data);


  // LABEL INFORMATION

  const labelDetails = await discogs.getLabelDetails("895");  //RCA
  // console.log(labelDetails.data);

  const labelReleases = await discogs.getLabelReleases("895");
  // console.log(labelReleases.data);
  console.log(labelReleases.headers)

};

main();
