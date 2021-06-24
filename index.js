var fs = require("fs");
var Parser = require("i18next-scanner").Parser;

var customHandler = function (key, options) {
  options.defaultValue = "_TRANSLATION_";
  parser.set(key, options);
};
const options = {
  lngs: ["en", "hu"],
  func: {
    list: ["i18next.t", "i18n.t", "t"],
    extensions: [".js", ".jsx", ".tsx", "ts"],
  },
};
var parser = new Parser(options);
var content = "";

// Parse Translation Function
// i18next.t('key');
content = fs.readFileSync("/Users/dani/PROGI/crai18/src/Content.tsx", "utf-8");
parser.parseFuncFromString(content, customHandler); // pass a custom handler
//   .parseFuncFromString(content, { list: ["i18next.t"] }) // override `func.list`
// .parseFuncFromString(content, { list: ["t"] }, customHandler);
// .parseFuncFromString(content); // using default options and handlern

// Parse HTML Attribute
// <div data-i18n="key"></div>
// content = fs.readFileSync("/Users/dani/PROGI/crai18/src/Content.tsx", "utf-8");
// parser
//   .parseAttrFromString(content, customHandler) // pass a custom handler
//   .parseAttrFromString(content, { list: ["data-i18n"] }) // override `attr.list`
//   .parseAttrFromString(content, { list: ["data-i18n"] }, customHandler)
//   .parseAttrFromString(content); // using default options and handler

console.log(parser.get());

// console.log(parser.get({ sort: true }));
// console.log(parser.get("translation:key", { lng: "en" }));
