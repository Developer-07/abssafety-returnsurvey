"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/test/page",{

/***/ "(app-pages-browser)/./app/test/page.tsx":
/*!***************************!*\
  !*** ./app/test/page.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Test; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction Test() {\n    const test = async ()=>{\n        const body = JSON.stringify({\n            \"fields\": {\n                \"project\": {\n                    \"key\": \"ITT\"\n                },\n                \"summary\": \"Ticket\",\n                \"description\": \"Ticket\",\n                \"issuetype\": {\n                    \"name\": \"Task\",\n                    \"id\": \"10116\"\n                }\n            }\n        });\n        const response = await fetch(\"https://abssafety.atlassian.net/rest/api/2/myself\", {\n            method: \"GEt\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Basic ZGV2ZWxvcGVyQGFic3R1cnpzaWNoZXJ1bmcuZGU6QVRBVFQzeEZmR0YwWUZMMHhzRnhjdnFaTkVqZTEyZnM3enFPU1d2dlpvUnRkYkEyS0U5Z1NSVWlhYW5nd2xhTXFYTjQtWjVSdERVWGp3SXcwaEZnRzAzZndLbVFuZDF4dkQwTU1ia2dxUTdKWVdfWWNFNnEtT0w0elFWV3FZZUFqOGVCZlZfN0s1ZUVoYnpNTWY3RWhyTWt3M25tM1M3Sk1FSzhfbWxUVVNRNkFCUGdoNWwzZUdRPTVBRjM3OUFD\"\n            },\n            body: body\n        });\n        console.log(response);\n        const data = response.json();\n        console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Test Page\"\n            }, void 0, false, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/app/test/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>test(),\n                children: \"Test\"\n            }, void 0, false, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/app/test/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/app/test/page.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_c = Test;\nvar _c;\n$RefreshReg$(_c, \"Test\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90ZXN0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUdlLFNBQVNBO0lBRXBCLE1BQU1DLE9BQU87UUFDVCxNQUFNQyxPQUFPQyxLQUFLQyxTQUFTLENBQUM7WUFDeEIsVUFBVTtnQkFDTixXQUFXO29CQUNQLE9BQU87Z0JBQ1g7Z0JBQ0EsV0FBVztnQkFDWCxlQUFlO2dCQUNmLGFBQWE7b0JBQ1QsUUFBUTtvQkFDUixNQUFNO2dCQUNWO1lBQ0o7UUFDSjtRQUlBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxxREFBcUQ7WUFDOUVDLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7Z0JBQ2hCQyxlQUFlO1lBQ25CO1lBQ0FQLE1BQU1BO1FBQ1Y7UUFDQVEsUUFBUUMsR0FBRyxDQUFDTjtRQUNaLE1BQU1PLE9BQU9QLFNBQVNRLElBQUk7UUFDMUJILFFBQVFDLEdBQUcsQ0FBQ0M7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0U7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBT0MsU0FBUyxJQUFNaEI7MEJBQVE7Ozs7Ozs7Ozs7OztBQUczQztLQXRDd0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC90ZXN0L3BhZ2UudHN4P2IzOWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0KCkge1xuXG4gICAgY29uc3QgdGVzdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcbiAgICAgICAgICAgICAgICBcInByb2plY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtleVwiOiBcIklUVFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInN1bW1hcnlcIjogXCJUaWNrZXRcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGlja2V0XCIsXG4gICAgICAgICAgICAgICAgXCJpc3N1ZXR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUYXNrXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxMDExNlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2Fic3NhZmV0eS5hdGxhc3NpYW4ubmV0L3Jlc3QvYXBpLzIvbXlzZWxmXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRXRcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJhc2ljIFpHVjJaV3h2Y0dWeVFHRmljM1IxY25wemFXTm9aWEoxYm1jdVpHVTZRVlJCVkZRemVFWm1SMFl3V1VaTU1IaHpSbmhqZG5GYVRrVnFaVEV5Wm5NM2VuRlBVMWQyZGxwdlVuUmtZa0V5UzBVNVoxTlNWV2xoWVc1bmQyeGhUWEZZVGpRdFdqVlNkRVJWV0dwM1NYY3dhRVpuUnpBelpuZExiVkZ1WkRGNGRrUXdUVTFpYTJkeFVUZEtXVmRmV1dORk5uRXRUMHcwZWxGV1YzRlpaVUZxT0dWQ1psWmZOMHMxWlVWb1lucE5UV1kzUldoeVRXdDNNMjV0TTFNM1NrMUZTemhmYld4VVZWTlJOa0ZDVUdkb05Xd3paVWRSUFRWQlJqTTNPVUZEXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogYm9keVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlRlc3QgUGFnZTwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRlc3QoKX0+VGVzdDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlRlc3QiLCJ0ZXN0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImpzb24iLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/test/page.tsx\n"));

/***/ })

});