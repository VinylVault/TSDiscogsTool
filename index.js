require("dotenv");
const Discogs = require("./dist").default;
console.log("Bollocks, This Works, I'm A Software Engineer!");

const main = async () => {
  const discogs = new Discogs({});
  const data = await discogs.getArtist("72872");
  const user = await discogs.getUser("DexVinyl");
  const collection = await discogs.getUserCollection("DexVinyl");
  const wantlist = await discogs.getUserWantlist("DexVinyl");
  const folders = await discogs.getUserFolders("DexVinyl");
  const folderContents = await discogs.getUserFolderContents(
    "DexVinyl",
    "1841753"
  );
  const collectionValue = await discogs.getUserCollectionValue("DexVinyl");

  console.log(data.data);
  console.log(user.data);
  console.log(folders.data);
  console.log(collection.data);
  console.log(wantlist.data);
  console.log(folderContents.data);
  console.log(collectionValue.data);
  console.log(collectionValue.headers);

  console.log(discogs.getRatelimit());
};

main();
