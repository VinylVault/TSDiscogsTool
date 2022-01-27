require("dotenv");
const Discogs = require("./dist").default;
console.log("Bollocks, This Works, I'm A Software Engineer!");

const main = async () => {
  const discogs = new Discogs({});
  const data = await discogs.artist("72872");
  console.log(data.data);
  console.log(discogs.getRatelimit());
};

main();
