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
exports.id = "app/api/contacts/[id]/route";
exports.ids = ["app/api/contacts/[id]/route"];
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

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontacts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fcontacts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontacts%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontacts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fcontacts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontacts%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_user_Desktop_CRM_project_frontend_src_app_api_contacts_id_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/contacts/[id]/route.ts */ \"(rsc)/./src/app/api/contacts/[id]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/contacts/[id]/route\",\n        pathname: \"/api/contacts/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/contacts/[id]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\user\\\\Desktop\\\\CRM-project\\\\frontend\\\\src\\\\app\\\\api\\\\contacts\\\\[id]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_user_Desktop_CRM_project_frontend_src_app_api_contacts_id_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/contacts/[id]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb250YWN0cyUyRiU1QmlkJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb250YWN0cyUyRiU1QmlkJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udGFjdHMlMkYlNUJpZCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN1c2VyJTVDRGVza3RvcCU1Q0NSTS1wcm9qZWN0JTVDZnJvbnRlbmQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3VzZXIlNUNEZXNrdG9wJTVDQ1JNLXByb2plY3QlNUNmcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDd0M7QUFDckg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcm0tZnJvbnRlbmQvPzBjZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcdXNlclxcXFxEZXNrdG9wXFxcXENSTS1wcm9qZWN0XFxcXGZyb250ZW5kXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGNvbnRhY3RzXFxcXFtpZF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NvbnRhY3RzL1tpZF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jb250YWN0cy9baWRdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jb250YWN0cy9baWRdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcdXNlclxcXFxEZXNrdG9wXFxcXENSTS1wcm9qZWN0XFxcXGZyb250ZW5kXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGNvbnRhY3RzXFxcXFtpZF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2NvbnRhY3RzL1tpZF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontacts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fcontacts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontacts%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/contacts/[id]/route.ts":
/*!********************************************!*\
  !*** ./src/app/api/contacts/[id]/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\n\n\nasync function GET(_req, { params }) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session) return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Unauthorized\", {\n            status: 401\n        });\n        const { id } = params;\n        const contact = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contact.findUnique({\n            where: {\n                id\n            },\n            include: {\n                reviews: true,\n                deals: true,\n                reservations: true\n            }\n        });\n        if (!contact) return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Not Found\", {\n            status: 404\n        });\n        if (contact.userId !== session.user.id) return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Forbidden\", {\n            status: 403\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(contact);\n    } catch (error) {\n        console.error(\"GET CONTACT BY ID ERROR:\", error);\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(error.message || \"Internal Server Error\", {\n            status: 500\n        });\n    }\n}\nasync function PUT(req, { params }) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    if (!session) return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Unauthorized\", {\n        status: 401\n    });\n    try {\n        const { id } = params;\n        const data = await req.json();\n        const existing = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contact.findUnique({\n            where: {\n                id\n            }\n        });\n        if (!existing) return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Not Found\", {\n            status: 404\n        });\n        if (existing.userId !== session.user.id) return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Forbidden\", {\n            status: 403\n        });\n        const updated = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contact.update({\n            where: {\n                id\n            },\n            data: {\n                firstName: data.firstName,\n                lastName: data.lastName,\n                email: data.email,\n                phone: data.phone,\n                company: data.company,\n                birthday: data.birthday ? new Date(data.birthday) : undefined,\n                gender: data.gender,\n                address: data.address,\n                status: data.status\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(updated);\n    } catch (error) {\n        console.error(\"UPDATE CONTACT ERROR:\", error);\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(error.message || \"Internal Server Error\", {\n            status: 500\n        });\n    }\n}\nasync function DELETE(_req, { params }) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    if (!session) return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Unauthorized\", {\n        status: 401\n    });\n    try {\n        const { id } = params;\n        const existing = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contact.findUnique({\n            where: {\n                id\n            }\n        });\n        if (!existing) return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Not Found\", {\n            status: 404\n        });\n        if (existing.userId !== session.user.id) return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Forbidden\", {\n            status: 403\n        });\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contact.delete({\n            where: {\n                id\n            }\n        });\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(null, {\n            status: 204\n        });\n    } catch (error) {\n        console.error(\"DELETE CONTACT ERROR:\", error);\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(error.message || \"Internal Server Error\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb250YWN0cy9baWRdL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ1M7QUFDRTtBQUNKO0FBRWxDLGVBQWVJLElBQ3BCQyxJQUFhLEVBQ2IsRUFBRUMsTUFBTSxFQUE4QjtJQUV0QyxJQUFJO1FBQ0YsTUFBTUMsVUFBVSxNQUFNTCwyREFBZ0JBLENBQUNDLGtEQUFXQTtRQUNsRCxJQUFJLENBQUNJLFNBQVMsT0FBTyxJQUFJTixxREFBWUEsQ0FBQyxnQkFBZ0I7WUFBRU8sUUFBUTtRQUFJO1FBRXBFLE1BQU0sRUFBRUMsRUFBRSxFQUFFLEdBQUdIO1FBQ2YsTUFBTUksVUFBVSxNQUFNVixtREFBTUEsQ0FBQ1UsT0FBTyxDQUFDQyxVQUFVLENBQUM7WUFDOUNDLE9BQU87Z0JBQUVIO1lBQUc7WUFDWkksU0FBUztnQkFBRUMsU0FBUztnQkFBTUMsT0FBTztnQkFBTUMsY0FBYztZQUFLO1FBQzVEO1FBRUEsSUFBSSxDQUFDTixTQUFTLE9BQU8sSUFBSVQscURBQVlBLENBQUMsYUFBYTtZQUFFTyxRQUFRO1FBQUk7UUFDakUsSUFBSUUsUUFBUU8sTUFBTSxLQUFLLFFBQVNDLElBQUksQ0FBU1QsRUFBRSxFQUM3QyxPQUFPLElBQUlSLHFEQUFZQSxDQUFDLGFBQWE7WUFBRU8sUUFBUTtRQUFJO1FBRXJELE9BQU9QLHFEQUFZQSxDQUFDa0IsSUFBSSxDQUFDVDtJQUMzQixFQUFFLE9BQU9VLE9BQVk7UUFDbkJDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzFDLE9BQU8sSUFBSW5CLHFEQUFZQSxDQUFDbUIsTUFBTUUsT0FBTyxJQUFJLHlCQUF5QjtZQUNoRWQsUUFBUTtRQUNWO0lBQ0Y7QUFDRjtBQUVPLGVBQWVlLElBQ3BCQyxHQUFZLEVBQ1osRUFBRWxCLE1BQU0sRUFBOEI7SUFFdEMsTUFBTUMsVUFBVSxNQUFNTCwyREFBZ0JBLENBQUNDLGtEQUFXQTtJQUNsRCxJQUFJLENBQUNJLFNBQVMsT0FBTyxJQUFJTixxREFBWUEsQ0FBQyxnQkFBZ0I7UUFBRU8sUUFBUTtJQUFJO0lBRXBFLElBQUk7UUFDRixNQUFNLEVBQUVDLEVBQUUsRUFBRSxHQUFHSDtRQUNmLE1BQU1tQixPQUFPLE1BQU1ELElBQUlMLElBQUk7UUFFM0IsTUFBTU8sV0FBVyxNQUFNMUIsbURBQU1BLENBQUNVLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDO1lBQUVDLE9BQU87Z0JBQUVIO1lBQUc7UUFBRTtRQUNqRSxJQUFJLENBQUNpQixVQUFVLE9BQU8sSUFBSXpCLHFEQUFZQSxDQUFDLGFBQWE7WUFBRU8sUUFBUTtRQUFJO1FBQ2xFLElBQUlrQixTQUFTVCxNQUFNLEtBQUssUUFBU0MsSUFBSSxDQUFTVCxFQUFFLEVBQzlDLE9BQU8sSUFBSVIscURBQVlBLENBQUMsYUFBYTtZQUFFTyxRQUFRO1FBQUk7UUFFckQsTUFBTW1CLFVBQVUsTUFBTTNCLG1EQUFNQSxDQUFDVSxPQUFPLENBQUNrQixNQUFNLENBQUM7WUFDMUNoQixPQUFPO2dCQUFFSDtZQUFHO1lBQ1pnQixNQUFNO2dCQUNKSSxXQUFXSixLQUFLSSxTQUFTO2dCQUN6QkMsVUFBVUwsS0FBS0ssUUFBUTtnQkFDdkJDLE9BQU9OLEtBQUtNLEtBQUs7Z0JBQ2pCQyxPQUFPUCxLQUFLTyxLQUFLO2dCQUNqQkMsU0FBU1IsS0FBS1EsT0FBTztnQkFDckJDLFVBQVVULEtBQUtTLFFBQVEsR0FBRyxJQUFJQyxLQUFLVixLQUFLUyxRQUFRLElBQUlFO2dCQUNwREMsUUFBUVosS0FBS1ksTUFBTTtnQkFDbkJDLFNBQVNiLEtBQUthLE9BQU87Z0JBQ3JCOUIsUUFBUWlCLEtBQUtqQixNQUFNO1lBQ3JCO1FBQ0Y7UUFFQSxPQUFPUCxxREFBWUEsQ0FBQ2tCLElBQUksQ0FBQ1E7SUFDM0IsRUFBRSxPQUFPUCxPQUFZO1FBQ25CQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtRQUN2QyxPQUFPLElBQUluQixxREFBWUEsQ0FBQ21CLE1BQU1FLE9BQU8sSUFBSSx5QkFBeUI7WUFDaEVkLFFBQVE7UUFDVjtJQUNGO0FBQ0Y7QUFFTyxlQUFlK0IsT0FDcEJsQyxJQUFhLEVBQ2IsRUFBRUMsTUFBTSxFQUE4QjtJQUV0QyxNQUFNQyxVQUFVLE1BQU1MLDJEQUFnQkEsQ0FBQ0Msa0RBQVdBO0lBQ2xELElBQUksQ0FBQ0ksU0FBUyxPQUFPLElBQUlOLHFEQUFZQSxDQUFDLGdCQUFnQjtRQUFFTyxRQUFRO0lBQUk7SUFFcEUsSUFBSTtRQUNGLE1BQU0sRUFBRUMsRUFBRSxFQUFFLEdBQUdIO1FBQ2YsTUFBTW9CLFdBQVcsTUFBTTFCLG1EQUFNQSxDQUFDVSxPQUFPLENBQUNDLFVBQVUsQ0FBQztZQUFFQyxPQUFPO2dCQUFFSDtZQUFHO1FBQUU7UUFDakUsSUFBSSxDQUFDaUIsVUFBVSxPQUFPLElBQUl6QixxREFBWUEsQ0FBQyxhQUFhO1lBQUVPLFFBQVE7UUFBSTtRQUNsRSxJQUFJa0IsU0FBU1QsTUFBTSxLQUFLLFFBQVNDLElBQUksQ0FBU1QsRUFBRSxFQUM5QyxPQUFPLElBQUlSLHFEQUFZQSxDQUFDLGFBQWE7WUFBRU8sUUFBUTtRQUFJO1FBRXJELE1BQU1SLG1EQUFNQSxDQUFDVSxPQUFPLENBQUM4QixNQUFNLENBQUM7WUFBRTVCLE9BQU87Z0JBQUVIO1lBQUc7UUFBRTtRQUM1QyxPQUFPLElBQUlSLHFEQUFZQSxDQUFDLE1BQU07WUFBRU8sUUFBUTtRQUFJO0lBQzlDLEVBQUUsT0FBT1ksT0FBWTtRQUNuQkMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7UUFDdkMsT0FBTyxJQUFJbkIscURBQVlBLENBQUNtQixNQUFNRSxPQUFPLElBQUkseUJBQXlCO1lBQ2hFZCxRQUFRO1FBQ1Y7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JtLWZyb250ZW5kLy4vc3JjL2FwcC9hcGkvY29udGFjdHMvW2lkXS9yb3V0ZS50cz85MGIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChcclxuICBfcmVxOiBSZXF1ZXN0LFxyXG4gIHsgcGFyYW1zIH06IHsgcGFyYW1zOiB7IGlkOiBzdHJpbmcgfSB9LFxyXG4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gICAgaWYgKCFzZXNzaW9uKSByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIlVuYXV0aG9yaXplZFwiLCB7IHN0YXR1czogNDAxIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBhd2FpdCBwcmlzbWEuY29udGFjdC5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgaW5jbHVkZTogeyByZXZpZXdzOiB0cnVlLCBkZWFsczogdHJ1ZSwgcmVzZXJ2YXRpb25zOiB0cnVlIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWNvbnRhY3QpIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiTm90IEZvdW5kXCIsIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgICBpZiAoY29udGFjdC51c2VySWQgIT09IChzZXNzaW9uLnVzZXIgYXMgYW55KS5pZClcclxuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJGb3JiaWRkZW5cIiwgeyBzdGF0dXM6IDQwMyB9KTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oY29udGFjdCk7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkdFVCBDT05UQUNUIEJZIElEIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShlcnJvci5tZXNzYWdlIHx8IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIsIHtcclxuICAgICAgc3RhdHVzOiA1MDAsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQoXHJcbiAgcmVxOiBSZXF1ZXN0LFxyXG4gIHsgcGFyYW1zIH06IHsgcGFyYW1zOiB7IGlkOiBzdHJpbmcgfSB9LFxyXG4pIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XHJcbiAgaWYgKCFzZXNzaW9uKSByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIlVuYXV0aG9yaXplZFwiLCB7IHN0YXR1czogNDAxIH0pO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBwcmlzbWEuY29udGFjdC5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIGlmICghZXhpc3RpbmcpIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiTm90IEZvdW5kXCIsIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgICBpZiAoZXhpc3RpbmcudXNlcklkICE9PSAoc2Vzc2lvbi51c2VyIGFzIGFueSkuaWQpXHJcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiRm9yYmlkZGVuXCIsIHsgc3RhdHVzOiA0MDMgfSk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlZCA9IGF3YWl0IHByaXNtYS5jb250YWN0LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBmaXJzdE5hbWU6IGRhdGEuZmlyc3ROYW1lLFxyXG4gICAgICAgIGxhc3ROYW1lOiBkYXRhLmxhc3ROYW1lLFxyXG4gICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgICAgIHBob25lOiBkYXRhLnBob25lLFxyXG4gICAgICAgIGNvbXBhbnk6IGRhdGEuY29tcGFueSxcclxuICAgICAgICBiaXJ0aGRheTogZGF0YS5iaXJ0aGRheSA/IG5ldyBEYXRlKGRhdGEuYmlydGhkYXkpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIGdlbmRlcjogZGF0YS5nZW5kZXIsXHJcbiAgICAgICAgYWRkcmVzczogZGF0YS5hZGRyZXNzLFxyXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odXBkYXRlZCk7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBDT05UQUNUIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShlcnJvci5tZXNzYWdlIHx8IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIsIHtcclxuICAgICAgc3RhdHVzOiA1MDAsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUoXHJcbiAgX3JlcTogUmVxdWVzdCxcclxuICB7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBpZDogc3RyaW5nIH0gfSxcclxuKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gIGlmICghc2Vzc2lvbikgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJVbmF1dGhvcml6ZWRcIiwgeyBzdGF0dXM6IDQwMSB9KTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcclxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmNvbnRhY3QuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICBpZiAoIWV4aXN0aW5nKSByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIk5vdCBGb3VuZFwiLCB7IHN0YXR1czogNDA0IH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nLnVzZXJJZCAhPT0gKHNlc3Npb24udXNlciBhcyBhbnkpLmlkKVxyXG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIkZvcmJpZGRlblwiLCB7IHN0YXR1czogNDAzIH0pO1xyXG5cclxuICAgIGF3YWl0IHByaXNtYS5jb250YWN0LmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShudWxsLCB7IHN0YXR1czogMjA0IH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJERUxFVEUgQ09OVEFDVCBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoZXJyb3IubWVzc2FnZSB8fCBcIkludGVybmFsIFNlcnZlciBFcnJvclwiLCB7XHJcbiAgICAgIHN0YXR1czogNTAwLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJHRVQiLCJfcmVxIiwicGFyYW1zIiwic2Vzc2lvbiIsInN0YXR1cyIsImlkIiwiY29udGFjdCIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImluY2x1ZGUiLCJyZXZpZXdzIiwiZGVhbHMiLCJyZXNlcnZhdGlvbnMiLCJ1c2VySWQiLCJ1c2VyIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJQVVQiLCJyZXEiLCJkYXRhIiwiZXhpc3RpbmciLCJ1cGRhdGVkIiwidXBkYXRlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBob25lIiwiY29tcGFueSIsImJpcnRoZGF5IiwiRGF0ZSIsInVuZGVmaW5lZCIsImdlbmRlciIsImFkZHJlc3MiLCJERUxFVEUiLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/contacts/[id]/route.ts\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/@auth","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontacts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fcontacts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontacts%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();