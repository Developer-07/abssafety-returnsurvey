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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Test; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction Test() {\n    const test = async ()=>{\n        const body = JSON.stringify({\n            \"fields\": {\n                \"project\": {\n                    \"key\": \"ITT\"\n                },\n                \"summary\": \"Ticket\",\n                \"description\": \"Ticket\",\n                \"issuetype\": {\n                    \"name\": \"Task\",\n                    \"id\": \"10116\"\n                }\n            }\n        });\n        const response = await fetch(\"https://abssafety.atlassian.net/rest/api/2/issue\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Authorization\": \"Basic ZGV2ZWxvcGVyQGFic3R1cnpzaWNoZXJ1bmcuZGU6QVRBVFQzeEZmR0YwWUZMMHhzRnhjdnFaTkVqZTEyZnM3enFPU1d2dlpvUnRkYkEyS0U5Z1NSVWlhYW5nd2xhTXFYTjQtWjVSdERVWGp3SXcwaEZnRzAzZndLbVFuZDF4dkQwTU1ia2dxUTdKWVdfWWNFNnEtT0w0elFWV3FZZUFqOGVCZlZfN0s1ZUVoYnpNTWY3RWhyTWt3M25tM1M3Sk1FSzhfbWxUVVNRNkFCUGdoNWwzZUdRPTVBRjM3OUFD\"\n            },\n            body: '{ \"fields\": {\"project\": {\"key\": \"ITT\"},\"summary\": \"REST EXAMPLE 2\",\"description\": \"Creating an issue via REST API\",\"issuetype\": {\"name\": \"Task\",\"id\": \"10116\" }}'\n        });\n        console.log(response);\n        const data = response.json();\n        console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Test Page\"\n            }, void 0, false, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/app/test/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>test(),\n                children: \"Test\"\n            }, void 0, false, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/app/test/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/app/test/page.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this);\n}\n_c = Test;\nvar _c;\n$RefreshReg$(_c, \"Test\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90ZXN0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUdlLFNBQVNBO0lBRXBCLE1BQU1DLE9BQU87UUFDVCxNQUFNQyxPQUFPQyxLQUFLQyxTQUFTLENBQUM7WUFDeEIsVUFBVTtnQkFDTixXQUFXO29CQUNQLE9BQU87Z0JBQ1g7Z0JBQ0EsV0FBVztnQkFDWCxlQUFlO2dCQUNmLGFBQWE7b0JBQ1QsUUFBUTtvQkFDUixNQUFNO2dCQUNWO1lBQ0o7UUFDSjtRQUlBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxvREFBb0Q7WUFDN0VDLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7Z0JBRWhCLGlCQUFpQjtZQUNyQjtZQUNBTixNQUFNO1FBQ1Y7UUFDQU8sUUFBUUMsR0FBRyxDQUFDTDtRQUNaLE1BQU1NLE9BQU9OLFNBQVNPLElBQUk7UUFDMUJILFFBQVFDLEdBQUcsQ0FBQ0M7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0U7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBT0MsU0FBUyxJQUFNZjswQkFBUTs7Ozs7Ozs7Ozs7O0FBRzNDO0tBdkN3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Rlc3QvcGFnZS50c3g/YjM5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3QoKSB7XG5cbiAgICBjb25zdCB0ZXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICAgICAgICAgICAgICAgIFwicHJvamVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiSVRUXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwic3VtbWFyeVwiOiBcIlRpY2tldFwiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaWNrZXRcIixcbiAgICAgICAgICAgICAgICBcImlzc3VldHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRhc2tcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEwMTE2XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYWJzc2FmZXR5LmF0bGFzc2lhbi5uZXQvcmVzdC9hcGkvMi9pc3N1ZVwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBcIkJhc2ljIFpHVjJaV3h2Y0dWeVFHRmljM1IxY25wemFXTm9aWEoxYm1jdVpHVTZRVlJCVkZRemVFWm1SMFl3V1VaTU1IaHpSbmhqZG5GYVRrVnFaVEV5Wm5NM2VuRlBVMWQyZGxwdlVuUmtZa0V5UzBVNVoxTlNWV2xoWVc1bmQyeGhUWEZZVGpRdFdqVlNkRVJWV0dwM1NYY3dhRVpuUnpBelpuZExiVkZ1WkRGNGRrUXdUVTFpYTJkeFVUZEtXVmRmV1dORk5uRXRUMHcwZWxGV1YzRlpaVUZxT0dWQ1psWmZOMHMxWlVWb1lucE5UV1kzUldoeVRXdDNNMjV0TTFNM1NrMUZTemhmYld4VVZWTlJOa0ZDVUdkb05Xd3paVWRSUFRWQlJqTTNPVUZEXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogJ3sgXCJmaWVsZHNcIjoge1wicHJvamVjdFwiOiB7XCJrZXlcIjogXCJJVFRcIn0sXCJzdW1tYXJ5XCI6IFwiUkVTVCBFWEFNUExFIDJcIixcImRlc2NyaXB0aW9uXCI6IFwiQ3JlYXRpbmcgYW4gaXNzdWUgdmlhIFJFU1QgQVBJXCIsXCJpc3N1ZXR5cGVcIjoge1wibmFtZVwiOiBcIlRhc2tcIixcImlkXCI6IFwiMTAxMTZcIiB9fSdcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5UZXN0IFBhZ2U8L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0ZXN0KCl9PlRlc3Q8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJUZXN0IiwidGVzdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImpzb24iLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/test/page.tsx\n"));

/***/ })

});