"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dialog/page",{

/***/ "(app-pages-browser)/./components/Checkbox.tsx":
/*!*********************************!*\
  !*** ./components/Checkbox.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Checkbox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_components_Checkbox_tsx_import_Poppins_arguments_subsets_latin_weight_400_500_600_700_variableName_poppins___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"components/Checkbox.tsx\",\"import\":\"Poppins\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\",\"500\",\"600\",\"700\"]}],\"variableName\":\"poppins\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"components/Checkbox.tsx\\\",\\\"import\\\":\\\"Poppins\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"400\\\",\\\"500\\\",\\\"600\\\",\\\"700\\\"]}],\\\"variableName\\\":\\\"poppins\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_components_Checkbox_tsx_import_Poppins_arguments_subsets_latin_weight_400_500_600_700_variableName_poppins___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_components_Checkbox_tsx_import_Poppins_arguments_subsets_latin_weight_400_500_600_700_variableName_poppins___WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _typecard_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typecard.module.css */ \"(app-pages-browser)/./components/typecard.module.css\");\n/* harmony import */ var _typecard_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_typecard_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction Checkbox(param) {\n    let { label, placeholder, value, setValue, readOnly } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"row\",\n            gap: 10,\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                readOnly: true,\n                checked: value,\n                onClick: ()=>setValue(!value),\n                className: (_typecard_module_css__WEBPACK_IMPORTED_MODULE_1___default().chbx),\n                placeholder: placeholder\n            }, void 0, false, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Checkbox.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (next_font_google_target_css_path_components_Checkbox_tsx_import_Poppins_arguments_subsets_latin_weight_400_500_600_700_variableName_poppins___WEBPACK_IMPORTED_MODULE_2___default().className),\n                style: {\n                    color: \"#000\"\n                },\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Checkbox.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Checkbox.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_c = Checkbox;\nvar _c;\n$RefreshReg$(_c, \"Checkbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hlY2tib3gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPTUE7QUFKcUM7QUFVNUIsU0FBU0UsU0FBUyxLQUFvRDtRQUFwRCxFQUFDQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBTSxHQUFwRDtJQUM3QixxQkFDSSw4REFBQ0M7UUFBSUMsT0FBTztZQUFDQyxTQUFTO1lBQVFDLGVBQWU7WUFBT0MsS0FBSztZQUFJQyxZQUFZO1FBQVE7OzBCQUM3RSw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQVdSLFVBQVU7Z0JBQU1TLFNBQVNYO2dCQUFPWSxTQUFTLElBQU9YLFNBQVMsQ0FBQ0Q7Z0JBQVFhLFdBQVdqQixrRUFBVztnQkFBRUcsYUFBYUE7Ozs7OzswQkFDOUgsOERBQUNnQjtnQkFBRUYsV0FBV2xCLCtMQUFpQjtnQkFBRVMsT0FBTztvQkFBQ1ksT0FBTztnQkFBTTswQkFBSWxCOzs7Ozs7Ozs7Ozs7QUFHdEU7S0FQd0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hlY2tib3gudHN4PzlhODQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3R5cGVjYXJkLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IFBvcHBpbnMgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5jb25zdCBwb3BwaW5zID0gUG9wcGlucyh7XG4gICAgc3Vic2V0czogWydsYXRpbiddLFxuICAgIHdlaWdodDogWyc0MDAnLCAnNTAwJywgJzYwMCcsICc3MDAnXSAgLy8gQWRkIHRoZSByZXF1aXJlZCB3ZWlnaHRzXG4gIH0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrYm94KHtsYWJlbCwgcGxhY2Vob2xkZXIsIHZhbHVlLCBzZXRWYWx1ZSwgcmVhZE9ubHl9OiBhbnkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGdhcDogMTAsIGFsaWduSXRlbXM6IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiByZWFkT25seT17dHJ1ZX0gY2hlY2tlZD17dmFsdWV9IG9uQ2xpY2s9eygpID0+ICBzZXRWYWx1ZSghdmFsdWUpfSBjbGFzc05hbWU9e3N0eWxlcy5jaGJ4fSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3BvcHBpbnMuY2xhc3NOYW1lfSBzdHlsZT17e2NvbG9yOiBcIiMwMDBcIn19PntsYWJlbH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuIl0sIm5hbWVzIjpbInBvcHBpbnMiLCJzdHlsZXMiLCJDaGVja2JveCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInNldFZhbHVlIiwicmVhZE9ubHkiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwiYWxpZ25JdGVtcyIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiY2hieCIsInAiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Checkbox.tsx\n"));

/***/ })

});