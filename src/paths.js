const path = require("path");

const src = path.join(process.env.INIT_CWD, process.env.TISF_SRC || 'scripts');
const dataPath = path.join(process.env.INIT_CWD, 'data');
const assetsPath = path.join(process.env.INIT_CWD, 'assets');
const envPath = path.join(process.env.INIT_CWD, 'env');

module.exports = {src, dataPath, assetsPath, envPath};
