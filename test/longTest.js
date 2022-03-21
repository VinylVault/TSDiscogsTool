require("dotenv");
const Discogs = require("../dist").default; // needs changing, but what too?
// console.log("Bollocks, This Works, I'm A Software Engineer!");

const main = async () => {
  const discogs = new Discogs({});
  const paginationGetter = await discogs.getUserCollection();
  let currentPage = 1;
  // console.log(paginationGetter)
  let totalPages = paginationGetter.data.pagination.pages;
  // console.log(totalPages);

  let startingTime = new Date();
  let totalNumberReleases = 1;

  while (currentPage <= totalPages) {
    console.log("*********************************");
    console.log(
      "Current Page: " + currentPage + " of " + totalPages + " pages."
    );
    console.log("*********************************");

    const collection = await discogs.getUserCollection(
      currentPage.toString(),
      "added",
      "desc"
    );
    // console.log(collection.data);
    // console.log(collection.headers);
    // console.log(collection.data.releases);
    for (release of collection.data.releases) {
      // console.log(release.folder.id);
      // console.log(release.release_id);
      // console.log(release.basic_information.master_id);
      // console.log(release.date_added);
      // console.log(release.basic_information.title);
      // if ("artists_sort" in release.basic_information) {
      //   console.log(release.basic_information.artists_sort);
      // } else {
      //   console.log("FALSE");
      // }
      // console.log(release.basic_information.styles);
      // console.log(release.basic_information.huge_thumb);
      // console.log(release.basic_information.year);

      console.log(release);
      for (artist of release.basic_information.artists) {
        const artistDetails = await discogs.getArtistDetails(artist.id);
        console.log(artistDetails);
      }

      for (label of release.basic_information.labels) {
        const labelDetails = await discogs.getLabelDetails(label.id);
        console.log(labelDetails);
      }

      for (track of release.basic_information.tracklist) {
        // console.log(track);
        if ("artists" in track) {
          for (trackartist of track.artists) {
            const trackartistDetails = await discogs.getArtistDetails(
              trackartist.id
            );
            console.log(trackartistDetails);
          }
        } else {
          console.log("No Track Artist, Use Album Artists");
          if ("artists_sort" in release.basic_information) {
            console.log(release.basic_information.artists_sort);
          } else {
            console.log("FALSE");
          }
        }
      }

      console.log("*********************************");
      console.log("Completed Releases: " + totalNumberReleases);
      totalNumberReleases++;
      let endTime = new Date();
      takenTime = endTime - startingTime;
      console.log("Time (ms) Taken So Far: " + takenTime);
      console.log("*********************************");
    }
    currentPage++;
  }
};
main();
