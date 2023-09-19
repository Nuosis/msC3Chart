const open = require("open");
const path = require("path");
const server = "$";
//const server = "216.8.180.143";
const file = "jsDev";
//const file = "TimeEntry";
const uploadScript = "UploadToHTML";

const fileUrl = `fmp://${server}/${file}?script=${uploadScript}&param=`;

const thePath = path.join(__dirname, "../", "dist", "index.html");
const url = fileUrl + encodeURIComponent(thePath);
open(url);
