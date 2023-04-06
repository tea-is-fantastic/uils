const {rn_dirs, rn_androidSrc, rn_android} = require("./src/rn_paths");
const {yamls} = require("./src/yamls");
const {downloadFile, projectDir} = require("./src/func");
const {src, envPath, assetsPath, dataPath} = require("./src/paths");
const {regexReplace} = require("./src/regex");
const {jsonMerge, argv} = require("./src/json");

module.exports = {
    src, downloadFile, yamls, rn_dirs, regexReplace,
    rn_android, rn_androidSrc, jsonMerge, projectDir,
    argv, dataPath, envPath, assetsPath
};
