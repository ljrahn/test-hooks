// jest automatically uses this file to transpile our code
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-react",
  ],
};
