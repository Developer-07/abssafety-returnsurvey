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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Test; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction Test() {\n    const test = async ()=>{\n        const url = \"https://methacore_api.artim-industries.com/\";\n        const token = \"ZGV2ZWxvcGVyQGFic3R1cnpzaWNoZXJ1bmcuZGU6QVRBVFQzeEZmR0YwWUZMMHhzRnhjdnFaTkVqZTEyZnM3enFPU1d2dlpvUnRkYkEyS0U5Z1NSVWlhYW5nd2xhTXFYTjQtWjVSdERVWGp3SXcwaEZnRzAzZndLbVFuZDF4dkQwTU1ia2dxUTdKWVdfWWNFNnEtT0w0elFWV3FZZUFqOGVCZlZfN0s1ZUVoYnpNTWY3RWhyTWt3M25tM1M3Sk1FSzhfbWxUVVNRNkFCUGdoNWwzZUdRPTVBRjM3OUFD\"; // Ersetzen Sie dies durch Ihren tatsächlichen Basic Auth Token\n        const xsrfToken = \"32dc7937cabc9139a4c5da9dcde1bc981a00f27d_lin\"; // Ersetzen Sie dies durch den tatsächlichen XSRF-Token\n        const bodyData = {\n            fields: {\n                project: {\n                    key: \"ITT\"\n                },\n                summary: \"Test\",\n                description: \"Creating of an issue using project keys and issue type names using the REST API\",\n                issuetype: {\n                    name: \"Task\"\n                }\n            }\n        };\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(url, {\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"Authorization\": \"Basic \".concat(token)\n                }\n            });\n            console.log(\"Erfolg:\", response.data);\n        } catch (error) {\n            if (error.response) {\n                // Server antwortete mit einem Statuscode, der außerhalb des Bereichs von 2xx liegt\n                console.error(\"Fehler:\", error.response.status, error.response.statusText);\n                console.error(\"Fehlerdetails:\", error.response.data);\n            } else if (error.request) {\n                // Anfrage wurde gesendet, aber keine Antwort empfangen\n                console.error(\"Keine Antwort erhalten:\", error.request);\n            } else {\n                // Ein anderes Problem trat bei der Anforderung auf\n                console.error(\"Anfrage fehlgeschlagen:\", error.message);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Test Page\"\n            }, void 0, false, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/app/test/page.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>test(),\n                children: \"Test\"\n            }, void 0, false, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/app/test/page.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/app/test/page.tsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\n_c = Test;\nvar _c;\n$RefreshReg$(_c, \"Test\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90ZXN0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFMEI7QUFFWCxTQUFTQztJQUVwQixNQUFNQyxPQUFPO1FBRVQsTUFBTUMsTUFBTTtRQUNaLE1BQU1DLFFBQVEsNFNBQTRTLCtEQUErRDtRQUN6WCxNQUFNQyxZQUFZLGdEQUFnRCx1REFBdUQ7UUFFekgsTUFBTUMsV0FBVztZQUNiQyxRQUFRO2dCQUNKQyxTQUFTO29CQUNMQyxLQUFLO2dCQUNUO2dCQUNBQyxTQUFTO2dCQUNUQyxhQUFhO2dCQUNiQyxXQUFXO29CQUNQQyxNQUFNO2dCQUNWO1lBQ0o7UUFDSjtRQUVBLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1kLDZDQUFLQSxDQUFDZSxHQUFHLENBQUNaLEtBQUs7Z0JBQ2xDYSxTQUFTO29CQUNMLGdCQUFnQjtvQkFDaEIsaUJBQWlCLFNBQWUsT0FBTlo7Z0JBQzlCO1lBQ0o7WUFFQWEsUUFBUUMsR0FBRyxDQUFDLFdBQVdKLFNBQVNLLElBQUk7UUFDeEMsRUFBRSxPQUFPQyxPQUFPO1lBQ1osSUFBSUEsTUFBTU4sUUFBUSxFQUFFO2dCQUNoQixtRkFBbUY7Z0JBQ25GRyxRQUFRRyxLQUFLLENBQUMsV0FBV0EsTUFBTU4sUUFBUSxDQUFDTyxNQUFNLEVBQUVELE1BQU1OLFFBQVEsQ0FBQ1EsVUFBVTtnQkFDekVMLFFBQVFHLEtBQUssQ0FBQyxrQkFBa0JBLE1BQU1OLFFBQVEsQ0FBQ0ssSUFBSTtZQUN2RCxPQUFPLElBQUlDLE1BQU1HLE9BQU8sRUFBRTtnQkFDdEIsdURBQXVEO2dCQUN2RE4sUUFBUUcsS0FBSyxDQUFDLDJCQUEyQkEsTUFBTUcsT0FBTztZQUMxRCxPQUFPO2dCQUNILG1EQUFtRDtnQkFDbkROLFFBQVFHLEtBQUssQ0FBQywyQkFBMkJBLE1BQU1JLE9BQU87WUFDMUQ7UUFDSjtJQUVKO0lBRUEscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU9DLFNBQVMsSUFBTTFCOzBCQUFROzs7Ozs7Ozs7Ozs7QUFHM0M7S0FwRHdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdGVzdC9wYWdlLnRzeD9iMzliIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdCgpIHtcblxuICAgIGNvbnN0IHRlc3QgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vbWV0aGFjb3JlX2FwaS5hcnRpbS1pbmR1c3RyaWVzLmNvbS8nO1xuICAgICAgICBjb25zdCB0b2tlbiA9ICdaR1YyWld4dmNHVnlRR0ZpYzNSMWNucHphV05vWlhKMWJtY3VaR1U2UVZSQlZGUXplRVptUjBZd1dVWk1NSGh6Um5oamRuRmFUa1ZxWlRFeVpuTTNlbkZQVTFkMmRscHZVblJrWWtFeVMwVTVaMU5TVldsaFlXNW5kMnhoVFhGWVRqUXRXalZTZEVSVldHcDNTWGN3YUVablJ6QXpabmRMYlZGdVpERjRka1F3VFUxaWEyZHhVVGRLV1ZkZldXTkZObkV0VDB3MGVsRldWM0ZaWlVGcU9HVkNabFpmTjBzMVpVVm9ZbnBOVFdZM1JXaHlUV3QzTTI1dE0xTTNTazFGU3poZmJXeFVWVk5STmtGQ1VHZG9OV3d6WlVkUlBUVkJSak0zT1VGRCc7IC8vIEVyc2V0emVuIFNpZSBkaWVzIGR1cmNoIElocmVuIHRhdHPDpGNobGljaGVuIEJhc2ljIEF1dGggVG9rZW5cbiAgICAgICAgY29uc3QgeHNyZlRva2VuID0gJzMyZGM3OTM3Y2FiYzkxMzlhNGM1ZGE5ZGNkZTFiYzk4MWEwMGYyN2RfbGluJzsgLy8gRXJzZXR6ZW4gU2llIGRpZXMgZHVyY2ggZGVuIHRhdHPDpGNobGljaGVuIFhTUkYtVG9rZW5cblxuICAgICAgICBjb25zdCBib2R5RGF0YSA9IHtcbiAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnSVRUJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VtbWFyeTogJ1Rlc3QnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ3JlYXRpbmcgb2YgYW4gaXNzdWUgdXNpbmcgcHJvamVjdCBrZXlzIGFuZCBpc3N1ZSB0eXBlIG5hbWVzIHVzaW5nIHRoZSBSRVNUIEFQSScsXG4gICAgICAgICAgICAgICAgaXNzdWV0eXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdUYXNrJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCYXNpYyAke3Rva2VufWBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VyZm9sZzonLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIC8vIFNlcnZlciBhbnR3b3J0ZXRlIG1pdCBlaW5lbSBTdGF0dXNjb2RlLCBkZXIgYXXDn2VyaGFsYiBkZXMgQmVyZWljaHMgdm9uIDJ4eCBsaWVndFxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZlaGxlcjonLCBlcnJvci5yZXNwb25zZS5zdGF0dXMsIGVycm9yLnJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZlaGxlcmRldGFpbHM6JywgZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAvLyBBbmZyYWdlIHd1cmRlIGdlc2VuZGV0LCBhYmVyIGtlaW5lIEFudHdvcnQgZW1wZmFuZ2VuXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignS2VpbmUgQW50d29ydCBlcmhhbHRlbjonLCBlcnJvci5yZXF1ZXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRWluIGFuZGVyZXMgUHJvYmxlbSB0cmF0IGJlaSBkZXIgQW5mb3JkZXJ1bmcgYXVmXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQW5mcmFnZSBmZWhsZ2VzY2hsYWdlbjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5UZXN0IFBhZ2U8L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0ZXN0KCl9PlRlc3Q8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJheGlvcyIsIlRlc3QiLCJ0ZXN0IiwidXJsIiwidG9rZW4iLCJ4c3JmVG9rZW4iLCJib2R5RGF0YSIsImZpZWxkcyIsInByb2plY3QiLCJrZXkiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJpc3N1ZXR5cGUiLCJuYW1lIiwicmVzcG9uc2UiLCJnZXQiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJyZXF1ZXN0IiwibWVzc2FnZSIsImRpdiIsImgxIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/test/page.tsx\n"));

/***/ })

});