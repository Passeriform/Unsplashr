const verifyTypeScriptSetup = require("react-scripts/scripts/utils/verifyTypeScriptSetup");
const fs = require("fs");
const os = require("os");
const path = require("path");

const mapObject = (obj, mapper) =>
  Object.fromEntries(Object.entries(obj).map(mapper));

// original copy of tsconfig
const originalTSConfig = require("./tsconfig.json");

// generates a mapping of aliases that webpack can take
const webpackCompatibleAliases = mapObject(
  originalTSConfig.compilerOptions.paths,
  ([k, [v]]) => [
    k.slice(0, -2),
    path.resolve(
      __dirname,
      originalTSConfig.compilerOptions.baseUrl,
      v.slice(0, -1)
    ),
  ]
);

// wrap the utility function that is ruining the party!! >:(
require.cache[
  require.resolve("react-scripts/scripts/utils/verifyTypeScriptSetup")
].exports = function () {
  // let cra think they ruined the party
  verifyTypeScriptSetup();

  // delete the cached tsconfig.json so we can get the cra-updated tsconfig
  delete require.cache[require.resolve("./tsconfig.json")];

  const tsconfig = require("./tsconfig.json");

  // restore paths
  tsconfig.compilerOptions.paths = originalTSConfig.compilerOptions.paths;

  // write tsconfig as it is written in the verifyTypeScriptSetup.js file
  fs.writeFileSync(
    "tsconfig.json",
    JSON.stringify(tsconfig, null, 2).replace(/\n/g, os.EOL) + os.EOL
  );
};

module.exports = {
  webpack: {
    configure: (config) => {
      if (!config.resolve) config.resolve = {};
      if (!config.resolve.alias) config.resolve.alias = {};

      // load the ts aliases into webpack, from tsconfig
      Object.assign(config.resolve.alias, webpackCompatibleAliases);

      // do whatever else you need to

      return config;
    },
  },
};
