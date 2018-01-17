var stealTools = require("steal-tools");

var buildPromise = stealTools.build({
  config: __dirname + "/package.json!npm"
}, {
  bundleAssets: true
});
// options added by `donejs add cordova` - START
var cordovaOptions = {
  buildDir: "./build/cordova",
  id: "com.donejs.donejschat",
  name: "donejs chat",
  platforms: ["ios"],
  plugins: ["cordova-plugin-transport-security"],
  index: __dirname + "/production.html",
  glob: []
};

var stealCordova = require("steal-cordova")(cordovaOptions);
// Check if the cordova option is passed.
var buildCordova = process.argv.indexOf("cordova") > 0;

if(buildCordova) {
  buildPromise.then(stealCordova.build).then(stealCordova.ios.emulate);
}
// options added by `donejs add cordova` - END
