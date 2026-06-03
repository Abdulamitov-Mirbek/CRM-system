"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/pipelines/route";
exports.ids = ["app/api/pipelines/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "./action-async-storage.external?8dda":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external?3d59":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external?16bc":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpipelines%2Froute&page=%2Fapi%2Fpipelines%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpipelines%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpipelines%2Froute&page=%2Fapi%2Fpipelines%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpipelines%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_user_Desktop_CRM_project_frontend_src_app_api_pipelines_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/pipelines/route.ts */ \"(rsc)/./src/app/api/pipelines/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/pipelines/route\",\n        pathname: \"/api/pipelines\",\n        filename: \"route\",\n        bundlePath: \"app/api/pipelines/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\user\\\\Desktop\\\\CRM-project\\\\frontend\\\\src\\\\app\\\\api\\\\pipelines\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_user_Desktop_CRM_project_frontend_src_app_api_pipelines_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/pipelines/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwaXBlbGluZXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnBpcGVsaW5lcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnBpcGVsaW5lcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN1c2VyJTVDRGVza3RvcCU1Q0NSTS1wcm9qZWN0JTVDZnJvbnRlbmQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3VzZXIlNUNEZXNrdG9wJTVDQ1JNLXByb2plY3QlNUNmcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDbUM7QUFDaEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcm0tZnJvbnRlbmQvPzY4YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcdXNlclxcXFxEZXNrdG9wXFxcXENSTS1wcm9qZWN0XFxcXGZyb250ZW5kXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHBpcGVsaW5lc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcGlwZWxpbmVzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcGlwZWxpbmVzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9waXBlbGluZXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERlc2t0b3BcXFxcQ1JNLXByb2plY3RcXFxcZnJvbnRlbmRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccGlwZWxpbmVzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9waXBlbGluZXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpipelines%2Froute&page=%2Fapi%2Fpipelines%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpipelines%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/pipelines/route.ts":
/*!****************************************!*\
  !*** ./src/app/api/pipelines/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\n\n\nasync function GET() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    if (!session) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    const pipelines = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pipeline.findMany({\n        include: {\n            stages: {\n                orderBy: {\n                    order: \"asc\"\n                }\n            }\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(pipelines);\n}\nasync function POST(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    if (!session) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    try {\n        const { name, stages } = await req.json();\n        const pipeline = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pipeline.create({\n            data: {\n                name,\n                stages: {\n                    create: stages?.map((s, index)=>({\n                            name: s,\n                            order: index\n                        })) || [\n                        {\n                            name: \"Lead\",\n                            order: 0\n                        },\n                        {\n                            name: \"Qualified\",\n                            order: 1\n                        },\n                        {\n                            name: \"Proposal\",\n                            order: 2\n                        },\n                        {\n                            name: \"Negotiation\",\n                            order: 3\n                        },\n                        {\n                            name: \"Closed\",\n                            order: 4\n                        }\n                    ]\n                }\n            },\n            include: {\n                stages: true\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(pipeline);\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(error.message, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9waXBlbGluZXMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrQztBQUNTO0FBQ0U7QUFDSjtBQUVsQyxlQUFlSTtJQUNwQixNQUFNQyxVQUFVLE1BQU1ILDJEQUFnQkEsQ0FBQ0Msa0RBQVdBO0lBQ2xELElBQUksQ0FBQ0UsU0FBUztRQUNaLE9BQU8sSUFBSUoscURBQVlBLENBQUMsZ0JBQWdCO1lBQUVLLFFBQVE7UUFBSTtJQUN4RDtJQUVBLE1BQU1DLFlBQVksTUFBTVAsbURBQU1BLENBQUNRLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDO1FBQy9DQyxTQUFTO1lBQ1BDLFFBQVE7Z0JBQ05DLFNBQVM7b0JBQ1BDLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPWixxREFBWUEsQ0FBQ2EsSUFBSSxDQUFDUDtBQUMzQjtBQUVPLGVBQWVRLEtBQUtDLEdBQVk7SUFDckMsTUFBTVgsVUFBVSxNQUFNSCwyREFBZ0JBLENBQUNDLGtEQUFXQTtJQUNsRCxJQUFJLENBQUNFLFNBQVM7UUFDWixPQUFPLElBQUlKLHFEQUFZQSxDQUFDLGdCQUFnQjtZQUFFSyxRQUFRO1FBQUk7SUFDeEQ7SUFFQSxJQUFJO1FBQ0YsTUFBTSxFQUFFVyxJQUFJLEVBQUVOLE1BQU0sRUFBRSxHQUFHLE1BQU1LLElBQUlGLElBQUk7UUFFdkMsTUFBTU4sV0FBVyxNQUFNUixtREFBTUEsQ0FBQ1EsUUFBUSxDQUFDVSxNQUFNLENBQUM7WUFDNUNDLE1BQU07Z0JBQ0pGO2dCQUNBTixRQUFRO29CQUNOTyxRQUFRUCxRQUFRUyxJQUFJLENBQUNDLEdBQVdDLFFBQW1COzRCQUNqREwsTUFBTUk7NEJBQ05SLE9BQU9TO3dCQUNULE9BQU87d0JBQ0w7NEJBQUVMLE1BQU07NEJBQVFKLE9BQU87d0JBQUU7d0JBQ3pCOzRCQUFFSSxNQUFNOzRCQUFhSixPQUFPO3dCQUFFO3dCQUM5Qjs0QkFBRUksTUFBTTs0QkFBWUosT0FBTzt3QkFBRTt3QkFDN0I7NEJBQUVJLE1BQU07NEJBQWVKLE9BQU87d0JBQUU7d0JBQ2hDOzRCQUFFSSxNQUFNOzRCQUFVSixPQUFPO3dCQUFFO3FCQUM1QjtnQkFDSDtZQUNGO1lBQ0FILFNBQVM7Z0JBQ1BDLFFBQVE7WUFDVjtRQUNGO1FBRUEsT0FBT1YscURBQVlBLENBQUNhLElBQUksQ0FBQ047SUFDM0IsRUFBRSxPQUFPZSxPQUFZO1FBQ25CLE9BQU8sSUFBSXRCLHFEQUFZQSxDQUFDc0IsTUFBTUMsT0FBTyxFQUFFO1lBQUVsQixRQUFRO1FBQUk7SUFDdkQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NybS1mcm9udGVuZC8uL3NyYy9hcHAvYXBpL3BpcGVsaW5lcy9yb3V0ZS50cz9iZDE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XHJcbiAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIlVuYXV0aG9yaXplZFwiLCB7IHN0YXR1czogNDAxIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGlwZWxpbmVzID0gYXdhaXQgcHJpc21hLnBpcGVsaW5lLmZpbmRNYW55KHtcclxuICAgIGluY2x1ZGU6IHtcclxuICAgICAgc3RhZ2VzOiB7XHJcbiAgICAgICAgb3JkZXJCeToge1xyXG4gICAgICAgICAgb3JkZXI6ICdhc2MnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocGlwZWxpbmVzKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gIGlmICghc2Vzc2lvbikge1xyXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJVbmF1dGhvcml6ZWRcIiwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHN0YWdlcyB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgIFxyXG4gICAgY29uc3QgcGlwZWxpbmUgPSBhd2FpdCBwcmlzbWEucGlwZWxpbmUuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgc3RhZ2VzOiB7XHJcbiAgICAgICAgICBjcmVhdGU6IHN0YWdlcz8ubWFwKChzOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+ICh7XHJcbiAgICAgICAgICAgIG5hbWU6IHMsXHJcbiAgICAgICAgICAgIG9yZGVyOiBpbmRleCxcclxuICAgICAgICAgIH0pKSB8fCBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJMZWFkXCIsIG9yZGVyOiAwIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJRdWFsaWZpZWRcIiwgb3JkZXI6IDEgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIlByb3Bvc2FsXCIsIG9yZGVyOiAyIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJOZWdvdGlhdGlvblwiLCBvcmRlcjogMyB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiQ2xvc2VkXCIsIG9yZGVyOiA0IH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBzdGFnZXM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocGlwZWxpbmUpO1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKGVycm9yLm1lc3NhZ2UsIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJHRVQiLCJzZXNzaW9uIiwic3RhdHVzIiwicGlwZWxpbmVzIiwicGlwZWxpbmUiLCJmaW5kTWFueSIsImluY2x1ZGUiLCJzdGFnZXMiLCJvcmRlckJ5Iiwib3JkZXIiLCJqc29uIiwiUE9TVCIsInJlcSIsIm5hbWUiLCJjcmVhdGUiLCJkYXRhIiwibWFwIiwicyIsImluZGV4IiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/pipelines/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const user = await _prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email.trim().toLowerCase()\n                    }\n                });\n                if (!user) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                if (!user.isActive) {\n                    throw new Error(\"Account is blocked\");\n                }\n                // If it's a firebase sync, we trust it (it's called from our client after firebase auth)\n                if (credentials.password === \"FIREBASE_AUTH_EXTERNAL\") {\n                    return {\n                        id: user.id,\n                        email: user.email,\n                        name: user.name,\n                        image: user.image,\n                        role: user.role,\n                        emailVerified: user.emailVerified,\n                        isActive: user.isActive\n                    };\n                }\n                if (!user.password || user.password === \"FIREBASE_MANAGED\") {\n                    throw new Error(\"Please use Google or Firebase login\");\n                }\n                const isPasswordCorrect = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, user.password);\n                if (!isPasswordCorrect) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    image: user.image,\n                    role: user.role,\n                    emailVerified: user.emailVerified,\n                    isActive: user.isActive\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        async session ({ session, token }) {\n            if (token && session.user) {\n                session.user.id = token.sub;\n                session.user.emailVerified = token.emailVerified;\n                session.user.role = token.role;\n                session.user.isActive = token.isActive;\n            }\n            return session;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.emailVerified = user.emailVerified;\n                token.role = user.role;\n                token.isActive = user.isActive;\n            } else if (token.sub) {\n                const currentUser = await _prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.findUnique({\n                    where: {\n                        id: token.sub\n                    },\n                    select: {\n                        emailVerified: true,\n                        role: true,\n                        isActive: true\n                    }\n                });\n                if (currentUser) {\n                    token.emailVerified = currentUser.emailVerified;\n                    token.role = currentUser.role;\n                    token.isActive = currentUser.isActive;\n                }\n            }\n            return token;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFEO0FBRWE7QUFDdEM7QUFFRTtBQUV2QixNQUFNSSxjQUErQjtJQUMxQ0MsU0FBU0wsbUVBQWFBLENBQUNHLCtDQUFNQTtJQUM3QkcsV0FBVztRQUNUTCwyRUFBbUJBLENBQUM7WUFDbEJNLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDakQsTUFBTSxJQUFJRSxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNQyxPQUFPLE1BQU1aLCtDQUFNQSxDQUFDWSxJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDeENDLE9BQU87d0JBQ0xSLE9BQU9ELFlBQVlDLEtBQUssQ0FBQ1MsSUFBSSxHQUFHQyxXQUFXO29CQUM3QztnQkFDRjtnQkFFQSxJQUFJLENBQUNKLE1BQU07b0JBQ1QsTUFBTSxJQUFJRCxNQUFNO2dCQUNsQjtnQkFFQSxJQUFJLENBQUNDLEtBQUtLLFFBQVEsRUFBRTtvQkFDbEIsTUFBTSxJQUFJTixNQUFNO2dCQUNsQjtnQkFFQSx5RkFBeUY7Z0JBQ3pGLElBQUlOLFlBQVlJLFFBQVEsS0FBSywwQkFBMEI7b0JBQ3JELE9BQU87d0JBQ0xTLElBQUlOLEtBQUtNLEVBQUU7d0JBQ1haLE9BQU9NLEtBQUtOLEtBQUs7d0JBQ2pCRixNQUFNUSxLQUFLUixJQUFJO3dCQUNmZSxPQUFPUCxLQUFLTyxLQUFLO3dCQUNqQkMsTUFBTVIsS0FBS1EsSUFBSTt3QkFDZkMsZUFBZVQsS0FBS1MsYUFBYTt3QkFDakNKLFVBQVVMLEtBQUtLLFFBQVE7b0JBQ3pCO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0wsS0FBS0gsUUFBUSxJQUFJRyxLQUFLSCxRQUFRLEtBQUssb0JBQW9CO29CQUMxRCxNQUFNLElBQUlFLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1XLG9CQUFvQixNQUFNdkIscURBQWMsQ0FDNUNNLFlBQVlJLFFBQVEsRUFDcEJHLEtBQUtILFFBQVE7Z0JBR2YsSUFBSSxDQUFDYSxtQkFBbUI7b0JBQ3RCLE1BQU0sSUFBSVgsTUFBTTtnQkFDbEI7Z0JBRUEsT0FBTztvQkFDTE8sSUFBSU4sS0FBS00sRUFBRTtvQkFDWFosT0FBT00sS0FBS04sS0FBSztvQkFDakJGLE1BQU1RLEtBQUtSLElBQUk7b0JBQ2ZlLE9BQU9QLEtBQUtPLEtBQUs7b0JBQ2pCQyxNQUFNUixLQUFLUSxJQUFJO29CQUNmQyxlQUFlVCxLQUFLUyxhQUFhO29CQUNqQ0osVUFBVUwsS0FBS0ssUUFBUTtnQkFDekI7WUFDRjtRQUNGO0tBQ0Q7SUFDRE8sU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsV0FBVztRQUNULE1BQU1KLFNBQVEsRUFBRUEsT0FBTyxFQUFFSyxLQUFLLEVBQUU7WUFDOUIsSUFBSUEsU0FBU0wsUUFBUVosSUFBSSxFQUFFO2dCQUN4QlksUUFBUVosSUFBSSxDQUFTTSxFQUFFLEdBQUdXLE1BQU1DLEdBQUc7Z0JBQ25DTixRQUFRWixJQUFJLENBQVNTLGFBQWEsR0FBR1EsTUFBTVIsYUFBYTtnQkFDeERHLFFBQVFaLElBQUksQ0FBU1EsSUFBSSxHQUFHUyxNQUFNVCxJQUFJO2dCQUN0Q0ksUUFBUVosSUFBSSxDQUFTSyxRQUFRLEdBQUdZLE1BQU1aLFFBQVE7WUFDakQ7WUFDQSxPQUFPTztRQUNUO1FBQ0EsTUFBTU8sS0FBSSxFQUFFRixLQUFLLEVBQUVqQixJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUmlCLE1BQU1SLGFBQWEsR0FBRyxLQUFjQSxhQUFhO2dCQUNqRFEsTUFBTVQsSUFBSSxHQUFHLEtBQWNBLElBQUk7Z0JBQy9CUyxNQUFNWixRQUFRLEdBQUcsS0FBY0EsUUFBUTtZQUN6QyxPQUFPLElBQUlZLE1BQU1DLEdBQUcsRUFBRTtnQkFDcEIsTUFBTUUsY0FBYyxNQUFNaEMsK0NBQU1BLENBQUNZLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUMvQ0MsT0FBTzt3QkFBRUksSUFBSVcsTUFBTUMsR0FBRztvQkFBQztvQkFDdkJHLFFBQVE7d0JBQ05aLGVBQWU7d0JBQ2ZELE1BQU07d0JBQ05ILFVBQVU7b0JBQ1o7Z0JBQ0Y7Z0JBRUEsSUFBSWUsYUFBYTtvQkFDZkgsTUFBTVIsYUFBYSxHQUFHVyxZQUFZWCxhQUFhO29CQUMvQ1EsTUFBTVQsSUFBSSxHQUFHWSxZQUFZWixJQUFJO29CQUM3QlMsTUFBTVosUUFBUSxHQUFHZSxZQUFZZixRQUFRO2dCQUN2QztZQUNGO1lBQ0EsT0FBT1k7UUFDVDtJQUNGO0lBQ0FLLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUNyQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JtLWZyb250ZW5kLy4vc3JjL2xpYi9hdXRoLnRzPzY2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAYXV0aC9wcmlzbWEtYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xyXG5cclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi9wcmlzbWFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xyXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSBhcyBhbnksXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgbmFtZTogXCJjcmVkZW50aWFsc1wiLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiB9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcclxuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNyZWRlbnRpYWxzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjcmVkZW50aWFsc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdXNlci5pc0FjdGl2ZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY291bnQgaXMgYmxvY2tlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0J3MgYSBmaXJlYmFzZSBzeW5jLCB3ZSB0cnVzdCBpdCAoaXQncyBjYWxsZWQgZnJvbSBvdXIgY2xpZW50IGFmdGVyIGZpcmViYXNlIGF1dGgpXG4gICAgICAgIGlmIChjcmVkZW50aWFscy5wYXNzd29yZCA9PT0gJ0ZJUkVCQVNFX0FVVEhfRVhURVJOQUwnKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICBpbWFnZTogdXNlci5pbWFnZSxcbiAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IHVzZXIuZW1haWxWZXJpZmllZCxcbiAgICAgICAgICAgIGlzQWN0aXZlOiB1c2VyLmlzQWN0aXZlLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxyXG4gICAgICAgIGlmICghdXNlci5wYXNzd29yZCB8fCB1c2VyLnBhc3N3b3JkID09PSAnRklSRUJBU0VfTUFOQUdFRCcpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2UgR29vZ2xlIG9yIEZpcmViYXNlIGxvZ2luXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXNQYXNzd29yZENvcnJlY3QgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcclxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgdXNlci5wYXNzd29yZFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICghaXNQYXNzd29yZENvcnJlY3QpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY3JlZGVudGlhbHNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgaW1hZ2U6IHVzZXIuaW1hZ2UsXG4gICAgICAgICAgcm9sZTogdXNlci5yb2xlLFxuICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IHVzZXIuZW1haWxWZXJpZmllZCxcbiAgICAgICAgICBpc0FjdGl2ZTogdXNlci5pc0FjdGl2ZSxcbiAgICAgICAgfTtcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHNlc3Npb246IHtcclxuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxyXG4gIH0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogXCIvbG9naW5cIixcclxuICB9LFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgaWYgKHRva2VuICYmIHNlc3Npb24udXNlcikge1xyXG4gICAgICAgIChzZXNzaW9uLnVzZXIgYXMgYW55KS5pZCA9IHRva2VuLnN1YjtcbiAgICAgICAgKHNlc3Npb24udXNlciBhcyBhbnkpLmVtYWlsVmVyaWZpZWQgPSB0b2tlbi5lbWFpbFZlcmlmaWVkO1xuICAgICAgICAoc2Vzc2lvbi51c2VyIGFzIGFueSkucm9sZSA9IHRva2VuLnJvbGU7XG4gICAgICAgIChzZXNzaW9uLnVzZXIgYXMgYW55KS5pc0FjdGl2ZSA9IHRva2VuLmlzQWN0aXZlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5lbWFpbFZlcmlmaWVkID0gKHVzZXIgYXMgYW55KS5lbWFpbFZlcmlmaWVkO1xuICAgICAgICB0b2tlbi5yb2xlID0gKHVzZXIgYXMgYW55KS5yb2xlO1xuICAgICAgICB0b2tlbi5pc0FjdGl2ZSA9ICh1c2VyIGFzIGFueSkuaXNBY3RpdmU7XG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnN1Yikge1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGlkOiB0b2tlbi5zdWIgfSxcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IHRydWUsXG4gICAgICAgICAgICByb2xlOiB0cnVlLFxuICAgICAgICAgICAgaXNBY3RpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgdG9rZW4uZW1haWxWZXJpZmllZCA9IGN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQ7XG4gICAgICAgICAgdG9rZW4ucm9sZSA9IGN1cnJlbnRVc2VyLnJvbGU7XG4gICAgICAgICAgdG9rZW4uaXNBY3RpdmUgPSBjdXJyZW50VXNlci5pc0FjdGl2ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cbiAgfSxcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxufTtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUFkYXB0ZXIiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsIkVycm9yIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsImlzQWN0aXZlIiwiaWQiLCJpbWFnZSIsInJvbGUiLCJlbWFpbFZlcmlmaWVkIiwiaXNQYXNzd29yZENvcnJlY3QiLCJjb21wYXJlIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJ0b2tlbiIsInN1YiIsImp3dCIsImN1cnJlbnRVc2VyIiwic2VsZWN0Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst prisma = globalThis.prisma ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) globalThis.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsd0JBQXdCO0lBQzVCLE9BQU8sSUFBSUQsd0RBQVlBO0FBQ3pCO0FBTUEsTUFBTUUsU0FBU0MsV0FBV0QsTUFBTSxJQUFJRDtBQUVwQyxpRUFBZUMsTUFBTUEsRUFBQztBQUV0QixJQUFJRSxJQUFxQyxFQUFFRCxXQUFXRCxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JtLWZyb250ZW5kLy4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IHByaXNtYUNsaWVudFNpbmdsZXRvbiA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFByaXNtYUNsaWVudCgpO1xyXG59O1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIHZhciBwcmlzbWE6IHVuZGVmaW5lZCB8IFJldHVyblR5cGU8dHlwZW9mIHByaXNtYUNsaWVudFNpbmdsZXRvbj47XHJcbn1cclxuXHJcbmNvbnN0IHByaXNtYSA9IGdsb2JhbFRoaXMucHJpc21hID8/IHByaXNtYUNsaWVudFNpbmdsZXRvbigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBwcmlzbWE7XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWFDbGllbnRTaW5nbGV0b24iLCJwcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/@auth","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpipelines%2Froute&page=%2Fapi%2Fpipelines%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpipelines%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();