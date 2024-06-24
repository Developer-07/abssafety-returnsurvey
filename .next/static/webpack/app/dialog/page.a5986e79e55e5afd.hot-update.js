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

/***/ "(app-pages-browser)/./components/Row.tsx":
/*!****************************!*\
  !*** ./components/Row.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Row; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"(app-pages-browser)/./components/Button.tsx\");\n/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Checkbox */ \"(app-pages-browser)/./components/Checkbox.tsx\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input */ \"(app-pages-browser)/./components/Input.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Row(param) {\n    let { label, placeholder, value, setValue, children, first, index } = param;\n    _s();\n    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(first ? true : false);\n    const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [readOnly, setReadOnly] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [number, setNumber] = react__WEBPACK_IMPORTED_MODULE_1__.useState(value[index].articleNumber);\n    const [numberOneVisible, setNumberOneVisible] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [numberTwoVisible, setNumberTwoVisible] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [numberThreeVisible, setNumberThreeVisible] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [serial, setSerial] = react__WEBPACK_IMPORTED_MODULE_1__.useState(value[index].serial);\n    const [count, setCount] = react__WEBPACK_IMPORTED_MODULE_1__.useState(value[index].count);\n    const update = (identifier, val)=>{\n        // BRING TO WORK!\n        if (identifier == \"selected\") {\n            console.log(\"selected\");\n            if (val == true) {\n                var length = value.filter((article)=>{\n                    return article.selected == true;\n                }).length;\n                console.log(length);\n                if (length >= 5) {\n                    console.log(\"full ticket\");\n                    setSelected(false);\n                    setNumber(\"--\");\n                    console.log(selected);\n                    setReadOnly(true);\n                    return;\n                } else {\n                    setReadOnly(false);\n                }\n            }\n        }\n        var thisRow = value[index];\n        thisRow[identifier] = val;\n        console.log(thisRow);\n        setValue([\n            ...value.slice(0, index),\n            thisRow,\n            ...value.slice(index + 1)\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"row\",\n            alignItems: \"center\",\n            justifyContent: \"space-between\",\n            width: \"90%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Checkbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    value: selected,\n                    readOnly: readOnly,\n                    setValue: (val)=>{\n                        update(\"selected\", val);\n                        setSelected(val);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    width: 200,\n                    flexDirection: \"row\",\n                    gap: 10,\n                    alignItems: \"center\",\n                    justifyContent: \"flex-end\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            gap: 10,\n                            justifyContent: \"flex-end\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"#000\",\n                                    display: numberOneVisible ? \"none\" : \"flex\"\n                                },\n                                children: number\n                            }, void 0, false, {\n                                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                noLabel: true,\n                                hidden: numberOneVisible == false,\n                                placeholder: number,\n                                value: number,\n                                setValue: (val)=>{\n                                    setNumber(val);\n                                    update(\"articleNumber\", val);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        icon: true,\n                        text: \"edit\",\n                        onPress: ()=>setNumberOneVisible(!numberOneVisible)\n                    }, void 0, false, {\n                        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    width: 200,\n                    flexDirection: \"row\",\n                    gap: 10,\n                    alignItems: \"center\",\n                    justifyContent: \"flex-end\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            gap: 10,\n                            justifyContent: \"flex-end\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"#000\",\n                                    display: numberTwoVisible ? \"none\" : \"flex\"\n                                },\n                                children: serial\n                            }, void 0, false, {\n                                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                noLabel: true,\n                                hidden: numberTwoVisible == false,\n                                placeholder: serial,\n                                value: serial,\n                                setValue: (val)=>{\n                                    setSerial(val);\n                                    update(\"serial\", val);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        icon: true,\n                        text: \"edit\",\n                        onPress: ()=>setNumberTwoVisible(!numberTwoVisible)\n                    }, void 0, false, {\n                        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    width: 200,\n                    flexDirection: \"row\",\n                    gap: 10,\n                    alignItems: \"center\",\n                    justifyContent: \"flex-end\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            alignItems: \"flex-end\",\n                            flexDirection: \"column\",\n                            gap: 10\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"#000\",\n                                    display: numberThreeVisible ? \"none\" : \"flex\"\n                                },\n                                children: count\n                            }, void 0, false, {\n                                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"number\",\n                                min: 0,\n                                noLabel: true,\n                                hidden: numberThreeVisible == false,\n                                placeholder: count,\n                                value: count,\n                                setValue: (val)=>{\n                                    setCount(val);\n                                    update(\"count\", val);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        icon: true,\n                        text: \"edit\",\n                        onPress: ()=>setNumberThreeVisible(!numberThreeVisible)\n                    }, void 0, false, {\n                        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, this);\n}\n_s(Row, \"D4mt7LoqC2EmIStFUdG5DeP/Qgg=\");\n_c = Row;\nvar _c;\n$RefreshReg$(_c, \"Row\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm93LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFVTUE7QUFSeUI7QUFDRDtBQUlJO0FBQ047QUFRYixTQUFTSyxJQUFJLEtBQW9FO1FBQXBFLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBTyxHQUFwRTs7SUFDeEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdiLDJDQUFjLENBQUNVLFFBQVEsT0FBTztJQUN0RCxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR2hCLDJDQUFjLENBQUM7SUFDL0MsTUFBTSxDQUFDaUIsVUFBVUMsWUFBWSxHQUFHbEIsMkNBQWMsQ0FBQztJQUMvQyxNQUFNLENBQUNtQixRQUFRQyxVQUFVLEdBQUdwQiwyQ0FBYyxDQUFDTyxLQUFLLENBQUNJLE1BQU0sQ0FBQ1UsYUFBYTtJQUNyRSxNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUd2QiwyQ0FBYyxDQUFDO0lBQy9ELE1BQU0sQ0FBQ3dCLGtCQUFrQkMsb0JBQW9CLEdBQUd6QiwyQ0FBYyxDQUFDO0lBQy9ELE1BQU0sQ0FBQzBCLG9CQUFvQkMsc0JBQXNCLEdBQUczQiwyQ0FBYyxDQUFDO0lBQ25FLE1BQU0sQ0FBQzRCLFFBQVFDLFVBQVUsR0FBRzdCLDJDQUFjLENBQUNPLEtBQUssQ0FBQ0ksTUFBTSxDQUFDaUIsTUFBTTtJQUM5RCxNQUFNLENBQUNFLE9BQU9DLFNBQVMsR0FBRy9CLDJDQUFjLENBQUNPLEtBQUssQ0FBQ0ksTUFBTSxDQUFDbUIsS0FBSztJQUUzRCxNQUFNRSxTQUFTLENBQUNDLFlBQWlCQztRQUM3QixpQkFBaUI7UUFFakIsSUFBSUQsY0FBYyxZQUFZO1lBQzFCRSxRQUFRQyxHQUFHLENBQUM7WUFDWixJQUFJRixPQUFPLE1BQU07Z0JBQ2IsSUFBSUcsU0FBUzlCLE1BQU0rQixNQUFNLENB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QU87NEJBQUVDLFNBQVM7NEJBQVFFLFlBQVk7NEJBQVlELGVBQWU7NEJBQVVJLEtBQUs7d0JBQUk7OzBDQUNyRiw4REFBQ0M7Z0NBQUVQLE9BQU87b0NBQUVRLE9BQU87b0NBQVFQLFNBQVNsQixxQkFBcUIsU0FBUztnQ0FBTzswQ0FBSUk7Ozs7OzswQ0FDN0UsOERBQUMzQiw4Q0FBS0E7Z0NBQUNzRCxNQUFLO2dDQUFTQyxLQUFLO2dDQUFHTixPQUFPO2dDQUFDQyxRQUFRM0Isc0JBQXNCO2dDQUFPcEIsYUFBYXdCO2dDQUFPdkIsT0FBT3VCO2dDQUFPdEIsVUFBVSxDQUFDMEI7b0NBQWNILFNBQVNHO29DQUFLRixPQUFPLFNBQVNFO2dDQUFJOzs7Ozs7Ozs7Ozs7a0NBRTNLLDhEQUFDakMsK0NBQU1BO3dCQUFDcUQsSUFBSTt3QkFBQ0MsTUFBSzt3QkFBT0MsU0FBUyxJQUFNN0Isc0JBQXNCLENBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJL0U7R0ExRXdCdEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb3cudHN4P2E4Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdHlwZWNhcmQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgUG9wcGlucyB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4vQ2hlY2tib3hcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xuXG5jb25zdCBwb3BwaW5zID0gUG9wcGlucyh7XG4gICAgc3Vic2V0czogWydsYXRpbiddLFxuICAgIHdlaWdodDogWyc0MDAnLCAnNTAwJywgJzYwMCcsICc3MDAnXSAgLy8gQWRkIHRoZSByZXF1aXJlZCB3ZWlnaHRzXG59KTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb3coeyBsYWJlbCwgcGxhY2Vob2xkZXIsIHZhbHVlLCBzZXRWYWx1ZSwgY2hpbGRyZW4sIGZpcnN0LCBpbmRleCB9OiBhbnkpIHtcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmaXJzdCA/IHRydWUgOiBmYWxzZSk7XG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3JlYWRPbmx5LCBzZXRSZWFkT25seV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW251bWJlciwgc2V0TnVtYmVyXSA9IFJlYWN0LnVzZVN0YXRlKHZhbHVlW2luZGV4XS5hcnRpY2xlTnVtYmVyKTtcbiAgICBjb25zdCBbbnVtYmVyT25lVmlzaWJsZSwgc2V0TnVtYmVyT25lVmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW251bWJlclR3b1Zpc2libGUsIHNldE51bWJlclR3b1Zpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtudW1iZXJUaHJlZVZpc2libGUsIHNldE51bWJlclRocmVlVmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NlcmlhbCwgc2V0U2VyaWFsXSA9IFJlYWN0LnVzZVN0YXRlKHZhbHVlW2luZGV4XS5zZXJpYWwpO1xuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gUmVhY3QudXNlU3RhdGUodmFsdWVbaW5kZXhdLmNvdW50KTtcblxuICAgIGNvbnN0IHVwZGF0ZSA9IChpZGVudGlmaWVyOiBhbnksIHZhbDogYW55KSA9PiB7XG4gICAgICAgIC8vIEJSSU5HIFRPIFdPUkshXG5cbiAgICAgICAgaWYgKGlkZW50aWZpZXIgPT0gXCJzZWxlY3RlZFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgaWYgKHZhbCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IHZhbHVlLmZpbHRlcigoYXJ0aWNsZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnRpY2xlLnNlbGVjdGVkID09IHRydWU7XG4gICAgICAgICAgICAgICAgfSkubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoID49IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmdWxsIHRpY2tldFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBzZXROdW1iZXIoXCItLVwiKVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkKVxuXG4gICAgICAgICAgICAgICAgICAgIHNldFJlYWRPbmx5KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVhZE9ubHkoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRoaXNSb3cgPSB2YWx1ZVtpbmRleF07XG4gICAgICAgIHRoaXNSb3dbaWRlbnRpZmllcl0gPSB2YWw7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpc1Jvdyk7XG5cbiAgICAgICAgc2V0VmFsdWUoWy4uLnZhbHVlLnNsaWNlKDAsIGluZGV4KSwgdGhpc1JvdywgLi4udmFsdWUuc2xpY2UoaW5kZXggKyAxKV0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgd2lkdGg6IFwiOTAlXCIsIH19PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9e3NlbGVjdGVkfSByZWFkT25seT17cmVhZE9ubHl9IHNldFZhbHVlPXsodmFsOiBhbnkpID0+IHt1cGRhdGUoXCJzZWxlY3RlZFwiLCB2YWwpO3NldFNlbGVjdGVkKHZhbCl9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCB3aWR0aDogMjAwLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBnYXA6IDEwLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiICB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IDEwLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiIzAwMFwiLCBkaXNwbGF5OiBudW1iZXJPbmVWaXNpYmxlID8gXCJub25lXCIgOiBcImZsZXhcIiB9fT57bnVtYmVyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG5vTGFiZWwgaGlkZGVuPXtudW1iZXJPbmVWaXNpYmxlID09IGZhbHNlfSBwbGFjZWhvbGRlcj17bnVtYmVyfSB2YWx1ZT17bnVtYmVyfSBzZXRWYWx1ZT17KHZhbDogYW55KSA9PiB7c2V0TnVtYmVyKHZhbCk7dXBkYXRlKFwiYXJ0aWNsZU51bWJlclwiLCB2YWwpfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGljb24gdGV4dD1cImVkaXRcIiBvblByZXNzPXsoKSA9PiBzZXROdW1iZXJPbmVWaXNpYmxlKCFudW1iZXJPbmVWaXNpYmxlKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgd2lkdGg6IDIwMCwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgZ2FwOiAxMCwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IDEwLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCIjMDAwXCIsIGRpc3BsYXk6IG51bWJlclR3b1Zpc2libGUgPyBcIm5vbmVcIiA6IFwiZmxleFwiIH19PntzZXJpYWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbm9MYWJlbCBoaWRkZW49e251bWJlclR3b1Zpc2libGUgPT0gZmFsc2V9IHBsYWNlaG9sZGVyPXtzZXJpYWx9IHZhbHVlPXtzZXJpYWx9IHNldFZhbHVlPXsodmFsOiBhbnkpID0+IHtzZXRTZXJpYWwodmFsKTt1cGRhdGUoXCJzZXJpYWxcIiwgdmFsKX19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uIHRleHQ9XCJlZGl0XCIgb25QcmVzcz17KCkgPT4gc2V0TnVtYmVyVHdvVmlzaWJsZSghbnVtYmVyVHdvVmlzaWJsZSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHdpZHRoOiAyMDAsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGdhcDogMTAsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJmbGV4LWVuZFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBnYXA6IDEwLCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiIzAwMFwiLCBkaXNwbGF5OiBudW1iZXJUaHJlZVZpc2libGUgPyBcIm5vbmVcIiA6IFwiZmxleFwiIH19Pntjb3VudH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPXswfSBub0xhYmVsIGhpZGRlbj17bnVtYmVyVGhyZWVWaXNpYmxlID09IGZhbHNlfSBwbGFjZWhvbGRlcj17Y291bnR9IHZhbHVlPXtjb3VudH0gc2V0VmFsdWU9eyh2YWw6IGFueSkgPT4ge3NldENvdW50KHZhbCk7dXBkYXRlKFwiY291bnRcIiwgdmFsKX19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uIHRleHQ9XCJlZGl0XCIgb25QcmVzcz17KCkgPT4gc2V0TnVtYmVyVGhyZWVWaXNpYmxlKCFudW1iZXJUaHJlZVZpc2libGUpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsicG9wcGlucyIsIlJlYWN0IiwiQnV0dG9uIiwiQ2hlY2tib3giLCJJbnB1dCIsIlJvdyIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInNldFZhbHVlIiwiY2hpbGRyZW4iLCJmaXJzdCIsImluZGV4Iiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJyZWFkT25seSIsInNldFJlYWRPbmx5IiwibnVtYmVyIiwic2V0TnVtYmVyIiwiYXJ0aWNsZU51bWJlciIsIm51bWJlck9uZVZpc2libGUiLCJzZXROdW1iZXJPbmVWaXNpYmxlIiwibnVtYmVyVHdvVmlzaWJsZSIsInNldE51bWJlclR3b1Zpc2libGUiLCJudW1iZXJUaHJlZVZpc2libGUiLCJzZXROdW1iZXJUaHJlZVZpc2libGUiLCJzZXJpYWwiLCJzZXRTZXJpYWwiLCJjb3VudCIsInNldENvdW50IiwidXBkYXRlIiwiaWRlbnRpZmllciIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJmaWx0ZXIiLCJhcnRpY2xlIiwidGhpc1JvdyIsInNsaWNlIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwiZ2FwIiwicCIsImNvbG9yIiwibm9MYWJlbCIsImhpZGRlbiIsImljb24iLCJ0ZXh0Iiwib25QcmVzcyIsInR5cGUiLCJtaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Row.tsx\n"));

/***/ })

});