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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Table\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constants */ \"./src/utils/constants.ts\");\nvar _this = undefined;\n\n\nvar Table = function(param) {\n    var data = param.data, onSort = param.onSort;\n    var handleSortClick = function(event) {\n        var target = event.target;\n        if (target.tagName === \"BUTTON\") {\n            var sortKey = target.textContent || \"\";\n            onSort(sortKey);\n        }\n    };\n    console.log(\"???\", _utils_constants__WEBPACK_IMPORTED_MODULE_1__.tableHeadings[1]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-x-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"min-w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        onClick: function(event) {\n                            return handleSortClick(event);\n                        },\n                        children: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.tableHeadings.map(function(item) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"px-4 py-2 text-left text-sm font-semibold text-gray-900\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: item\n                                }, void 0, false, {\n                                    fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 17\n                                }, _this)\n                            }, item, false, {\n                                fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: data === null || data === void 0 ? void 0 : data.map(function(pokemon) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2 text-xl font-bold text-gray-900\",\n                                    children: pokemon === null || pokemon === void 0 ? void 0 : pokemon.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: pokemon === null || pokemon === void 0 ? void 0 : pokemon.image,\n                                        alt: pokemon.name,\n                                        className: \"w-16 h-16 object-contain border rounded-lg border-2 p-4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, _this),\n                                _utils_constants__WEBPACK_IMPORTED_MODULE_1__.tableHeadings.map(function(heading) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-4 py-2 text-sm text-gray-900\",\n                                        children: pokemon.stats[heading]\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 19\n                                    }, _this);\n                                })\n                            ]\n                        }, pokemon.name, true, {\n                            fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNrRDtBQUUzQyxJQUFNQyxLQUFLLEdBQUcsZ0JBTWY7UUFMSkMsSUFBSSxTQUFKQSxJQUFJLEVBQ0pDLE1BQU0sU0FBTkEsTUFBTTtJQUtOLElBQU1DLGVBQWUsR0FBRyxTQUFDQyxLQUF1QixFQUFLO1FBQ25ELElBQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDQyxNQUFNO1FBQzNCLElBQUlBLE1BQU0sQ0FBQ0MsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUMvQixJQUFNQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0csV0FBVyxJQUFJLEVBQUU7WUFDeENOLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDLENBQUM7UUFDbEIsQ0FBQztJQUNILENBQUM7SUFFREUsT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxFQUFFWCw4REFBZ0IsQ0FBQyxDQUFDO0lBRXJDLHFCQUNFLDhEQUFDWSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxpQkFBaUI7a0JBQzlCLDRFQUFDQyxPQUFLO1lBQUNELFNBQVMsRUFBQyxZQUFZOzs4QkFDM0IsOERBQUNFLE9BQUs7OEJBQ0osNEVBQUNDLElBQUU7d0JBQUNDLE9BQU8sRUFBRSxTQUFDWixLQUFLO21DQUFLRCxlQUFlLENBQUNDLEtBQUssQ0FBQzt5QkFBQTtrQ0FHM0NMLCtEQUFpQixDQUFDLFNBQUNtQixJQUFZO2lEQUM5Qiw4REFBQ0MsSUFBRTtnQ0FBWVAsU0FBUyxFQUFDLHlEQUF5RDswQ0FDaEYsNEVBQUNRLFFBQU07OENBQUVGLElBQUk7Ozs7O3lDQUFVOytCQURoQkEsSUFBSTs7OztxQ0FFUjt5QkFDTixDQUFDOzs7Ozs2QkFDQzs7Ozs7eUJBQ0M7OEJBQ1IsOERBQUNHLE9BQUs7OEJBQ0hwQixJQUFJLGFBQUpBLElBQUksV0FBSyxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLElBQUksQ0FBRWdCLEdBQUcsQ0FBQyxTQUFDSyxPQUEwQixFQUFLO3dCQUN6QyxxQkFDRSw4REFBQ1AsSUFBRTs7OENBQ0QsOERBQUNRLElBQUU7b0NBQUNYLFNBQVMsRUFBQywyQ0FBMkM7OENBQUVVLE9BQU8sYUFBUEEsT0FBTyxXQUFNLEdBQWJBLEtBQUFBLENBQWEsR0FBYkEsT0FBTyxDQUFFRSxJQUFJOzs7Ozt5Q0FBTTs4Q0FDOUUsOERBQUNELElBQUU7b0NBQUNYLFNBQVMsRUFBQyxXQUFXOzhDQUN2Qiw0RUFBQ2EsS0FBRzt3Q0FDRkMsR0FBRyxFQUFFSixPQUFPLGFBQVBBLE9BQU8sV0FBTyxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLE9BQU8sQ0FBRUssS0FBSzt3Q0FDbkJDLEdBQUcsRUFBRU4sT0FBTyxDQUFDRSxJQUFJO3dDQUNqQlosU0FBUyxFQUFDLHlEQUF5RDs7Ozs7NkNBQ25FOzs7Ozt5Q0FDQztnQ0FDSmIsK0RBQWlCLENBQUMsU0FBQzhCLE9BQU87eURBQ3pCLDhEQUFDTixJQUFFO3dDQUFDWCxTQUFTLEVBQUMsaUNBQWlDO2tEQUFFVSxPQUFPLENBQUNRLEtBQUssQ0FBQ0QsT0FBTyxDQUFDOzs7Ozs2Q0FBTTtpQ0FDOUUsQ0FBQzs7MkJBWEtQLE9BQU8sQ0FBQ0UsSUFBSTs7OztpQ0FZaEIsQ0FDTDtvQkFDSixDQUFDLENBQUM7Ozs7O3lCQUNJOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0osQ0FDTjtBQUNKLENBQUMsQ0FBQztBQXJEV3hCLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUudHN4P2ZmMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VyaWFsaXplZFBva2Vtb24gfSBmcm9tICdAL3R5cGVzJztcbmltcG9ydCB7IHRhYmxlSGVhZGluZ3MgfSBmcm9tICdAL3V0aWxzL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBUYWJsZSA9ICh7XG4gIGRhdGEsXG4gIG9uU29ydCxcbn06IHtcbiAgZGF0YTogU2VyaWFsaXplZFBva2Vtb25bXTtcbiAgb25Tb3J0OiAoY29sdW1uOiBzdHJpbmcpID0+IHZvaWQ7XG59KSA9PiB7XG4gIGNvbnN0IGhhbmRsZVNvcnRDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgICBjb25zdCBzb3J0S2V5ID0gdGFyZ2V0LnRleHRDb250ZW50IHx8ICcnO1xuICAgICAgb25Tb3J0KHNvcnRLZXkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zb2xlLmxvZygnPz8/JywgdGFibGVIZWFkaW5nc1sxXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGxcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0ciBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZVNvcnRDbGljayhldmVudCl9PlxuICAgICAgICAgICAgey8qIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+TmFtZTwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPkltYWdlPC90aD4gKi99XG4gICAgICAgICAgICB7dGFibGVIZWFkaW5ncy5tYXAoKGl0ZW06IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICA8dGgga2V5PXtpdGVtfSBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj57aXRlbX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZGF0YT8ubWFwKChwb2tlbW9uOiBTZXJpYWxpemVkUG9rZW1vbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIGtleT17cG9rZW1vbi5uYW1lfT5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQteGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj57cG9rZW1vbj8ubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwb2tlbW9uPy5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwb2tlbW9uLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTYgaC0xNiBvYmplY3QtY29udGFpbiBib3JkZXIgcm91bmRlZC1sZyBib3JkZXItMiBwLTRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIHt0YWJsZUhlYWRpbmdzLm1hcCgoaGVhZGluZykgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj57cG9rZW1vbi5zdGF0c1toZWFkaW5nXX08L3RkPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInRhYmxlSGVhZGluZ3MiLCJUYWJsZSIsImRhdGEiLCJvblNvcnQiLCJoYW5kbGVTb3J0Q2xpY2siLCJldmVudCIsInRhcmdldCIsInRhZ05hbWUiLCJzb3J0S2V5IiwidGV4dENvbnRlbnQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwib25DbGljayIsIm1hcCIsIml0ZW0iLCJ0aCIsImJ1dHRvbiIsInRib2R5IiwicG9rZW1vbiIsInRkIiwibmFtZSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiaGVhZGluZyIsInN0YXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Table.tsx\n"));

/***/ })

});