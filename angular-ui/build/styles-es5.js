(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n\n\n/* ------ Deafult Reset CSS Start ------ */\n\n\nbody {\n    overflow-x: hidden;\n}\n\n\nbody,\nhtml {\n    padding: 0;\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    font-weight: normal;\n    color: #707070;\n    direction: ltr;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background: #f2f2f2;\n}\n\n\nh1,\nh2,\nh3,\nh4,\nh4,\nh5,\nh6,\nspan,\np,\nul,\nli,\ndl,\ndt,\ndd,\nimg,\na,\ndiv,\nheader,\nfooter,\nform,\ninput {\n    margin: 0px;\n    padding: 0px;\n    border: none;\n    outline: none;\n}\n\n\ndiv {\n    display: block;\n}\n\n\na,\na:hover {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n\n.borderTop {\n    width: 100%;\n    border-top: solid 1px #f4f4f4;\n    margin: 5px 0;\n}\n\n\n.borderBot {\n    width: 100%;\n    border-bottom: solid 1px #f4f4f4;\n    margin: 5px 0;\n}\n\n\n.textCenter {\n    text-align: center;\n}\n\n\nh1 {\n    width: 100%;\n    float: left;\n    font-size: 36px;\n    font-weight: normal;\n    color: #5e5e5e;\n    line-height: 32px;\n    margin: 10px 0 25px 0;\n}\n\n\np {\n    width: 100%;\n    float: left;\n    font-size: 16px;\n    font-weight: normal;\n    color: #707070;\n    line-height: 24px;\n    margin: 0 0 20px 0;\n}\n\n\n/* ------ Deafult Reset CSS Ends ------ */\n\n\n.wrapper {\n    width: 100%;\n    height: auto;\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    position: relative;\n}\n\n\n.header {\n    width: 100%;\n    float: left;\n    padding: 10px 10px 10px;\n    margin: 0;\n    box-sizing: border-box;\n    background: #3a85b8;\n    text-align: center;\n}\n\n\n.bodyContainer {\n    width: 100%;\n    float: left;\n    padding: 30px;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n\n.bodyContainer .container {\n    width: 100%;\n    max-width: 980px;\n    padding: 15px;\n    margin: 0 auto;\n    box-sizing: border-box;\n    border: solid 1px #e4e4e4;\n    background: #ffffff;\n    display: table;\n}\n\n\np a.addEmployee {\n    width: auto;\n    float: right;\n    color: #3a85b8;\n    font-size: 16px;\n    background: url('add.png') no-repeat left top;\n    padding: 3px 0 0 35px;\n}\n\n\np a.addEmployee:hover {\n    color: #dd870b;\n}\n\n\n.dataTable {\n    width: 100%;\n    float: left;\n    margin: 0 0 10px 0;\n    border: solid 1px #dddddd;\n}\n\n\n.dataTable .tableHolder {\n    width: 100%;\n    height: 400px;\n    float: left;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n\n.dataTable .row {\n    width: 100%;\n    float: left;\n    padding: 10px 10px;\n    box-sizing: border-box;\n    border-bottom: solid 1px #dddddd;\n    text-align: left;\n}\n\n\n.dataTable .row:last-child {\n    border-bottom: none;\n}\n\n\n.dataTable .row .col {\n    /* width: 25%; */\n    float: left;\n    line-height: 29px;\n    /* text-align: center; */\n}\n\n\n.dataTable .row .col:first-child {\n    width: 80px;\n    text-align: left;\n}\n\n\n.dataTable .row .col:nth-child(2) {\n    width: calc(100% - 380px);\n    float: left;\n}\n\n\n.dataTable .row .col:nth-child(3) {\n    width: 150px;\n}\n\n\n.dataTable .row .col:last-child {\n    width: 150px;\n    text-align: left;\n    line-height: normal;\n}\n\n\n.dataTable .row .col span {\n    display: none;\n}\n\n\n.dataTable .row.header {\n    padding: 12px 10px;\n    background: linear-gradient(0deg, rgb(236, 236, 236) 35%, rgba(247, 246, 247) 100%);\n    font-size: 14px;\n    font-weight: 600;\n    color: #5e5e5e;\n}\n\n\n.dataTable .row.header .col:last-child {\n    text-align: left;\n}\n\n\n.dataTable .row .col:last-child a {\n    width: auto;\n    float: left;\n    margin: 0 0 0 15px;\n}\n\n\n.dataTable .row {\n    background: #f7f7f7;\n}\n\n\n.dataTable .row:nth-child(2n) {\n    background: #ffffff;\n}\n\n\n@media only screen and (min-width: 320px) and (max-width: 600px) {\n    .dataTable .row.header {\n        display: none;\n    }\n    .dataTable .row .col span {\n        display: block;\n        width: 100%;\n        float: left;\n        margin: 0 0 10px 0;\n        font-weight: 600;\n        color: #5e5e5e;\n    }\n    .dataTable .row .col {\n        width: 100%;\n        float: left;\n        text-align: left;\n        margin: 0 0 15px 0;\n    }\n    .dataTable .row .col:first-child {\n        width: 100%;\n        float: left;\n        text-align: left;\n    }\n}\n\n\n.popBox {\n    width: 100%;\n    min-height: 100vh;\n    float: left;\n    background: rgba(0, 0, 0, 0.6);\n    position: absolute;\n}\n\n\n.popBox .innerBox {\n    width: 340px;\n    height: auto;\n    padding: 10px;\n    box-sizing: border-box;\n    margin: 100px auto 0px auto;\n    background: #ffffff;\n    border-radius: 6px;\n    display: table;\n}\n\n\n.addEmp h3 {\n    width: 100%;\n    float: left;\n    text-align: center;\n    color: #3a85b8;\n    border-bottom: solid 1px #3a85b8;\n    padding: 0 0 10px 0;\n    margin: 0 0 10px 0;\n    font-weight: 600;\n}\n\n\n.form-group {\n    width: 100%;\n    float: left;\n    margin: 0 0 10px 0;\n}\n\n\n.form-group .textCenter {\n    text-align: center;\n}\n\n\n.form-group label {\n    width: 100%;\n    float: left;\n    margin: 0 0 2px 0;\n    font-size: 12px;\n    font-weight: normal;\n    color: #000000;\n    line-height: 22px;\n}\n\n\n.form-group label span {\n    width: auto;\n    color: #dc0000;\n}\n\n\n.form-group input {\n    width: 100%;\n    float: left;\n    padding: 10px;\n    box-sizing: border-box;\n    border: solid 1px #f1f1f1;\n    font-size: 14px;\n    color: #505050;\n    background: #fafafa;\n}\n\n\n.form-group button.btn {\n    width: auto;\n    text-align: center;\n    background: #e0e0e0;\n    text-transform: uppercase;\n    color: #909090;\n    font-size: 16px;\n    padding: 10px 15px;\n    border: none;\n    cursor: pointer;\n    border-radius: 2px;\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);\n    margin: 10px 10px 0 10px;\n}\n\n\n.form-group button.main {\n    background: #00adbb;\n    color: #FFFFFF;\n}\n\n\n/* .form-group button.main:hover {\n    background: #0196a2;\n    color: #FFFFFF;\n} */\n\n\n/* .form-group button.disabledd {\n    background: #e0e0e0 !important;\n    color: #909090 !important;\n    cursor: no-drop!important;\n} */\n\n\n.errorBox {\n    width: 100%;\n    float: left;\n    padding: 5px;\n    margin: 5px 0px;\n    border: solid 1px #dc0000;\n    font-size: 12px;\n    color: #dc0000;\n    box-sizing: border-box;\n}\n\n\n.footer {\n    width: 100%;\n    float: left;\n    padding: 20px 0 0 0;\n    margin: 5px 0 0 0;\n    box-sizing: border-box;\n    border-top: solid 1px #e4e4e4;\n    text-align: center;\n    font-size: 16px;\n}", "", {
      "version": 3,
      "sources": ["styles.css"],
      "names": [],
      "mappings": "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",
      "file": "styles.css",
      "sourcesContent": ["/* You can add global styles to this file, and also import other style files */\n\n\n/* ------ Deafult Reset CSS Start ------ */\n\nbody {\n    overflow-x: hidden;\n}\n\nbody,\nhtml {\n    padding: 0;\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    font-weight: normal;\n    color: #707070;\n    direction: ltr;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background: #f2f2f2;\n}\n\nh1,\nh2,\nh3,\nh4,\nh4,\nh5,\nh6,\nspan,\np,\nul,\nli,\ndl,\ndt,\ndd,\nimg,\na,\ndiv,\nheader,\nfooter,\nform,\ninput {\n    margin: 0px;\n    padding: 0px;\n    border: none;\n    outline: none;\n}\n\ndiv {\n    display: block;\n}\n\na,\na:hover {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.borderTop {\n    width: 100%;\n    border-top: solid 1px #f4f4f4;\n    margin: 5px 0;\n}\n\n.borderBot {\n    width: 100%;\n    border-bottom: solid 1px #f4f4f4;\n    margin: 5px 0;\n}\n\n.textCenter {\n    text-align: center;\n}\n\nh1 {\n    width: 100%;\n    float: left;\n    font-size: 36px;\n    font-weight: normal;\n    color: #5e5e5e;\n    line-height: 32px;\n    margin: 10px 0 25px 0;\n}\n\np {\n    width: 100%;\n    float: left;\n    font-size: 16px;\n    font-weight: normal;\n    color: #707070;\n    line-height: 24px;\n    margin: 0 0 20px 0;\n}\n\n\n/* ------ Deafult Reset CSS Ends ------ */\n\n.wrapper {\n    width: 100%;\n    height: auto;\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    position: relative;\n}\n\n.header {\n    width: 100%;\n    float: left;\n    padding: 10px 10px 10px;\n    margin: 0;\n    box-sizing: border-box;\n    background: #3a85b8;\n    text-align: center;\n}\n\n.bodyContainer {\n    width: 100%;\n    float: left;\n    padding: 30px;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n.bodyContainer .container {\n    width: 100%;\n    max-width: 980px;\n    padding: 15px;\n    margin: 0 auto;\n    box-sizing: border-box;\n    border: solid 1px #e4e4e4;\n    background: #ffffff;\n    display: table;\n}\n\np a.addEmployee {\n    width: auto;\n    float: right;\n    color: #3a85b8;\n    font-size: 16px;\n    background: url(./assets/add.png) no-repeat left top;\n    padding: 3px 0 0 35px;\n}\n\np a.addEmployee:hover {\n    color: #dd870b;\n}\n\n.dataTable {\n    width: 100%;\n    float: left;\n    margin: 0 0 10px 0;\n    border: solid 1px #dddddd;\n}\n\n.dataTable .tableHolder {\n    width: 100%;\n    height: 400px;\n    float: left;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.dataTable .row {\n    width: 100%;\n    float: left;\n    padding: 10px 10px;\n    box-sizing: border-box;\n    border-bottom: solid 1px #dddddd;\n    text-align: left;\n}\n\n.dataTable .row:last-child {\n    border-bottom: none;\n}\n\n.dataTable .row .col {\n    /* width: 25%; */\n    float: left;\n    line-height: 29px;\n    /* text-align: center; */\n}\n\n.dataTable .row .col:first-child {\n    width: 80px;\n    text-align: left;\n}\n\n.dataTable .row .col:nth-child(2) {\n    width: calc(100% - 380px);\n    float: left;\n}\n\n.dataTable .row .col:nth-child(3) {\n    width: 150px;\n}\n\n.dataTable .row .col:last-child {\n    width: 150px;\n    text-align: left;\n    line-height: normal;\n}\n\n.dataTable .row .col span {\n    display: none;\n}\n\n.dataTable .row.header {\n    padding: 12px 10px;\n    background: linear-gradient(0deg, rgb(236, 236, 236) 35%, rgba(247, 246, 247) 100%);\n    font-size: 14px;\n    font-weight: 600;\n    color: #5e5e5e;\n}\n\n.dataTable .row.header .col:last-child {\n    text-align: left;\n}\n\n.dataTable .row .col:last-child a {\n    width: auto;\n    float: left;\n    margin: 0 0 0 15px;\n}\n\n.dataTable .row {\n    background: #f7f7f7;\n}\n\n.dataTable .row:nth-child(2n) {\n    background: #ffffff;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 600px) {\n    .dataTable .row.header {\n        display: none;\n    }\n    .dataTable .row .col span {\n        display: block;\n        width: 100%;\n        float: left;\n        margin: 0 0 10px 0;\n        font-weight: 600;\n        color: #5e5e5e;\n    }\n    .dataTable .row .col {\n        width: 100%;\n        float: left;\n        text-align: left;\n        margin: 0 0 15px 0;\n    }\n    .dataTable .row .col:first-child {\n        width: 100%;\n        float: left;\n        text-align: left;\n    }\n}\n\n.popBox {\n    width: 100%;\n    min-height: 100vh;\n    float: left;\n    background: rgba(0, 0, 0, 0.6);\n    position: absolute;\n}\n\n.popBox .innerBox {\n    width: 340px;\n    height: auto;\n    padding: 10px;\n    box-sizing: border-box;\n    margin: 100px auto 0px auto;\n    background: #ffffff;\n    border-radius: 6px;\n    display: table;\n}\n\n.addEmp h3 {\n    width: 100%;\n    float: left;\n    text-align: center;\n    color: #3a85b8;\n    border-bottom: solid 1px #3a85b8;\n    padding: 0 0 10px 0;\n    margin: 0 0 10px 0;\n    font-weight: 600;\n}\n\n.form-group {\n    width: 100%;\n    float: left;\n    margin: 0 0 10px 0;\n}\n\n.form-group .textCenter {\n    text-align: center;\n}\n\n.form-group label {\n    width: 100%;\n    float: left;\n    margin: 0 0 2px 0;\n    font-size: 12px;\n    font-weight: normal;\n    color: #000000;\n    line-height: 22px;\n}\n\n.form-group label span {\n    width: auto;\n    color: #dc0000;\n}\n\n.form-group input {\n    width: 100%;\n    float: left;\n    padding: 10px;\n    box-sizing: border-box;\n    border: solid 1px #f1f1f1;\n    font-size: 14px;\n    color: #505050;\n    background: #fafafa;\n}\n\n.form-group button.btn {\n    width: auto;\n    text-align: center;\n    background: #e0e0e0;\n    text-transform: uppercase;\n    color: #909090;\n    font-size: 16px;\n    padding: 10px 15px;\n    border: none;\n    cursor: pointer;\n    border-radius: 2px;\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);\n    margin: 10px 10px 0 10px;\n}\n\n.form-group button.main {\n    background: #00adbb;\n    color: #FFFFFF;\n}\n\n\n/* .form-group button.main:hover {\n    background: #0196a2;\n    color: #FFFFFF;\n} */\n\n\n/* .form-group button.disabledd {\n    background: #e0e0e0 !important;\n    color: #909090 !important;\n    cursor: no-drop!important;\n} */\n\n.errorBox {\n    width: 100%;\n    float: left;\n    padding: 5px;\n    margin: 5px 0px;\n    border: solid 1px #dc0000;\n    font-size: 12px;\n    color: #dc0000;\n    box-sizing: border-box;\n}\n\n.footer {\n    width: 100%;\n    float: left;\n    padding: 20px 0 0 0;\n    margin: 5px 0 0 0;\n    box-sizing: border-box;\n    border-top: solid 1px #e4e4e4;\n    text-align: center;\n    font-size: 16px;\n}"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
    "use strict";
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    // eslint-disable-next-line func-names

    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }

          return content;
        }).join('');
      }; // import a list of modules into the list
      // eslint-disable-next-line func-names


      list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
          // eslint-disable-next-line no-param-reassign
          modules = [[null, modules, '']];
        }

        var alreadyImportedModules = {};

        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }

        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);

          if (dedupe && alreadyImportedModules[item[0]]) {
            // eslint-disable-next-line no-continue
            continue;
          }

          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }

          list.push(item);
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      return "/*# ".concat(data, " */");
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var stylesInDom = [];

    function getIndexByIdentifier(identifier) {
      var result = -1;

      for (var i = 0; i < stylesInDom.length; i++) {
        if (stylesInDom[i].identifier === identifier) {
          result = i;
          break;
        }
      }

      return result;
    }

    function modulesToDom(list, options) {
      var idCountMap = {};
      var identifiers = [];

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var count = idCountMap[id] || 0;
        var identifier = "".concat(id, " ").concat(count);
        idCountMap[id] = count + 1;
        var index = getIndexByIdentifier(identifier);
        var obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3]
        };

        if (index !== -1) {
          stylesInDom[index].references++;
          stylesInDom[index].updater(obj);
        } else {
          stylesInDom.push({
            identifier: identifier,
            updater: addStyle(obj, options),
            references: 1
          });
        }

        identifiers.push(identifier);
      }

      return identifiers;
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');
      var attributes = options.attributes || {};

      if (typeof attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          attributes.nonce = nonce;
        }
      }

      Object.keys(attributes).forEach(function (key) {
        style.setAttribute(key, attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      } else {
        style.removeAttribute('media');
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      list = list || [];
      var lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];

        if (Object.prototype.toString.call(newList) !== '[object Array]') {
          return;
        }

        for (var i = 0; i < lastIdentifiers.length; i++) {
          var identifier = lastIdentifiers[i];
          var index = getIndexByIdentifier(identifier);
          stylesInDom[index].references--;
        }

        var newLastIdentifiers = modulesToDom(newList, options);

        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
          var _identifier = lastIdentifiers[_i];

          var _index = getIndexByIdentifier(_identifier);

          if (stylesInDom[_index].references === 0) {
            stylesInDom[_index].updater();

            stylesInDom.splice(_index, 1);
          }
        }

        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  3:
  /*!******************************!*\
    !*** multi ./src/styles.css ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\quarkus\send-quarkas-ui\quarkas-angular-ui\angular-ui\src\styles.css */
    "./src/styles.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map