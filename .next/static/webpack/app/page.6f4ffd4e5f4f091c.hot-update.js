"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exploreWorlds\": function() { return /* binding */ exploreWorlds; },\n/* harmony export */   \"insights\": function() { return /* binding */ insights; },\n/* harmony export */   \"newFeatures\": function() { return /* binding */ newFeatures; },\n/* harmony export */   \"socials\": function() { return /* binding */ socials; },\n/* harmony export */   \"startingFeatures\": function() { return /* binding */ startingFeatures; }\n/* harmony export */ });\nconst exploreWorlds = [\n    {\n        id: \"world-1\",\n        imgUrl: \"/planet-01.png\",\n        title: \"The Hogwarts\"\n    },\n    {\n        id: \"world-2\",\n        imgUrl: \"/planet-02.png\",\n        title: \"The Upside Down\"\n    },\n    {\n        id: \"world-3\",\n        imgUrl: \"/planet-03.png\",\n        title: \"Kadirojo Permai\"\n    },\n    {\n        id: \"world-4\",\n        imgUrl: \"/planet-04.png\",\n        title: \"Paradise Island\"\n    },\n    {\n        id: \"world-5\",\n        imgUrl: \"/planet-05.png\",\n        title: \"Hawkins Labs\"\n    }\n];\nconst startingFeatures = [\n    \"Find a world that suits you and you want to enter\",\n    \"Enter the world by reading basmalah to be safe\",\n    \"No need to beat around the bush, just stay on the gas and have fun\"\n];\nconst newFeatures = [\n    {\n        imgUrl: \"/vrpano.svg\",\n        title: \"A new world\",\n        subtitle: \"we have the latest update with new world for you to try never mind\"\n    },\n    {\n        imgUrl: \"/headset.svg\",\n        title: \"More realistic\",\n        subtitle: \"In the latest update, your eyes are narrow, making the world more realistic than ever\"\n    }\n];\nconst insights = [\n    {\n        imgUrl: \"/planet-06.png\",\n        title: \"The launch of the Metaverse makes Elon musk ketar-ketir\",\n        subtitle: \"Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.\"\n    },\n    {\n        imgUrl: \"/planet-07.png\",\n        title: \"7 tips to easily master the madness of the Metaverse\",\n        subtitle: \"Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum\"\n    },\n    {\n        imgUrl: \"/planet-08.png\",\n        title: \"With one platform you can explore the whole world virtually\",\n        subtitle: \"Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem\"\n    }\n];\nconst socials = [\n    {\n        name: \"twitter\",\n        url: \"/twitter.svg\"\n    },\n    {\n        name: \"linkedin\",\n        url: \"/linkedin.svg\"\n    },\n    {\n        name: \"instagram\",\n        url: \"/instagram.svg\"\n    },\n    {\n        name: \"facebook\",\n        url: \"/facebook.svg\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxNQUFNQSxnQkFBZ0I7SUFDM0I7UUFDRUMsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7Q0FDRCxDQUFDO0FBRUssTUFBTUMsbUJBQW1CO0lBQzlCO0lBQ0E7SUFDQTtDQUNELENBQUM7QUFFSyxNQUFNQyxjQUFjO0lBQ3pCO1FBQ0VILFFBQVE7UUFDUkMsT0FBTztRQUNQRyxVQUNJO0lBQ047SUFDQTtRQUNFSixRQUFRO1FBQ1JDLE9BQU87UUFDUEcsVUFDSTtJQUNOO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLFdBQVc7SUFDdEI7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7SUFDTjtJQUNBO1FBQ0VKLFFBQVE7UUFDUkMsT0FBTztRQUNQRyxVQUNJO0lBQ047SUFDQTtRQUNFSixRQUFRO1FBQ1JDLE9BQU87UUFDUEcsVUFDSTtJQUNOO0NBQ0QsQ0FBQztBQUVLLE1BQU1FLFVBQVU7SUFDckI7UUFDRUMsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLEtBQUs7SUFDUDtJQUNBO1FBQ0VELE1BQU07UUFDTkMsS0FBSztJQUNQO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7Q0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnN0YW50cy9pbmRleC5qcz8zNzM3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBleHBsb3JlV29ybGRzID0gW1xuICB7XG4gICAgaWQ6ICd3b3JsZC0xJyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTAxLnBuZycsXG4gICAgdGl0bGU6ICdUaGUgSG9nd2FydHMnLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC0yJyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTAyLnBuZycsXG4gICAgdGl0bGU6ICdUaGUgVXBzaWRlIERvd24nLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC0zJyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTAzLnBuZycsXG4gICAgdGl0bGU6ICdLYWRpcm9qbyBQZXJtYWknLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC00JyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTA0LnBuZycsXG4gICAgdGl0bGU6ICdQYXJhZGlzZSBJc2xhbmQnLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC01JyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTA1LnBuZycsXG4gICAgdGl0bGU6ICdIYXdraW5zIExhYnMnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHN0YXJ0aW5nRmVhdHVyZXMgPSBbXG4gICdGaW5kIGEgd29ybGQgdGhhdCBzdWl0cyB5b3UgYW5kIHlvdSB3YW50IHRvIGVudGVyJyxcbiAgJ0VudGVyIHRoZSB3b3JsZCBieSByZWFkaW5nIGJhc21hbGFoIHRvIGJlIHNhZmUnLFxuICAnTm8gbmVlZCB0byBiZWF0IGFyb3VuZCB0aGUgYnVzaCwganVzdCBzdGF5IG9uIHRoZSBnYXMgYW5kIGhhdmUgZnVuJyxcbl07XG5cbmV4cG9ydCBjb25zdCBuZXdGZWF0dXJlcyA9IFtcbiAge1xuICAgIGltZ1VybDogJy92cnBhbm8uc3ZnJyxcbiAgICB0aXRsZTogJ0EgbmV3IHdvcmxkJyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ3dlIGhhdmUgdGhlIGxhdGVzdCB1cGRhdGUgd2l0aCBuZXcgd29ybGQgZm9yIHlvdSB0byB0cnkgbmV2ZXIgbWluZCcsXG4gIH0sXG4gIHtcbiAgICBpbWdVcmw6ICcvaGVhZHNldC5zdmcnLFxuICAgIHRpdGxlOiAnTW9yZSByZWFsaXN0aWMnLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnSW4gdGhlIGxhdGVzdCB1cGRhdGUsIHlvdXIgZXllcyBhcmUgbmFycm93LCBtYWtpbmcgdGhlIHdvcmxkIG1vcmUgcmVhbGlzdGljIHRoYW4gZXZlcicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgaW5zaWdodHMgPSBbXG4gIHtcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTA2LnBuZycsXG4gICAgdGl0bGU6ICdUaGUgbGF1bmNoIG9mIHRoZSBNZXRhdmVyc2UgbWFrZXMgRWxvbiBtdXNrIGtldGFyLWtldGlyJyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ01hZ25hIGV0aWFtIHRlbXBvciBvcmNpIGV1IGxvYm9ydGlzIGVsZW1lbnR1bSBuaWJoIHRlbGx1cyBtb2xlc3RpZS4gRGlhbSBtYWVjZW5hcyBzZWQgZW5pbSB1dCBzZW0gdml2ZXJyYSBhbGlxdWUuJyxcbiAgfSxcbiAge1xuICAgIGltZ1VybDogJy9wbGFuZXQtMDcucG5nJyxcbiAgICB0aXRsZTogJzcgdGlwcyB0byBlYXNpbHkgbWFzdGVyIHRoZSBtYWRuZXNzIG9mIHRoZSBNZXRhdmVyc2UnLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnVml0YWUgY29uZ3VlIGV1IGNvbnNlcXVhdCBhYyBmZWxpcyBkb25lYy4gRXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcyBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBDb252YWxsaXMgdGVsbHVzIGlkIGludGVyZHVtJyxcbiAgfSxcbiAge1xuICAgIGltZ1VybDogJy9wbGFuZXQtMDgucG5nJyxcbiAgICB0aXRsZTogJ1dpdGggb25lIHBsYXRmb3JtIHlvdSBjYW4gZXhwbG9yZSB0aGUgd2hvbGUgd29ybGQgdmlydHVhbGx5JyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ1F1YW0gcXVpc3F1ZSBpZCBkaWFtIHZlbCBxdWFtIGVsZW1lbnR1bS4gVml2ZXJyYSBuYW0gbGliZXJvIGp1c3RvIGxhb3JlZXQgc2l0IGFtZXQgY3Vyc3VzIHNpdC4gTWF1cmlzIGluIGFsaXF1YW0gc2VtJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxzID0gW1xuICB7XG4gICAgbmFtZTogJ3R3aXR0ZXInLFxuICAgIHVybDogJy90d2l0dGVyLnN2ZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbGlua2VkaW4nLFxuICAgIHVybDogJy9saW5rZWRpbi5zdmcnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2luc3RhZ3JhbScsXG4gICAgdXJsOiAnL2luc3RhZ3JhbS5zdmcnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2ZhY2Vib29rJyxcbiAgICB1cmw6ICcvZmFjZWJvb2suc3ZnJyxcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsiZXhwbG9yZVdvcmxkcyIsImlkIiwiaW1nVXJsIiwidGl0bGUiLCJzdGFydGluZ0ZlYXR1cmVzIiwibmV3RmVhdHVyZXMiLCJzdWJ0aXRsZSIsImluc2lnaHRzIiwic29jaWFscyIsIm5hbWUiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/index.js\n"));

/***/ }),

/***/ "./sections/Explore.jsx":
/*!******************************!*\
  !*** ./sections/Explore.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Explore = ()=>{\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"world-2\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].paddings),\n        id: \"explore\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_4__.staggerContainer,\n            initial: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: false,\n                amount: 0.25\n            },\n            className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].innerWidth, \" mx-auto flex flex-col\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.TypingText, {\n                    title: \"| The World\",\n                    textStyles: \"text-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/biancadobie/Desktop/work/frontend-reactproj/proj3/sections/Explore.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.TitleText, {\n                    title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            \"Choose the world you want \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                className: \"md:block hidden\"\n                            }, void 0, false, void 0, void 0),\n                            \" to explore\"\n                        ]\n                    }, void 0, true),\n                    textStyles: \"text-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/biancadobie/Desktop/work/frontend-reactproj/proj3/sections/Explore.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5\",\n                    children: _constants__WEBPACK_IMPORTED_MODULE_3__.exploreWorlds.map((world, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.ExploreCard, {\n                            ...world,\n                            index: index,\n                            active: active,\n                            handleClick: setActive\n                        }, world.id, false, {\n                            fileName: \"/Users/biancadobie/Desktop/work/frontend-reactproj/proj3/sections/Explore.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/biancadobie/Desktop/work/frontend-reactproj/proj3/sections/Explore.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/biancadobie/Desktop/work/frontend-reactproj/proj3/sections/Explore.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/biancadobie/Desktop/work/frontend-reactproj/proj3/sections/Explore.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Explore, \"MDFJNx0YorMygFBLrfgiis3mUN0=\");\n_c = Explore;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Explore);\nvar _c;\n$RefreshReg$(_c, \"Explore\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9FeHBsb3JlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFaUM7QUFDTTtBQUVSO0FBQ2M7QUFDTTtBQUNnQjtBQUVuRSxNQUFNUSxVQUFVLElBQU07O0lBQ3BCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBQztJQUVyQyxxQkFDRSw4REFBQ1c7UUFBUUMsV0FBVyxHQUFtQixPQUFoQlYsd0RBQWU7UUFBSVksSUFBRztrQkFDM0MsNEVBQUNiLHFEQUFVO1lBQ1RlLFVBQVVaLDJEQUFnQkE7WUFDMUJhLFNBQVE7WUFDUkMsYUFBWTtZQUNaQyxVQUFVO2dCQUFFQyxNQUFNLEtBQUs7Z0JBQUVDLFFBQVE7WUFBSztZQUN0Q1QsV0FBVyxHQUFxQixPQUFsQlYsMERBQWlCLEVBQUM7OzhCQUVoQyw4REFBQ0ssbURBQVVBO29CQUFDZ0IsT0FBTTtvQkFBY0MsWUFBVzs7Ozs7OzhCQUMzQyw4REFBQ2xCLGtEQUFTQTtvQkFDUmlCLHFCQUFPOzs0QkFBRTswQ0FBMEIsOERBQUNFO2dDQUFHYixXQUFVOzs0QkFBb0I7OztvQkFDckVZLFlBQVc7Ozs7Ozs4QkFFYiw4REFBQ1Q7b0JBQUlILFdBQVU7OEJBQ1pULHlEQUFpQixDQUFDLENBQUN3QixPQUFPQyxzQkFDekIsOERBQUN2QixvREFBV0E7NEJBRVQsR0FBR3NCLEtBQUs7NEJBQ1RDLE9BQU9BOzRCQUNQbkIsUUFBUUE7NEJBQ1JvQixhQUFhbkI7MkJBSlJpQixNQUFNYixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXM0I7R0EvQk1OO0tBQUFBO0FBaUNOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlY3Rpb25zL0V4cGxvcmUuanN4PzcwYmMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcyc7XG5pbXBvcnQgeyBleHBsb3JlV29ybGRzIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IHN0YWdnZXJDb250YWluZXIgfSBmcm9tICcuLi91dGlscy9tb3Rpb24nO1xuaW1wb3J0IHsgRXhwbG9yZUNhcmQsIFRpdGxlVGV4dCwgVHlwaW5nVGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG5jb25zdCBFeHBsb3JlID0gKCkgPT4ge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoJ3dvcmxkLTInKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnBhZGRpbmdzfWB9IGlkPVwiZXhwbG9yZVwiPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgdmFyaWFudHM9e3N0YWdnZXJDb250YWluZXJ9XG4gICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiBmYWxzZSwgYW1vdW50OiAwLjI1IH19XG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmlubmVyV2lkdGh9IG14LWF1dG8gZmxleCBmbGV4LWNvbGB9XG4gICAgICA+XG4gICAgICAgIDxUeXBpbmdUZXh0IHRpdGxlPVwifCBUaGUgV29ybGRcIiB0ZXh0U3R5bGVzPVwidGV4dC1jZW50ZXJcIiAvPlxuICAgICAgICA8VGl0bGVUZXh0XG4gICAgICAgICAgdGl0bGU9ezw+Q2hvb3NlIHRoZSB3b3JsZCB5b3Ugd2FudCA8YnIgY2xhc3NOYW1lPVwibWQ6YmxvY2sgaGlkZGVuXCIgLz4gdG8gZXhwbG9yZTwvPn1cbiAgICAgICAgICB0ZXh0U3R5bGVzPVwidGV4dC1jZW50ZXJcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LVs1MHB4XSBmbGV4IGxnOmZsZXgtcm93IGZsZXgtY29sIG1pbi1oLVs3MHZoXSBnYXAtNVwiPlxuICAgICAgICAgIHtleHBsb3JlV29ybGRzLm1hcCgod29ybGQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8RXhwbG9yZUNhcmRcbiAgICAgICAgICAgICAga2V5PXt3b3JsZC5pZH1cbiAgICAgICAgICAgICAgey4uLndvcmxkfVxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlfVxuICAgICAgICAgICAgICBoYW5kbGVDbGljaz17c2V0QWN0aXZlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJtb3Rpb24iLCJzdHlsZXMiLCJleHBsb3JlV29ybGRzIiwic3RhZ2dlckNvbnRhaW5lciIsIkV4cGxvcmVDYXJkIiwiVGl0bGVUZXh0IiwiVHlwaW5nVGV4dCIsIkV4cGxvcmUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwicGFkZGluZ3MiLCJpZCIsImRpdiIsInZhcmlhbnRzIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwiYW1vdW50IiwiaW5uZXJXaWR0aCIsInRpdGxlIiwidGV4dFN0eWxlcyIsImJyIiwibWFwIiwid29ybGQiLCJpbmRleCIsImhhbmRsZUNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/Explore.jsx\n"));

/***/ })

});