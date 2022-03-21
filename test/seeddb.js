require("dotenv");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//
// Set Seeding Date and Time
//

var date_ob = new Date();

//
// Start Seed
//

// Set-Up Shelves Array

shelvesArray = [
  {
    id: "-100",
    name: "Dex's Tools",
    cnt: 0,
    slug: "dex-s-tools",
  },
];

// Set-Up Artists Array

artistsArray = [
  {
    id: "194",
    name: "Various Artists",
    slug: "various-artists-194",
    discogsPage: "#",
    sortLetter: "#",
    sortName: "#",
    dImgUrl: "#",
    lImgUrl: "#",
    aReleaseQty: 0,
    aTrackQty: 0,
    aLib: true,
    aWant: false,
  },
  {
    id: "355",
    name: "Unknown Artist",
    slug: "unknown-artist-355",
    discogsPage: "#",
    sortLetter: "#",
    sortName: "#",
    dImgUrl: "#",
    lImgUrl: "#",
    aReleaseQty: 0,
    aTrackQty: 0,
    aLib: true,
    aWant: false,
  },
  {
    id: "-1",
    name: "Any Artist",
    slug: "any-artist",
    discogsPage: "#",
    sortLetter: "#",
    sortName: "#",
    dImgUrl: "#",
    lImgUrl: "#",
    aReleaseQty: 0,
    aTrackQty: 0,
    aLib: true,
    aWant: false,
  },
  {
    id: "118760",
    name: "No Listed Artist",
    slug: "no-listed-artist-118760",
    discogsPage: "#",
    sortLetter: "#",
    sortName: "#",
    dImgUrl: "#",
    lImgUrl: "#",
    aReleaseQty: 0,
    aTrackQty: 0,
    aLib: true,
    aWant: false,
  },
  {
    id: "967691",
    name: "Anonymous Artist",
    slug: "anonymous-artist-967691",
    discogsPage: "#",
    sortLetter: "#",
    sortName: "#",
    dImgUrl: "#",
    lImgUrl: "#",
    aReleaseQty: 0,
    aTrackQty: 0,
    aLib: true,
    aWant: false,
  },
  {
    id: "-100",
    name: "Dex Vinyl / The Vinyl Vault Show",
    slug: "dex-vinyl-the-vinyl-vault-show",
    discogsPage: "#",
    sortLetter: "#",
    sortName: "#",
    dImgUrl: "#",
    lImgUrl: "#",
    aReleaseQty: 0,
    aTrackQty: 0,
    aLib: false,
    aWant: false,
  },
  {
    id: "-900",
    name: "Station Provided Content",
    slug: "station-provided-content",
    discogsPage: "#",
    sortLetter: "#",
    sortName: "#",
    dImgUrl: "#",
    lImgUrl: "#",
    aReleaseQty: 0,
    aTrackQty: 0,
    aLib: false,
    aWant: false,
  },
];

// Set-Up Record Label Array

labelsArray = [
  {
    id: "-100",
    name: "Dex Vinyl / The Vinyl Vault Show",
    slug: "dex-vinyl-the-vinyl-vault-show",
    discogsPage: "#",
    sortLetter: "#",
    sortName: "#",
    dImgUrl: "#",
    lImgUrl: "#",
    aReleaseQty: 0,
    aTrackQty: 0,
    aLib: false,
    aWant: false,
  },
];

// Set-Up Formats Array

formatsArray = [
  {
    format: "Digital File",
  },
];

// Set-Up Genres Array

genreArray = [
  {
    genre: "DJ Tool",
    gCnt: 0,
  },
];

// Set-Up Styles Array

stylesArray = [
  {
    style: "Jingle",
    sCnt: 0,
  },
];

// Set-Up Releases

releaseArray = [
  {
    id: "-100",
    master: "-100",
    dPage: "#",
    dImgUrl: "#",
    lImgUrl: "#",
    title: "Dex's Tools",
    sortLetter: "-",
    sortName: "-",
    catNo: "-",
    year: 0,
    discs: 0,
    rating: 0.0,
    played: 0,
    lastPlayed: "1970-01-01 01:00:01+01",
    added: "1970-01-01 01:00:01+01",
    decade50s: false,
    decade60s: false,
    decade70s: false,
    decade80s: false,
    decade90s: false,
    decade00s: false,
    decade10s: false,
    decade20s: false,
    rLib: false,
    rWant: false,
    slug: "dex-s-tools",
    sid: "-100",
    aid: "-100",
    rlid: "-100",
    fid: "Digital File",
    gid: "DJ Tool",
    styid: "Jingle",
    uarid: "DJ Tool / Jingle",
  },
];

// Set-Up Tracks Array

trackArray = [
  {
    id: "-100-0001-01",
    track: "01",
    title: "HalfPast DoubleShot Tools",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: false,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0002-01a",
    track: "01a",
    title: "Start Of HalfPast DoubleShot - Marker",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0003-01b",
    track: "01b",
    title: "Time For HalfPast DoubleShot",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0004-01c",
    track: "01c",
    title: "It's The HalfPast DoubleShot",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0005-01d",
    track: "01d",
    title: "End Of HalfPast DoubleShot - Marker",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0006-02",
    track: "02",
    title: "Lefting Tools",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: false,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0007-02a",
    track: "02a",
    title: "Start Of Lefting - Marker",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0008-02b",
    track: "02b",
    title: "Lefting: Lefting",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0009-02c",
    track: "02c",
    title: "Lefting: Original",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0010-02d",
    track: "02d",
    title: "End Of Lefting - Marker",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0011-03",
    track: "03",
    title:
      "That Feature Where We Listen To An Album Track By Track, Week By Week Tools",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: false,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0012-03a",
    track: "03a",
    title:
      "Start Of That Feature Where We Listen To An Album Track By Track, Week By Week - Marker",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0013-03b",
    track: "03b",
    title:
      "Jingle for That Feature Where We Listen To An Album Track By Track, Week By Week",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0014-03c",
    track: "03c",
    title:
      "End Of That Feature Where We Listen To An Album Track By Track, Week By Week - Marker",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0015-04",
    track: "04",
    title: "Jingles",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: false,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0016-04a",
    track: "04a",
    title: "The Vinyl Vault Opener 2 Hour",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0017-04b",
    track: "04b",
    title: "The Vinyl Vault Opener 3 Hour",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0018-04c",
    track: "04c",
    title: "The Vinyl Vault Continues 2 Hour",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0019-04d",
    track: "04d",
    title: "The Vinyl Vault Continues 3 Hour",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0020-04e",
    track: "04e",
    title: "Listening To The Vinyl Vault Show",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0021-04f",
    track: "04f",
    title: "Request Normal",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0022-04g",
    track: "04g",
    title: "Request FX",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-100",
  },
  {
    id: "-100-0023-04h",
    track: "04h",
    title: "Station Jingle",
    played21: 0,
    played22: 0,
    played23: 0,
    lastplayed: "1970-01-01 00:00:00+01",
    subtrack: true,
    sortletter: "-",
    sortname: "-",
    rid: "-100",
    aid: "-900",
  },
];

// Set-Up Unavailable Reason Array

unavailablereasonArray = [
  {
    reason: "DJ Tool / Jingle",
  },
];

// Set-Up Global Tags Array

globaltagArray = [
  {
    tag: "Radio Show",
  },
  {
    tag: "Radio",
  },
  {
    tag: "Variety",
  },
  {
    tag: "Jukebox",
  },
  {
    tag: "Playlist",
  },
  {
    tag: "BlogPost",
  },
  {
    tag: "Classic Album",
  },
  {
    tag: "New Album",
  },
  {
    tag: "Review",
  },
  {
    tag: "Featured Album",
  },
];

// Set-Up Locations Array

locationsArray = [
  {
    id: "-100",
    name: "PC Digital Files",
    lCnt: 0,
    slug: "pc-digital-files",
  },
  {
    id: "-101",
    name: "MiniDisc #1",
    lCnt: 0,
    slug: "minidisc-1",
  },
  {
    id: "-110",
    name: "Tape Pack #1",
    lCnt: 0,
    slug: "tape-pak-1",
  },
];

// Set-Up Shows Array

showsArray = [
  {
    title: "The Vinyl Vault Show 2 Hours",
    active: true,
    duration: 0,
    image: "#",
    slug: "vinyl-vault-2hr",
  },
  {
    title: "The Vinyl Vault Show 3 Hours",
    active: true,
    duration: 0,
    image: "#",
    slug: "vinyl-vault-3hr",
  },
  {
    title: "The Vinyl Vault Show Rockin' Records",
    active: true,
    duration: 0,
    image: "#",
    slug: "vinyl-vault-rockin-records",
  },
  {
    title: "The Vinyl Vault Show Back To The 80's",
    active: true,
    duration: 0,
    image: "#",
    slug: "vinyl-vault-back-to-80s",
  },
];

// Set-Up Show Types Array

showTypesArray = [
  {
    type: "Live",
  },
  {
    type: "Pre-Recorded",
  },
  {
    type: "Repeated Live Show",
  },
  {
    type: "Archive Show",
  },
  {
    type: "Repeated Pre-Recorded Show",
  },
  {
    type: "Special Edition",
  },
];

// Write To Database

//
// Shelves
//

for (arrayToWrite of shelvesArray) {
  console.log("#### SHELF");
  console.log(arrayToWrite);
}

//
// Artists
//
for (arrayToWrite of artistsArray) {
  console.log("#### ARTIST");
  console.log(arrayToWrite);
}

//
// Record Labels
//

for (arrayToWrite of labelsArray) {
  console.log("#### RECORD LABEL");
  console.log(arrayToWrite);
}

//
// Formats
//

for (arrayToWrite of formatsArray) {
  console.log("#### FORMAT");
  console.log(arrayToWrite);
}

//
// Genres
//

for (arrayToWrite of genreArray) {
  console.log("#### GENRE");
  console.log(arrayToWrite);
}

//
// Styles
//

for (arrayToWrite of stylesArray) {
  console.log("#### STYLE");
  console.log(arrayToWrite);
}

//
// Locations
//

for (arrayToWrite of locationsArray) {
  console.log("#### LOCATION");
  console.log(arrayToWrite);
}

//
// Releases
//

for (arrayToWrite of releaseArray) {
  console.log("#### RELEASE");
  console.log(arrayToWrite);
}

//
// Tracks
//

for (arrayToWrite of trackArray) {
  if (arrayToWrite.subtrack != true) {
    console.log("#### TRACK");
    console.log(arrayToWrite);
  } else {
    console.log("#### PART TRACK");
    console.log(arrayToWrite);
  }
}
