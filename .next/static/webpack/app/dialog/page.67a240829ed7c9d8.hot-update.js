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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Row; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"(app-pages-browser)/./components/Button.tsx\");\n/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Checkbox */ \"(app-pages-browser)/./components/Checkbox.tsx\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input */ \"(app-pages-browser)/./components/Input.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Row(param) {\n    let { label, placeholder, value, setValue, children, first, index, selectedArticles, setSelectedArticles } = param;\n    _s();\n    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(first ? true : false);\n    const [readOnly, setReadOnly] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [number, setNumber] = react__WEBPACK_IMPORTED_MODULE_1__.useState(value[index].articleNumber);\n    const [numberOneVisible, setNumberOneVisible] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [numberTwoVisible, setNumberTwoVisible] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [numberThreeVisible, setNumberThreeVisible] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [serial, setSerial] = react__WEBPACK_IMPORTED_MODULE_1__.useState(value[index].serial);\n    const [count, setCount] = react__WEBPACK_IMPORTED_MODULE_1__.useState(value[index].count);\n    const checkRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const update = (identifier, val)=>{\n        // BRING TO WORK!\n        if (identifier == \"selected\") {\n            if (selectedArticles >= 5) {\n                checkRef.current.checked = false;\n                return;\n            } else {\n                if (checkRef.current.checked == true) {\n                    setSelectedArticles(selectedArticles - 1);\n                    checkRef.current.checked = false;\n                }\n                if (checkRef.current.checked == false) {\n                    setSelectedArticles(selectedArticles + 1);\n                    checkRef.current.checked = true;\n                }\n            }\n        }\n        var thisRow = value[index];\n        thisRow[identifier] = val;\n        console.log(thisRow);\n        setValue([\n            ...value.slice(0, index),\n            thisRow,\n            ...value.slice(index + 1)\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"row\",\n            alignItems: \"center\",\n            justifyContent: \"space-between\",\n            width: \"90%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Checkbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    checkRef: checkRef,\n                    readOnly: readOnly,\n                    setValue: (val)=>{\n                        update(\"selected\", val);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    width: 200,\n                    flexDirection: \"row\",\n                    gap: 10,\n                    alignItems: \"center\",\n                    justifyContent: \"flex-end\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            gap: 10,\n                            justifyContent: \"flex-end\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"#000\",\n                                    display: numberOneVisible ? \"none\" : \"flex\"\n                                },\n                                children: number\n                            }, void 0, false, {\n                                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                noLabel: true,\n                                hidden: numberOneVisible == false,\n                                placeholder: number,\n                                value: number,\n                                setValue: (val)=>{\n                                    setNumber(val);\n                                    update(\"articleNumber\", val);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        icon: true,\n                        text: \"edit\",\n                        onPress: ()=>setNumberOneVisible(!numberOneVisible)\n                    }, void 0, false, {\n                        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    width: 200,\n                    flexDirection: \"row\",\n                    gap: 10,\n                    alignItems: \"center\",\n                    justifyContent: \"flex-end\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            gap: 10,\n                            justifyContent: \"flex-end\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"#000\",\n                                    display: numberTwoVisible ? \"none\" : \"flex\"\n                                },\n                                children: serial\n                            }, void 0, false, {\n                                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                noLabel: true,\n                                hidden: numberTwoVisible == false,\n                                placeholder: serial,\n                                value: serial,\n                                setValue: (val)=>{\n                                    setSerial(val);\n                                    update(\"serial\", val);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        icon: true,\n                        text: \"edit\",\n                        onPress: ()=>setNumberTwoVisible(!numberTwoVisible)\n                    }, void 0, false, {\n                        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    width: 200,\n                    flexDirection: \"row\",\n                    gap: 10,\n                    alignItems: \"center\",\n                    justifyContent: \"flex-end\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            alignItems: \"flex-end\",\n                            flexDirection: \"column\",\n                            gap: 10\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"#000\",\n                                    display: numberThreeVisible ? \"none\" : \"flex\"\n                                },\n                                children: count\n                            }, void 0, false, {\n                                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"number\",\n                                min: 0,\n                                noLabel: true,\n                                hidden: numberThreeVisible == false,\n                                placeholder: count,\n                                value: count,\n                                setValue: (val)=>{\n                                    setCount(val);\n                                    update(\"count\", val);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        icon: true,\n                        text: \"edit\",\n                        onPress: ()=>setNumberThreeVisible(!numberThreeVisible)\n                    }, void 0, false, {\n                        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mauritzlemgen/Documents/GitHub/abssafety-returnsurvey/components/Row.tsx\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, this);\n}\n_s(Row, \"LMo94wZuBVAPOva9vIDRsFzHQw8=\");\n_c = Row;\nvar _c;\n$RefreshReg$(_c, \"Row\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQyxTQUFTOzRCQUFRRSxZQUFZOzRCQUFZRCxlQUFlOzRCQUFVSSxLQUFLO3dCQUFJOzswQ0FDckYsOERBQUNDO2dDQUFFUCxPQUFPO29DQUFFUSxPQUFPO29DQUFRUCxTQUFTbkIscUJBQXFCLFNBQVM7Z0NBQU87MENBQUlJOzs7Ozs7MENBQzdFLDhEQUFDM0IsOENBQUtBO2dDQUFDdUQsTUFBSztnQ0FBU0MsS0FBSztnQ0FBR04sT0FBTztnQ0FBQ0MsUUFBUTVCLHNCQUFzQjtnQ0FBT3BCLGFBQWF3QjtnQ0FBT3ZCLE9BQU91QjtnQ0FBT3RCLFVBQVUsQ0FBQzRCO29DQUFlTCxTQUFTSztvQ0FBTUYsT0FBTyxTQUFTRTtnQ0FBSzs7Ozs7Ozs7Ozs7O2tDQUU5Syw4REFBQ25DLCtDQUFNQTt3QkFBQ3NELElBQUk7d0JBQUNDLE1BQUs7d0JBQU9DLFNBQVMsSUFBTTlCLHNCQUFzQixDQUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9FO0dBdkV3QnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUm93LnRzeD9hOGNjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3R5cGVjYXJkLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IFBvcHBpbnMgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuL0NoZWNrYm94XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcblxuY29uc3QgcG9wcGlucyA9IFBvcHBpbnMoe1xuICAgIHN1YnNldHM6IFsnbGF0aW4nXSxcbiAgICB3ZWlnaHQ6IFsnNDAwJywgJzUwMCcsICc2MDAnLCAnNzAwJ10gIC8vIEFkZCB0aGUgcmVxdWlyZWQgd2VpZ2h0c1xufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm93KHsgbGFiZWwsIHBsYWNlaG9sZGVyLCB2YWx1ZSwgc2V0VmFsdWUsIGNoaWxkcmVuLCBmaXJzdCwgaW5kZXgsIHNlbGVjdGVkQXJ0aWNsZXMsIHNldFNlbGVjdGVkQXJ0aWNsZXMgfTogYW55KSB7XG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmlyc3QgPyB0cnVlIDogZmFsc2UpO1xuXG4gICAgY29uc3QgW3JlYWRPbmx5LCBzZXRSZWFkT25seV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW251bWJlciwgc2V0TnVtYmVyXSA9IFJlYWN0LnVzZVN0YXRlKHZhbHVlW2luZGV4XS5hcnRpY2xlTnVtYmVyKTtcbiAgICBjb25zdCBbbnVtYmVyT25lVmlzaWJsZSwgc2V0TnVtYmVyT25lVmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW251bWJlclR3b1Zpc2libGUsIHNldE51bWJlclR3b1Zpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtudW1iZXJUaHJlZVZpc2libGUsIHNldE51bWJlclRocmVlVmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NlcmlhbCwgc2V0U2VyaWFsXSA9IFJlYWN0LnVzZVN0YXRlKHZhbHVlW2luZGV4XS5zZXJpYWwpO1xuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gUmVhY3QudXNlU3RhdGUodmFsdWVbaW5kZXhdLmNvdW50KTtcbiAgICBjb25zdCBjaGVja1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IHVwZGF0ZSA9IChpZGVudGlmaWVyOiBhbnksIHZhbDogYW55KSA9PiB7XG4gICAgICAgIC8vIEJSSU5HIFRPIFdPUkshXG5cbiAgICAgICAgaWYgKGlkZW50aWZpZXIgPT0gXCJzZWxlY3RlZFwiKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkQXJ0aWNsZXMgPj0gNSkge1xuICAgICAgICAgICAgICAgIGNoZWNrUmVmLmN1cnJlbnQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrUmVmLmN1cnJlbnQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQXJ0aWNsZXMoc2VsZWN0ZWRBcnRpY2xlcyAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja1JlZi5jdXJyZW50LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tSZWYuY3VycmVudC5jaGVja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQXJ0aWNsZXMoc2VsZWN0ZWRBcnRpY2xlcyArIDEpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja1JlZi5jdXJyZW50LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGhpc1JvdyA9IHZhbHVlW2luZGV4XTtcbiAgICAgICAgdGhpc1Jvd1tpZGVudGlmaWVyXSA9IHZhbDtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzUm93KTtcblxuICAgICAgICBzZXRWYWx1ZShbLi4udmFsdWUuc2xpY2UoMCwgaW5kZXgpLCB0aGlzUm93LCAuLi52YWx1ZS5zbGljZShpbmRleCArIDEpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCB3aWR0aDogXCI5MCVcIiwgfX0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxDaGVja2JveCBjaGVja1JlZj17Y2hlY2tSZWZ9IHJlYWRPbmx5PXtyZWFkT25seX0gc2V0VmFsdWU9eyh2YWw6IGFueSkgPT4geyB1cGRhdGUoXCJzZWxlY3RlZFwiLCB2YWwpOyB9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCB3aWR0aDogMjAwLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBnYXA6IDEwLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMTAsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIiMwMDBcIiwgZGlzcGxheTogbnVtYmVyT25lVmlzaWJsZSA/IFwibm9uZVwiIDogXCJmbGV4XCIgfX0+e251bWJlcn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBub0xhYmVsIGhpZGRlbj17bnVtYmVyT25lVmlzaWJsZSA9PSBmYWxzZX0gcGxhY2Vob2xkZXI9e251bWJlcn0gdmFsdWU9e251bWJlcn0gc2V0VmFsdWU9eyh2YWw6IGFueSkgPT4geyBzZXROdW1iZXIodmFsKTsgdXBkYXRlKFwiYXJ0aWNsZU51bWJlclwiLCB2YWwpIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uIHRleHQ9XCJlZGl0XCIgb25QcmVzcz17KCkgPT4gc2V0TnVtYmVyT25lVmlzaWJsZSghbnVtYmVyT25lVmlzaWJsZSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHdpZHRoOiAyMDAsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGdhcDogMTAsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAxMCwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiIzAwMFwiLCBkaXNwbGF5OiBudW1iZXJUd29WaXNpYmxlID8gXCJub25lXCIgOiBcImZsZXhcIiB9fT57c2VyaWFsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG5vTGFiZWwgaGlkZGVuPXtudW1iZXJUd29WaXNpYmxlID09IGZhbHNlfSBwbGFjZWhvbGRlcj17c2VyaWFsfSB2YWx1ZT17c2VyaWFsfSBzZXRWYWx1ZT17KHZhbDogYW55KSA9PiB7IHNldFNlcmlhbCh2YWwpOyB1cGRhdGUoXCJzZXJpYWxcIiwgdmFsKSB9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbiB0ZXh0PVwiZWRpdFwiIG9uUHJlc3M9eygpID0+IHNldE51bWJlclR3b1Zpc2libGUoIW51bWJlclR3b1Zpc2libGUpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCB3aWR0aDogMjAwLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBnYXA6IDEwLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiZmxleC1lbmRcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAxMCwgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIiMwMDBcIiwgZGlzcGxheTogbnVtYmVyVGhyZWVWaXNpYmxlID8gXCJub25lXCIgOiBcImZsZXhcIiB9fT57Y291bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj17MH0gbm9MYWJlbCBoaWRkZW49e251bWJlclRocmVlVmlzaWJsZSA9PSBmYWxzZX0gcGxhY2Vob2xkZXI9e2NvdW50fSB2YWx1ZT17Y291bnR9IHNldFZhbHVlPXsodmFsOiBhbnkpID0+IHsgc2V0Q291bnQodmFsKTsgdXBkYXRlKFwiY291bnRcIiwgdmFsKSB9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbiB0ZXh0PVwiZWRpdFwiIG9uUHJlc3M9eygpID0+IHNldE51bWJlclRocmVlVmlzaWJsZSghbnVtYmVyVGhyZWVWaXNpYmxlKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInBvcHBpbnMiLCJSZWFjdCIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiSW5wdXQiLCJSb3ciLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJzZXRWYWx1ZSIsImNoaWxkcmVuIiwiZmlyc3QiLCJpbmRleCIsInNlbGVjdGVkQXJ0aWNsZXMiLCJzZXRTZWxlY3RlZEFydGljbGVzIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsInJlYWRPbmx5Iiwic2V0UmVhZE9ubHkiLCJudW1iZXIiLCJzZXROdW1iZXIiLCJhcnRpY2xlTnVtYmVyIiwibnVtYmVyT25lVmlzaWJsZSIsInNldE51bWJlck9uZVZpc2libGUiLCJudW1iZXJUd29WaXNpYmxlIiwic2V0TnVtYmVyVHdvVmlzaWJsZSIsIm51bWJlclRocmVlVmlzaWJsZSIsInNldE51bWJlclRocmVlVmlzaWJsZSIsInNlcmlhbCIsInNldFNlcmlhbCIsImNvdW50Iiwic2V0Q291bnQiLCJjaGVja1JlZiIsInVzZVJlZiIsInVwZGF0ZSIsImlkZW50aWZpZXIiLCJ2YWwiLCJjdXJyZW50IiwiY2hlY2tlZCIsInRoaXNSb3ciLCJjb25zb2xlIiwibG9nIiwic2xpY2UiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJnYXAiLCJwIiwiY29sb3IiLCJub0xhYmVsIiwiaGlkZGVuIiwiaWNvbiIsInRleHQiLCJvblByZXNzIiwidHlwZSIsIm1pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Row.tsx\n"));

/***/ })

});