require("dotenv");
const Discogs = require("./dist").default;
console.log("Bollocks, This Works, I'm A Software Engineer!");

const main = async () => {
  const discogs = new Discogs({});

  //USER INFORMATION
  const user = await discogs.getUser("DexVinyl");
  const collection = await discogs.getUserCollection("DexVinyl");
  const wantlist = await discogs.getUserWantlist("DexVinyl");
  const folders = await discogs.getUserFolders("DexVinyl");
  const folderContents = await discogs.getUserFolderContents(
    "DexVinyl",
    "1841753"
  );
  const collectionValue = await discogs.getUserCollectionValue("DexVinyl");

  // RELEASE INFORMATION

  const releaseDetails = await discogs.getRelease("8749543"); //RICK-ROLL
  const releaseUserRating = await discogs.getReleaseUserRating("8749543");
  const releaseCommunityRating = await discogs.getReleaseCommunityRating(
    "8749543"
  );
  const releaseStats = await discogs.getReleaseStats("8749543");
  const releaseMaster = await discogs.getMasterRelease("83725");
  const releaseMasterVersions = await discogs.getMasterReleaseVersions("83725");

  // ARTIST INFORMATION

  const artist = await discogs.getArtist("72872"); //RICK ASTLEY
  const artistReleases = await discogs.getArtistReleases("72872");

  // LABEL INFORMATION

  const label = await discogs.getLabel("895"); //RCA
  const labelReleases = await discogs.getLabelReleases("895");

  // DISPLAY SHIT ON SCREEN TO TEST

  //console.log(artist.data);
  //   console.log(user.data);
  //   console.log(folders.data);
  //   console.log(collection.data);
  //   console.log(wantlist.data);
  //   console.log(folderContents.data);
  //   console.log(collectionValue.data);
  //   console.log(releaseDetails.data);
  //   console.log(releaseDetails.data);
  //   console.log(releaseUserRating.data);
  //   console.log(releaseCommunityRating.data);
  //   console.log(releaseStats.data);
  //   console.log(releaseMaster.data);
  //   console.log(releaseMasterVersions.data);
  //   console.log(artistDetails.data);
  //   console.log(artistReleases.data);
  //   console.log(labelDetails.data);
  //   console.log(labelReleases.data);
  console.log(discogs.getRatelimit());
};

main();
