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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Test; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction Test() {\n    const test = async ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ge;\n        axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"https://abssafety.atlassian.net/rest/api/2/issue\", {\n            \"fields\": {\n                \"project\": {\n                    \"key\": \"ABSSAFETY\"\n                },\n                \"summary\": \"Test\",\n                \"description\": \"Creating of an issue using project keys and issue type names using the REST API\",\n                \"issuetype\": {\n                    \"name\": \"Task\"\n                }\n            }\n        });\n        const response = fetch(\"https://abssafety.atlassian.net/rest/api/2/issue\", {\n            method: \"POST\",\n            headers: {\n                \"X-Atlassian-Token\": \"no-check\",\n                \"Authorization\": \"Basic ZGV2ZWxvcGVyQGFic3R1cnpzaWNoZXJ1bmcuZGU6QVRBVFQzeEZmR0YwWUZMMHhzRnhjdnFaTkVqZTEyZnM3enFPU1d2dlpvUnRkYkEyS0U5Z1NSVWlhYW5nd2xhTXFYTjQtWjVSdERVWGp3SXcwaEZnRzAzZndLbVFuZDF4dkQwTU1ia2dxUTdKWVdfWWNFNnEtT0w0elFWV3FZZUFqOGVCZlZfN0s1ZUVoYnpNTWY3RWhyTWt3M25tM1M3Sk1FSzhfbWxUVVNRNkFCUGdoNWwzZUdRPTVBRjM3OUFD\"\n            }\n        });\n        console.log(response);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Test Page\"\n            }, void 0, false, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/app/test/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>test(),\n                children: \"Test\"\n            }, void 0, false, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/app/test/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/app/test/page.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_c = Test;\nvar _c;\n$RefreshReg$(_c, \"Test\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90ZXN0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFMEI7QUFFWCxTQUFTQztJQUVwQixNQUFNQyxPQUFPO1FBQ1RGLDZDQUFLQSxDQUFDRyxFQUFFO1FBQ1JILDZDQUFLQSxDQUFDSSxJQUFJLENBQUMsb0RBQW9EO1lBQzNELFVBQVU7Z0JBQ04sV0FBVztvQkFDUCxPQUFPO2dCQUNYO2dCQUNBLFdBQVc7Z0JBQ1gsZUFBZTtnQkFDZixhQUFhO29CQUNULFFBQVE7Z0JBQ1o7WUFDSjtRQUNKO1FBSUEsTUFBTUMsV0FBV0MsTUFBTSxvREFBb0Q7WUFDdkVDLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxxQkFBcUI7Z0JBQ3JCLGlCQUFpQjtZQUNyQjtRQUNKO1FBRUFDLFFBQVFDLEdBQUcsQ0FBQ0w7SUFFaEI7SUFFQSxxQkFDSSw4REFBQ007OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBT0MsU0FBUyxJQUFNWjswQkFBUTs7Ozs7Ozs7Ozs7O0FBRzNDO0tBckN3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Rlc3QvcGFnZS50c3g/YjM5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3QoKSB7XG5cbiAgICBjb25zdCB0ZXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBheGlvcy5nZVxuICAgICAgICBheGlvcy5wb3N0KFwiaHR0cHM6Ly9hYnNzYWZldHkuYXRsYXNzaWFuLm5ldC9yZXN0L2FwaS8yL2lzc3VlXCIsIHtcbiAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcbiAgICAgICAgICAgICAgICBcInByb2plY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtleVwiOiBcIkFCU1NBRkVUWVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInN1bW1hcnlcIjogXCJUZXN0XCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNyZWF0aW5nIG9mIGFuIGlzc3VlIHVzaW5nIHByb2plY3Qga2V5cyBhbmQgaXNzdWUgdHlwZSBuYW1lcyB1c2luZyB0aGUgUkVTVCBBUElcIixcbiAgICAgICAgICAgICAgICBcImlzc3VldHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRhc2tcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaChcImh0dHBzOi8vYWJzc2FmZXR5LmF0bGFzc2lhbi5uZXQvcmVzdC9hcGkvMi9pc3N1ZVwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdYLUF0bGFzc2lhbi1Ub2tlbic6ICduby1jaGVjaycsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmFzaWMgWkdWMlpXeHZjR1Z5UUdGaWMzUjFjbnB6YVdOb1pYSjFibWN1WkdVNlFWUkJWRlF6ZUVabVIwWXdXVVpNTUhoelJuaGpkbkZhVGtWcVpURXlabk0zZW5GUFUxZDJkbHB2VW5Sa1lrRXlTMFU1WjFOU1ZXbGhZVzVuZDJ4aFRYRllUalF0V2pWU2RFUlZXR3AzU1hjd2FFWm5SekF6Wm5kTGJWRnVaREY0ZGtRd1RVMWlhMmR4VVRkS1dWZGZXV05GTm5FdFQwdzBlbEZXVjNGWlpVRnFPR1ZDWmxaZk4wczFaVVZvWW5wTlRXWTNSV2h5VFd0M00yNXRNMU0zU2sxRlN6aGZiV3hVVlZOUk5rRkNVR2RvTld3elpVZFJQVFZCUmpNM09VRkRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlRlc3QgUGFnZTwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRlc3QoKX0+VGVzdDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiVGVzdCIsInRlc3QiLCJnZSIsInBvc3QiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/test/page.tsx\n"));

/***/ })

});