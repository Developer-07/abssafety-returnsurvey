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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Test; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction Test() {\n    const test = async ()=>{\n        const body = JSON.stringify({\n            \"fields\": {\n                \"project\": {\n                    \"key\": \"ITT\"\n                },\n                \"summary\": \"Ticket\",\n                \"description\": \"Ticket\",\n                \"issuetype\": {\n                    \"name\": \"Task\",\n                    \"id\": \"10116\"\n                }\n            }\n        });\n        const response = await fetch(\"https://abssafety.atlassian.net/rest/api/2/issue\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Cookie\": \"atlassian.xsrf.token=32dc7937cabc9139a4c5da9dcde1bc981a00f27d_lin\",\n                \"Authorization\": \"Basic ZGV2ZWxvcGVyQGFic3R1cnpzaWNoZXJ1bmcuZGU6QVRBVFQzeEZmR0YwWUZMMHhzRnhjdnFaTkVqZTEyZnM3enFPU1d2dlpvUnRkYkEyS0U5Z1NSVWlhYW5nd2xhTXFYTjQtWjVSdERVWGp3SXcwaEZnRzAzZndLbVFuZDF4dkQwTU1ia2dxUTdKWVdfWWNFNnEtT0w0elFWV3FZZUFqOGVCZlZfN0s1ZUVoYnpNTWY3RWhyTWt3M25tM1M3Sk1FSzhfbWxUVVNRNkFCUGdoNWwzZUdRPTVBRjM3OUFD\"\n            },\n            body: JSON.stringify({\n                fields: {\n                    project: {\n                        key: \"ITT\"\n                    },\n                    summary: \"REST EXAMPLE 2\",\n                    description: \"Creating an issue via REST API\",\n                    issuetype: {\n                        name: \"Task\",\n                        id: \"10116\"\n                    }\n                }\n            }),\n            credentials: \"include\" // Dies stellt sicher, dass Cookies und Sitzungsdaten gesendet werden\n        });\n        if (!response.ok) {\n            const errorText = await response.text();\n            console.error(\"Fehler:\", response.status, response.statusText);\n            console.error(\"Fehlerdetails:\", errorText);\n        } else {\n            const data = await response.json();\n            console.log(\"Erfolg:\", data);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Test Page\"\n            }, void 0, false, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/app/test/page.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>test(),\n                children: \"Test\"\n            }, void 0, false, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/app/test/page.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/app/test/page.tsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n}\n_c = Test;\nvar _c;\n$RefreshReg$(_c, \"Test\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90ZXN0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUdlLFNBQVNBO0lBRXBCLE1BQU1DLE9BQU87UUFDVCxNQUFNQyxPQUFPQyxLQUFLQyxTQUFTLENBQUM7WUFDeEIsVUFBVTtnQkFDTixXQUFXO29CQUNQLE9BQU87Z0JBQ1g7Z0JBQ0EsV0FBVztnQkFDWCxlQUFlO2dCQUNmLGFBQWE7b0JBQ1QsUUFBUTtvQkFDUixNQUFNO2dCQUNWO1lBQ0o7UUFDSjtRQUlBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxvREFBb0Q7WUFDN0VDLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7Z0JBQ2hCLFVBQVU7Z0JBQ1YsaUJBQWlCO1lBQ3JCO1lBQ0FOLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDakJLLFFBQVE7b0JBQ0pDLFNBQVM7d0JBQ0xDLEtBQUs7b0JBQ1Q7b0JBQ0FDLFNBQVM7b0JBQ1RDLGFBQWE7b0JBQ2JDLFdBQVc7d0JBQ1BDLE1BQU07d0JBQ05DLElBQUk7b0JBQ1I7Z0JBQ0o7WUFDSjtZQUNBQyxhQUFhLFVBQVUscUVBQXFFO1FBQ2hHO1FBRUEsSUFBSSxDQUFDWixTQUFTYSxFQUFFLEVBQUU7WUFDZCxNQUFNQyxZQUFZLE1BQU1kLFNBQVNlLElBQUk7WUFDckNDLFFBQVFDLEtBQUssQ0FBQyxXQUFXakIsU0FBU2tCLE1BQU0sRUFBRWxCLFNBQVNtQixVQUFVO1lBQzdESCxRQUFRQyxLQUFLLENBQUMsa0JBQWtCSDtRQUNwQyxPQUFPO1lBQ0gsTUFBTU0sT0FBTyxNQUFNcEIsU0FBU3FCLElBQUk7WUFDaENMLFFBQVFNLEdBQUcsQ0FBQyxXQUFXRjtRQUMzQjtJQUVKO0lBRUEscUJBQ0ksOERBQUNHOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU9DLFNBQVMsSUFBTTlCOzBCQUFROzs7Ozs7Ozs7Ozs7QUFHM0M7S0EzRHdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdGVzdC9wYWdlLnRzeD9iMzliIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdCgpIHtcblxuICAgIGNvbnN0IHRlc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBcImZpZWxkc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJwcm9qZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJrZXlcIjogXCJJVFRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJzdW1tYXJ5XCI6IFwiVGlja2V0XCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRpY2tldFwiLFxuICAgICAgICAgICAgICAgIFwiaXNzdWV0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGFza1wiLFxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMTAxMTZcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hYnNzYWZldHkuYXRsYXNzaWFuLm5ldC9yZXN0L2FwaS8yL2lzc3VlXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJDb29raWVcIjogXCJhdGxhc3NpYW4ueHNyZi50b2tlbj0zMmRjNzkzN2NhYmM5MTM5YTRjNWRhOWRjZGUxYmM5ODFhMDBmMjdkX2xpblwiLFxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJhc2ljIFpHVjJaV3h2Y0dWeVFHRmljM1IxY25wemFXTm9aWEoxYm1jdVpHVTZRVlJCVkZRemVFWm1SMFl3V1VaTU1IaHpSbmhqZG5GYVRrVnFaVEV5Wm5NM2VuRlBVMWQyZGxwdlVuUmtZa0V5UzBVNVoxTlNWV2xoWVc1bmQyeGhUWEZZVGpRdFdqVlNkRVJWV0dwM1NYY3dhRVpuUnpBelpuZExiVkZ1WkRGNGRrUXdUVTFpYTJkeFVUZEtXVmRmV1dORk5uRXRUMHcwZWxGV1YzRlpaVUZxT0dWQ1psWmZOMHMxWlVWb1lucE5UV1kzUldoeVRXdDNNMjV0TTFNM1NrMUZTemhmYld4VVZWTlJOa0ZDVUdkb05Xd3paVWRSUFRWQlJqTTNPVUZEXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJJVFRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5OiBcIlJFU1QgRVhBTVBMRSAyXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkNyZWF0aW5nIGFuIGlzc3VlIHZpYSBSRVNUIEFQSVwiLFxuICAgICAgICAgICAgICAgICAgICBpc3N1ZXR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVGFza1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiMTAxMTZcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnIC8vIERpZXMgc3RlbGx0IHNpY2hlciwgZGFzcyBDb29raWVzIHVuZCBTaXR6dW5nc2RhdGVuIGdlc2VuZGV0IHdlcmRlblxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZlaGxlcjonLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmVobGVyZGV0YWlsczonLCBlcnJvclRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcmZvbGc6JywgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5UZXN0IFBhZ2U8L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0ZXN0KCl9PlRlc3Q8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJUZXN0IiwidGVzdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJmaWVsZHMiLCJwcm9qZWN0Iiwia2V5Iiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIiwiaXNzdWV0eXBlIiwibmFtZSIsImlkIiwiY3JlZGVudGlhbHMiLCJvayIsImVycm9yVGV4dCIsInRleHQiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImpzb24iLCJsb2ciLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/test/page.tsx\n"));

/***/ })

});