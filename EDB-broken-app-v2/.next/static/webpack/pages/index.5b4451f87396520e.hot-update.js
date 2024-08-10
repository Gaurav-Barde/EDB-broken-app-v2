"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Table.tsx":
/*!**********************************!*\
  !*** ./src/components/Table.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Table\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constants */ \"./src/utils/constants.ts\");\nvar _this = undefined;\n\n\nvar Table = function(param) {\n    var data = param.data, onSort = param.onSort;\n    var handleSortClick = function(event) {\n        var target = event.target;\n        if (target.tagName === \"BUTTON\") {\n            var sortKey = target.textContent || \"\";\n            onSort(sortKey);\n        }\n    };\n    console.log(\"???\", _utils_constants__WEBPACK_IMPORTED_MODULE_1__.tableHeadings[1]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-x-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"min-w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        onClick: function(event) {\n                            return handleSortClick(event);\n                        },\n                        children: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.tableHeadings.map(function(item) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"px-4 py-2 text-left text-sm font-semibold text-gray-900\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: item\n                                }, void 0, false, {\n                                    fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 17\n                                }, _this)\n                            }, item, false, {\n                                fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: data === null || data === void 0 ? void 0 : data.map(function(pokemon) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"border-t border-gray-200\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2 text-sm font-medium text-gray-900\",\n                                    children: pokemon === null || pokemon === void 0 ? void 0 : pokemon.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: pokemon === null || pokemon === void 0 ? void 0 : pokemon.image,\n                                        alt: pokemon.name,\n                                        className: \"w-16 h-16 object-contain\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, _this),\n                                _utils_constants__WEBPACK_IMPORTED_MODULE_1__.tableHeadings.map(function(heading) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-4 py-2 text-sm text-gray-900\",\n                                        children: pokemon.stats[heading]\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 19\n                                    }, _this);\n                                })\n                            ]\n                        }, pokemon.name, true, {\n                            fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNrRDtBQUUzQyxJQUFNQyxLQUFLLEdBQUcsZ0JBTWY7UUFMSkMsSUFBSSxTQUFKQSxJQUFJLEVBQ0pDLE1BQU0sU0FBTkEsTUFBTTtJQUtOLElBQU1DLGVBQWUsR0FBRyxTQUFDQyxLQUF1QixFQUFLO1FBQ25ELElBQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDQyxNQUFNO1FBQzNCLElBQUlBLE1BQU0sQ0FBQ0MsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUMvQixJQUFNQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0csV0FBVyxJQUFJLEVBQUU7WUFDeENOLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDLENBQUM7UUFDbEIsQ0FBQztJQUNILENBQUM7SUFFREUsT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxFQUFFWCw4REFBZ0IsQ0FBQyxDQUFDO0lBRXJDLHFCQUNFLDhEQUFDWSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxpQkFBaUI7a0JBQzlCLDRFQUFDQyxPQUFLO1lBQUNELFNBQVMsRUFBQyxZQUFZOzs4QkFDM0IsOERBQUNFLE9BQUs7OEJBQ0osNEVBQUNDLElBQUU7d0JBQUNDLE9BQU8sRUFBRSxTQUFDWixLQUFLO21DQUFLRCxlQUFlLENBQUNDLEtBQUssQ0FBQzt5QkFBQTtrQ0FHM0NMLCtEQUFpQixDQUFDLFNBQUNtQixJQUFZO2lEQUM5Qiw4REFBQ0MsSUFBRTtnQ0FBWVAsU0FBUyxFQUFDLHlEQUF5RDswQ0FDaEYsNEVBQUNRLFFBQU07OENBQUVGLElBQUk7Ozs7O3lDQUFVOytCQURoQkEsSUFBSTs7OztxQ0FFUjt5QkFDTixDQUFDOzs7Ozs2QkFDQzs7Ozs7eUJBQ0M7OEJBQ1IsOERBQUNHLE9BQUs7OEJBQ0hwQixJQUFJLGFBQUpBLElBQUksV0FBSyxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLElBQUksQ0FBRWdCLEdBQUcsQ0FBQyxTQUFDSyxPQUEwQixFQUFLO3dCQUN6QyxxQkFDRSw4REFBQ1AsSUFBRTs0QkFBb0JILFNBQVMsRUFBQywwQkFBMEI7OzhDQUN6RCw4REFBQ1csSUFBRTtvQ0FBQ1gsU0FBUyxFQUFDLDZDQUE2Qzs4Q0FBRVUsT0FBTyxhQUFQQSxPQUFPLFdBQU0sR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxPQUFPLENBQUVFLElBQUk7Ozs7O3lDQUFNOzhDQUNoRiw4REFBQ0QsSUFBRTtvQ0FBQ1gsU0FBUyxFQUFDLFdBQVc7OENBQ3ZCLDRFQUFDYSxLQUFHO3dDQUNGQyxHQUFHLEVBQUVKLE9BQU8sYUFBUEEsT0FBTyxXQUFPLEdBQWRBLEtBQUFBLENBQWMsR0FBZEEsT0FBTyxDQUFFSyxLQUFLO3dDQUNuQkMsR0FBRyxFQUFFTixPQUFPLENBQUNFLElBQUk7d0NBQ2pCWixTQUFTLEVBQUMsMEJBQTBCOzs7Ozs2Q0FDcEM7Ozs7O3lDQUNDO2dDQUNKYiwrREFBaUIsQ0FBQyxTQUFDOEIsT0FBTzt5REFDekIsOERBQUNOLElBQUU7d0NBQUNYLFNBQVMsRUFBQyxpQ0FBaUM7a0RBQUVVLE9BQU8sQ0FBQ1EsS0FBSyxDQUFDRCxPQUFPLENBQUM7Ozs7OzZDQUFNO2lDQUM5RSxDQUFDOzsyQkFYS1AsT0FBTyxDQUFDRSxJQUFJOzs7O2lDQVloQixDQUNMO29CQUNKLENBQUMsQ0FBQzs7Ozs7eUJBQ0k7Ozs7OztpQkFDRjs7Ozs7YUFDSixDQUNOO0FBQ0osQ0FBQyxDQUFDO0FBckRXeEIsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UYWJsZS50c3g/ZmYyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJpYWxpemVkUG9rZW1vbiB9IGZyb20gJ0AvdHlwZXMnO1xuaW1wb3J0IHsgdGFibGVIZWFkaW5ncyB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IFRhYmxlID0gKHtcbiAgZGF0YSxcbiAgb25Tb3J0LFxufToge1xuICBkYXRhOiBTZXJpYWxpemVkUG9rZW1vbltdO1xuICBvblNvcnQ6IChjb2x1bW46IHN0cmluZykgPT4gdm9pZDtcbn0pID0+IHtcbiAgY29uc3QgaGFuZGxlU29ydENsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgIGNvbnN0IHNvcnRLZXkgPSB0YXJnZXQudGV4dENvbnRlbnQgfHwgJyc7XG4gICAgICBvblNvcnQoc29ydEtleSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnNvbGUubG9nKCc/Pz8nLCB0YWJsZUhlYWRpbmdzWzFdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvXCI+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbFwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlU29ydENsaWNrKGV2ZW50KX0+XG4gICAgICAgICAgICB7LyogPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5OYW1lPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+SW1hZ2U8L3RoPiAqL31cbiAgICAgICAgICAgIHt0YWJsZUhlYWRpbmdzLm1hcCgoaXRlbTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgIDx0aCBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPntpdGVtfTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtkYXRhPy5tYXAoKHBva2Vtb246IFNlcmlhbGl6ZWRQb2tlbW9uKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtwb2tlbW9uLm5hbWV9IGNsYXNzTmFtZT1cImJvcmRlci10IGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+e3Bva2Vtb24/Lm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cG9rZW1vbj8uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17cG9rZW1vbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgb2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIHt0YWJsZUhlYWRpbmdzLm1hcCgoaGVhZGluZykgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj57cG9rZW1vbi5zdGF0c1toZWFkaW5nXX08L3RkPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInRhYmxlSGVhZGluZ3MiLCJUYWJsZSIsImRhdGEiLCJvblNvcnQiLCJoYW5kbGVTb3J0Q2xpY2siLCJldmVudCIsInRhcmdldCIsInRhZ05hbWUiLCJzb3J0S2V5IiwidGV4dENvbnRlbnQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwib25DbGljayIsIm1hcCIsIml0ZW0iLCJ0aCIsImJ1dHRvbiIsInRib2R5IiwicG9rZW1vbiIsInRkIiwibmFtZSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiaGVhZGluZyIsInN0YXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Table.tsx\n"));

/***/ })

});