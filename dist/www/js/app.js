/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./www/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/video-embed.js":
/*!*****************************!*\
  !*** ./dist/video-embed.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i, a; }
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/index.js");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/embed.vue?vue&type=script&lang=js&":
      /*!**********************************************************************************************************************************!*\
        !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/embed.vue?vue&type=script&lang=js& ***!
        \**********************************************************************************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsSrcEmbedVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__); //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */


        __webpack_exports__["default"] = {
          props: {
            css: {
              type: String,
              "default": 'embed-responsive-16by9'
            },
            src: {
              type: String
            },
            params: {
              type: Object
            }
          },
          data: function data() {
            return {
              valid: false,
              url: '',
              videos: [{
                //reg: /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/i,
                //reg: /^.*(?:(?:v|vi|be|videos|embed)\/(?!videoseries)|(?:v|ci)=)([\w-]{11})/i,
                reg: /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/i,
                url: 'https://www.youtube.com/embed/$5',
                params: {
                  'picture-in-picture': 1,
                  accelerometer: 1,
                  gyroscope: 1
                }
              }, {
                reg: /^.*vimeo.com\/(\d+)($|\/|\b)/i,
                url: 'https://player.vimeo.com/video/$1',
                params: {
                  title: 0,
                  byline: 0,
                  portrait: 0
                }
              }, {
                reg: /^.*(?:\/video|dai.ly)\/([A-Za-z0-9]+)([^#\&\?]*).*/i,
                url: 'https://www.dailymotion.com/embed/video/$1',
                params: {
                  autoplay: 0
                }
              }, {
                reg: /^.*coub.com\/(?:embed|view)\/([A-Za-z0-9]+)([^#\&\?]*).*/i,
                url: 'https://coub.com/embed/$1',
                params: {
                  autoplay: 0
                }
              }, //     <iframe
              //         allowtransparency="true"
              //         title="Wistia video player"
              //         allowFullscreen
              //         frameborder="0"
              //         scrolling="no"
              //         class="wistia_embed"
              //         name="wistia_embed"
              //         src="https://fast.wistia.net/embed/iframe/4cbgg1027m">
              //     </iframe>
              {
                reg: /^.*(?:wistia.net\/embed)\/iframe\/([A-Za-z0-9]+)/i,
                url: 'https://fast.wistia.net/embed/iframe/$1',
                params: {
                  autoplay: false,
                  allowtransparency: true
                }
              }]
            };
          },
          watch: {
            src: function src(val) {
              this.parse();
            }
          },
          methods: {
            parse: function parse() {
              if (this.src) {
                // console.log(this.src)
                for (var i = 0; i < this.videos.length; i++) {
                  var v = this.videos[i];
                  var m = v.reg.exec(this.src);

                  if (m) {
                    var params = Object.assign({}, v.params, this.params);
                    var query = Object.keys(params).map(function (key) {
                      return key + '=' + params[key];
                    }).join('&');
                    var and = v.url.indexOf('?') >= 0 ? '&' : '?';
                    this.url = this.src.replace(v.reg, v.url) + and + query;
                    this.valid = true; // console.log(this.url);

                    return;
                  }
                }
              }

              this.valid = false;
            }
          },
          mounted: function mounted() {
            this.parse();
          }
        };
        /***/
      },

      /***/
      "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/embed.vue?vue&type=template&id=058b7650&":
      /*!************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/embed.vue?vue&type=template&id=058b7650& ***!
        \************************************************************************************************************************************************************************************/

      /*! exports provided: render, staticRenderFns */

      /***/
      function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsSrcEmbedVueVueTypeTemplateId058b7650(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "render", function () {
          return render;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
          return staticRenderFns;
        });

        var render = function render() {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _vm.valid ? _c("div", {
            staticClass: "embed-responsive",
            "class": [_vm.css]
          }, [_c("iframe", {
            staticClass: "embed-responsive-item",
            attrs: {
              sandbox: "allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation",
              allowfullscreen: "",
              src: _vm.url
            }
          })]) : _vm._e();
        };

        var staticRenderFns = [];
        render._withStripped = true;
        /***/
      },

      /***/
      "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
      /*!********************************************************************!*\
        !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
        \********************************************************************/

      /*! exports provided: default */

      /***/
      function node_modulesVueLoaderLibRuntimeComponentNormalizerJs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "default", function () {
          return normalizeComponent;
        });
        /* globals __VUE_SSR_CONTEXT__ */
        // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
        // This module is a runtime utility for cleaner component module output and will
        // be included in the final webpack user bundle.


        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier,
        /* server only */
        shadowMode
        /* vue-cli only */
        ) {
          // Vue.extend constructor export interop
          var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports; // render functions

          if (render) {
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            options._compiled = true;
          } // functional template


          if (functionalTemplate) {
            options.functional = true;
          } // scopedId


          if (scopeId) {
            options._scopeId = 'data-v-' + scopeId;
          }

          var hook;

          if (moduleIdentifier) {
            // server build
            hook = function hook(context) {
              // 2.3 injection
              context = context || // cached call
              this.$vnode && this.$vnode.ssrContext || // stateful
              this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
              // 2.2 with runInNewContext: true

              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
              } // inject component styles


              if (injectStyles) {
                injectStyles.call(this, context);
              } // register component module identifier for async chunk inferrence


              if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
              }
            }; // used by ssr in case component is cached and beforeCreate
            // never gets called


            options._ssrRegister = hook;
          } else if (injectStyles) {
            hook = shadowMode ? function () {
              injectStyles.call(this, this.$root.$options.shadowRoot);
            } : injectStyles;
          }

          if (hook) {
            if (options.functional) {
              // for template-only hot-reload because in that case the render fn doesn't
              // go through the normalizer
              options._injectStyles = hook; // register for functioal component in vue file

              var originalRender = options.render;

              options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
              };
            } else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }

          return {
            exports: scriptExports,
            options: options
          };
        }
        /***/

      },

      /***/
      "./src/embed.vue":
      /*!***********************!*\
        !*** ./src/embed.vue ***!
        \***********************/

      /*! exports provided: default */

      /***/
      function srcEmbedVue(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _embed_vue_vue_type_template_id_058b7650___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./embed.vue?vue&type=template&id=058b7650& */
        "./src/embed.vue?vue&type=template&id=058b7650&");
        /* harmony import */


        var _embed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./embed.vue?vue&type=script&lang=js& */
        "./src/embed.vue?vue&type=script&lang=js&");
        /* empty/unused harmony star reexport */

        /* harmony import */


        var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
        "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
        /* normalize component */


        var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_embed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _embed_vue_vue_type_template_id_058b7650___WEBPACK_IMPORTED_MODULE_0__["render"], _embed_vue_vue_type_template_id_058b7650___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
        /* hot reload */

        if (false) { var api; }

        component.options.__file = "src/embed.vue";
        /* harmony default export */

        __webpack_exports__["default"] = component.exports;
        /***/
      },

      /***/
      "./src/embed.vue?vue&type=script&lang=js&":
      /*!************************************************!*\
        !*** ./src/embed.vue?vue&type=script&lang=js& ***!
        \************************************************/

      /*! exports provided: default */

      /***/
      function srcEmbedVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_embed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./embed.vue?vue&type=script&lang=js& */
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/embed.vue?vue&type=script&lang=js&");
        /* empty/unused harmony star reexport */

        /* harmony default export */


        __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_embed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
        /***/
      },

      /***/
      "./src/embed.vue?vue&type=template&id=058b7650&":
      /*!******************************************************!*\
        !*** ./src/embed.vue?vue&type=template&id=058b7650& ***!
        \******************************************************/

      /*! exports provided: render, staticRenderFns */

      /***/
      function srcEmbedVueVueTypeTemplateId058b7650(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_embed_vue_vue_type_template_id_058b7650___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./embed.vue?vue&type=template&id=058b7650& */
        "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/embed.vue?vue&type=template&id=058b7650&");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "render", function () {
          return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_embed_vue_vue_type_template_id_058b7650___WEBPACK_IMPORTED_MODULE_0__["render"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
          return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_embed_vue_vue_type_template_id_058b7650___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
        });
        /***/

      },

      /***/
      "./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/

      /*! exports provided: default */

      /***/
      function srcIndexJs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _embed_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./embed.vue */
        "./src/embed.vue");

        var VideoEmbed = {
          install: function install(Vue) {
            if (Vue.__embed_installed) {
              return;
            }

            Vue.__embed_installed = true;
            Vue.component('video-embed', _embed_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
          }
        };

        if (typeof window !== 'undefined' && window.Vue) {
          Vue.use(VideoEmbed);
        }
        /* harmony default export */


        __webpack_exports__["default"] = VideoEmbed;
        /***/
      }
      /******/

    })
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./www/app.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./www/app.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    change: function change() {
      this.$refs.youtube.src = "https://www.youtube.com/watch?v=nqwQpXoSN7Q";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./www/app.vue?vue&type=template&id=0d4f360b&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./www/app.vue?vue&type=template&id=0d4f360b& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _c("video-embed", {
            ref: "youtube",
            attrs: {
              params: { autoplay: 1 },
              src:
                "https://www.youtube.com/watch?v=s4ObxcdXoFE&list=PLOtXQ1m0FkHBRg_6v8lJfX9AKKamgYrjC"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c(
          "button",
          { staticClass: "btn btn-primary", on: { click: _vm.change } },
          [_vm._v("Change Url")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group" },
        [_c("video-embed", { attrs: { src: "https://vimeo.com/370293725" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group" },
        [_c("video-embed", { attrs: { src: "https://dai.ly/x7n7y06" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _c("video-embed", { attrs: { src: "https://coub.com/embed/22eztb" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _vm._v(" Wistia\n            "),
          _c("video-embed", {
            attrs: { src: "https://fast.wistia.net/embed/iframe/lhr14k41n2" }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", [
      _c("h1", [_vm._v("Vue Video Embed")]),
      _vm._v(" "),
      _c("h4", [
        _vm._v(
          "This is a component for Vue.js to utilize YouTube, Vimeo, DailyMotion, Coub iframe embed API easily.\n            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("h2", { staticClass: "text-center" }, [
        _c(
          "a",
          {
            attrs: {
              href: "https://morioh.com",
              title: "\bSocial Network for Developers"
            }
          },
          [_vm._v("\bSocial\n                    Network for Developers")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./www/app.js":
/*!********************!*\
  !*** ./www/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.css */ "./www/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.vue */ "./www/app.vue");
/* harmony import */ var _dist_video_embed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dist/video-embed */ "./dist/video-embed.js");
/* harmony import */ var _dist_video_embed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dist_video_embed__WEBPACK_IMPORTED_MODULE_3__);




vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(_dist_video_embed__WEBPACK_IMPORTED_MODULE_3___default.a);
new vue__WEBPACK_IMPORTED_MODULE_1___default.a({
  el: '#app',
  render: function render(h) {
    return h(_app_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
});

/***/ }),

/***/ "./www/app.vue":
/*!*********************!*\
  !*** ./www/app.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_template_id_0d4f360b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=0d4f360b& */ "./www/app.vue?vue&type=template&id=0d4f360b&");
/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ "./www/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_0d4f360b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_vue_vue_type_template_id_0d4f360b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "www/app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./www/app.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./www/app.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./www/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./www/app.vue?vue&type=template&id=0d4f360b&":
/*!****************************************************!*\
  !*** ./www/app.vue?vue&type=template&id=0d4f360b& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_0d4f360b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=0d4f360b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./www/app.vue?vue&type=template&id=0d4f360b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_0d4f360b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_0d4f360b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./www/layout.css":
/*!************************!*\
  !*** ./www/layout.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })

/******/ });
//# sourceMappingURL=app.js.map