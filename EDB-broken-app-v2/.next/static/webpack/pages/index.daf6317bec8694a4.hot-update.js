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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Table\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constants */ \"./src/utils/constants.ts\");\nvar _this = undefined;\n\n\nvar Table = function(param) {\n    var data = param.data, onSort = param.onSort;\n    var handleSortClick = function(event) {\n        var target = event.target;\n        if (target.tagName === \"BUTTON\") {\n            var sortKey = target.textContent || \"\";\n            onSort(sortKey);\n        }\n    };\n    console.log(\"???\", _utils_constants__WEBPACK_IMPORTED_MODULE_1__.tableHeadings[1]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-x-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"min-w-full border border-gray-200\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        onClick: function(event) {\n                            return handleSortClick(event);\n                        },\n                        children: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.tableHeadings.map(function(item) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"px-4 py-2 text-left text-sm font-semibold text-gray-900\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: item\n                                }, void 0, false, {\n                                    fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 17\n                                }, _this)\n                            }, item, false, {\n                                fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: data === null || data === void 0 ? void 0 : data.map(function(pokemon) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"border-t border-gray-200\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2 text-sm font-medium text-gray-900\",\n                                    children: pokemon === null || pokemon === void 0 ? void 0 : pokemon.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: pokemon === null || pokemon === void 0 ? void 0 : pokemon.image,\n                                        alt: pokemon.name,\n                                        className: \"w-16 h-16 object-contain\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, _this),\n                                _utils_constants__WEBPACK_IMPORTED_MODULE_1__.tableHeadings.map(function(heading) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-4 py-2 text-sm text-gray-900\",\n                                        children: pokemon.stats[heading]\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 19\n                                    }, _this);\n                                })\n                            ]\n                        }, pokemon.name, true, {\n                            fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/gauravbarde/Documents/se/CodeTest/EDB-broken-app-v2/src/components/Table.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNrRDtBQUUzQyxJQUFNQyxLQUFLLEdBQUcsZ0JBTWY7UUFMSkMsSUFBSSxTQUFKQSxJQUFJLEVBQ0pDLE1BQU0sU0FBTkEsTUFBTTtJQUtOLElBQU1DLGVBQWUsR0FBRyxTQUFDQyxLQUF1QixFQUFLO1FBQ25ELElBQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDQyxNQUFNO1FBQzNCLElBQUlBLE1BQU0sQ0FBQ0MsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUMvQixJQUFNQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0csV0FBVyxJQUFJLEVBQUU7WUFDeENOLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDLENBQUM7UUFDbEIsQ0FBQztJQUNILENBQUM7SUFFREUsT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxFQUFFWCw4REFBZ0IsQ0FBQyxDQUFDO0lBRXJDLHFCQUNFLDhEQUFDWSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxpQkFBaUI7a0JBQzlCLDRFQUFDQyxPQUFLO1lBQUNELFNBQVMsRUFBQyxtQ0FBbUM7OzhCQUNsRCw4REFBQ0UsT0FBSzs4QkFDSiw0RUFBQ0MsSUFBRTt3QkFBQ0MsT0FBTyxFQUFFLFNBQUNaLEtBQUs7bUNBQUtELGVBQWUsQ0FBQ0MsS0FBSyxDQUFDO3lCQUFBO2tDQUczQ0wsK0RBQWlCLENBQUMsU0FBQ21CLElBQVk7aURBQzlCLDhEQUFDQyxJQUFFO2dDQUFZUCxTQUFTLEVBQUMseURBQXlEOzBDQUNoRiw0RUFBQ1EsUUFBTTs4Q0FBRUYsSUFBSTs7Ozs7eUNBQVU7K0JBRGhCQSxJQUFJOzs7O3FDQUVSO3lCQUNOLENBQUM7Ozs7OzZCQUNDOzs7Ozt5QkFDQzs4QkFDUiw4REFBQ0csT0FBSzs4QkFDSHBCLElBQUksYUFBSkEsSUFBSSxXQUFLLEdBQVRBLEtBQUFBLENBQVMsR0FBVEEsSUFBSSxDQUFFZ0IsR0FBRyxDQUFDLFNBQUNLLE9BQTBCLEVBQUs7d0JBQ3pDLHFCQUNFLDhEQUFDUCxJQUFFOzRCQUFvQkgsU0FBUyxFQUFDLDBCQUEwQjs7OENBQ3pELDhEQUFDVyxJQUFFO29DQUFDWCxTQUFTLEVBQUMsNkNBQTZDOzhDQUFFVSxPQUFPLGFBQVBBLE9BQU8sV0FBTSxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLE9BQU8sQ0FBRUUsSUFBSTs7Ozs7eUNBQU07OENBQ2hGLDhEQUFDRCxJQUFFO29DQUFDWCxTQUFTLEVBQUMsV0FBVzs4Q0FDdkIsNEVBQUNhLEtBQUc7d0NBQ0ZDLEdBQUcsRUFBRUosT0FBTyxhQUFQQSxPQUFPLFdBQU8sR0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxPQUFPLENBQUVLLEtBQUs7d0NBQ25CQyxHQUFHLEVBQUVOLE9BQU8sQ0FBQ0UsSUFBSTt3Q0FDakJaLFNBQVMsRUFBQywwQkFBMEI7Ozs7OzZDQUNwQzs7Ozs7eUNBQ0M7Z0NBQ0piLCtEQUFpQixDQUFDLFNBQUM4QixPQUFPO3lEQUN6Qiw4REFBQ04sSUFBRTt3Q0FBQ1gsU0FBUyxFQUFDLGlDQUFpQztrREFBRVUsT0FBTyxDQUFDUSxLQUFLLENBQUNELE9BQU8sQ0FBQzs7Ozs7NkNBQU07aUNBQzlFLENBQUM7OzJCQVhLUCxPQUFPLENBQUNFLElBQUk7Ozs7aUNBWWhCLENBQ0w7b0JBQ0osQ0FBQyxDQUFDOzs7Ozt5QkFDSTs7Ozs7O2lCQUNGOzs7OzthQUNKLENBQ047QUFDSixDQUFDLENBQUM7QUFyRFd4QixLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RhYmxlLnRzeD9mZjIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcmlhbGl6ZWRQb2tlbW9uIH0gZnJvbSAnQC90eXBlcyc7XG5pbXBvcnQgeyB0YWJsZUhlYWRpbmdzIH0gZnJvbSAnQC91dGlscy9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgVGFibGUgPSAoe1xuICBkYXRhLFxuICBvblNvcnQsXG59OiB7XG4gIGRhdGE6IFNlcmlhbGl6ZWRQb2tlbW9uW107XG4gIG9uU29ydDogKGNvbHVtbjogc3RyaW5nKSA9PiB2b2lkO1xufSkgPT4ge1xuICBjb25zdCBoYW5kbGVTb3J0Q2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnQlVUVE9OJykge1xuICAgICAgY29uc3Qgc29ydEtleSA9IHRhcmdldC50ZXh0Q29udGVudCB8fCAnJztcbiAgICAgIG9uU29ydChzb3J0S2V5KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc29sZS5sb2coJz8/PycsIHRhYmxlSGVhZGluZ3NbMV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0ciBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZVNvcnRDbGljayhldmVudCl9PlxuICAgICAgICAgICAgey8qIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+TmFtZTwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPkltYWdlPC90aD4gKi99XG4gICAgICAgICAgICB7dGFibGVIZWFkaW5ncy5tYXAoKGl0ZW06IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICA8dGgga2V5PXtpdGVtfSBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj57aXRlbX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZGF0YT8ubWFwKChwb2tlbW9uOiBTZXJpYWxpemVkUG9rZW1vbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIGtleT17cG9rZW1vbi5uYW1lfSBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPntwb2tlbW9uPy5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3Bva2Vtb24/LmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3Bva2Vtb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBoLTE2IG9iamVjdC1jb250YWluXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICB7dGFibGVIZWFkaW5ncy5tYXAoKGhlYWRpbmcpID0+IChcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e3Bva2Vtb24uc3RhdHNbaGVhZGluZ119PC90ZD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ0YWJsZUhlYWRpbmdzIiwiVGFibGUiLCJkYXRhIiwib25Tb3J0IiwiaGFuZGxlU29ydENsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwic29ydEtleSIsInRleHRDb250ZW50IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsIm9uQ2xpY2siLCJtYXAiLCJpdGVtIiwidGgiLCJidXR0b24iLCJ0Ym9keSIsInBva2Vtb24iLCJ0ZCIsIm5hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsImhlYWRpbmciLCJzdGF0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Table.tsx\n"));

/***/ })

});