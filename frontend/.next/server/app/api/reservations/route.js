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
exports.id = "app/api/reservations/route";
exports.ids = ["app/api/reservations/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Freservations%2Froute&page=%2Fapi%2Freservations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freservations%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Freservations%2Froute&page=%2Fapi%2Freservations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freservations%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_user_Desktop_CRM_project_frontend_src_app_api_reservations_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/reservations/route.ts */ \"(rsc)/./src/app/api/reservations/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/reservations/route\",\n        pathname: \"/api/reservations\",\n        filename: \"route\",\n        bundlePath: \"app/api/reservations/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\user\\\\Desktop\\\\CRM-project\\\\frontend\\\\src\\\\app\\\\api\\\\reservations\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_user_Desktop_CRM_project_frontend_src_app_api_reservations_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/reservations/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyZXNlcnZhdGlvbnMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJlc2VydmF0aW9ucyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJlc2VydmF0aW9ucyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN1c2VyJTVDRGVza3RvcCU1Q0NSTS1wcm9qZWN0JTVDZnJvbnRlbmQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3VzZXIlNUNEZXNrdG9wJTVDQ1JNLXByb2plY3QlNUNmcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDc0M7QUFDbkg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcm0tZnJvbnRlbmQvPzBkNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcdXNlclxcXFxEZXNrdG9wXFxcXENSTS1wcm9qZWN0XFxcXGZyb250ZW5kXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHJlc2VydmF0aW9uc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcmVzZXJ2YXRpb25zL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcmVzZXJ2YXRpb25zXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9yZXNlcnZhdGlvbnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERlc2t0b3BcXFxcQ1JNLXByb2plY3RcXFxcZnJvbnRlbmRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccmVzZXJ2YXRpb25zXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9yZXNlcnZhdGlvbnMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Freservations%2Froute&page=%2Fapi%2Freservations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freservations%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/reservations/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/reservations/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\n\n\nasync function GET() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    if (!session) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    try {\n        const reservations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].reservation.findMany({\n            include: {\n                contact: true,\n                table: true\n            },\n            orderBy: {\n                startTime: \"desc\"\n            }\n        });\n        const mapped = reservations.map((r)=>({\n                id: r.id,\n                contactId: r.contactId,\n                contactName: `${r.contact.firstName} ${r.contact.lastName}`,\n                tableId: r.tableId,\n                tableNumber: r.table?.number,\n                guestCount: r.guestCount,\n                startTime: r.startTime,\n                endTime: r.endTime,\n                status: r.status,\n                notes: r.notes,\n                createdAt: r.createdAt\n            }));\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(mapped);\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(error.message, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    if (!session) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    try {\n        const data = await req.json();\n        const reservation = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].reservation.create({\n            data: {\n                ...data,\n                userId: session.user.id\n            },\n            include: {\n                contact: true,\n                table: true\n            }\n        });\n        const mapped = {\n            id: reservation.id,\n            contactId: reservation.contactId,\n            contactName: `${reservation.contact.firstName} ${reservation.contact.lastName}`,\n            tableId: reservation.tableId,\n            tableNumber: reservation.table?.number,\n            guestCount: reservation.guestCount,\n            startTime: reservation.startTime,\n            endTime: reservation.endTime,\n            status: reservation.status,\n            notes: reservation.notes,\n            createdAt: reservation.createdAt\n        };\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(mapped);\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(error.message, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yZXNlcnZhdGlvbnMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrQztBQUNTO0FBQ0U7QUFDSjtBQUVsQyxlQUFlSTtJQUNwQixNQUFNQyxVQUFVLE1BQU1ILDJEQUFnQkEsQ0FBQ0Msa0RBQVdBO0lBQ2xELElBQUksQ0FBQ0UsU0FBUztRQUNaLE9BQU8sSUFBSUoscURBQVlBLENBQUMsZ0JBQWdCO1lBQUVLLFFBQVE7UUFBSTtJQUN4RDtJQUVBLElBQUk7UUFDRixNQUFNQyxlQUFlLE1BQU1QLG1EQUFNQSxDQUFDUSxXQUFXLENBQUNDLFFBQVEsQ0FBQztZQUNyREMsU0FBUztnQkFDUEMsU0FBUztnQkFDVEMsT0FBTztZQUNUO1lBQ0FDLFNBQVM7Z0JBQ1BDLFdBQVc7WUFDYjtRQUNGO1FBRUEsTUFBTUMsU0FBU1IsYUFBYVMsR0FBRyxDQUFDQyxDQUFBQSxJQUFNO2dCQUNwQ0MsSUFBSUQsRUFBRUMsRUFBRTtnQkFDUkMsV0FBV0YsRUFBRUUsU0FBUztnQkFDdEJDLGFBQWEsQ0FBQyxFQUFFSCxFQUFFTixPQUFPLENBQUNVLFNBQVMsQ0FBQyxDQUFDLEVBQUVKLEVBQUVOLE9BQU8sQ0FBQ1csUUFBUSxDQUFDLENBQUM7Z0JBQzNEQyxTQUFTTixFQUFFTSxPQUFPO2dCQUNsQkMsYUFBYVAsRUFBRUwsS0FBSyxFQUFFYTtnQkFDdEJDLFlBQVlULEVBQUVTLFVBQVU7Z0JBQ3hCWixXQUFXRyxFQUFFSCxTQUFTO2dCQUN0QmEsU0FBU1YsRUFBRVUsT0FBTztnQkFDbEJyQixRQUFRVyxFQUFFWCxNQUFNO2dCQUNoQnNCLE9BQU9YLEVBQUVXLEtBQUs7Z0JBQ2RDLFdBQVdaLEVBQUVZLFNBQVM7WUFDeEI7UUFFQSxPQUFPNUIscURBQVlBLENBQUM2QixJQUFJLENBQUNmO0lBQzNCLEVBQUUsT0FBT2dCLE9BQVk7UUFDbkIsT0FBTyxJQUFJOUIscURBQVlBLENBQUM4QixNQUFNQyxPQUFPLEVBQUU7WUFBRTFCLFFBQVE7UUFBSTtJQUN2RDtBQUNGO0FBRU8sZUFBZTJCLEtBQUtDLEdBQVk7SUFDckMsTUFBTTdCLFVBQVUsTUFBTUgsMkRBQWdCQSxDQUFDQyxrREFBV0E7SUFDbEQsSUFBSSxDQUFDRSxTQUFTO1FBQ1osT0FBTyxJQUFJSixxREFBWUEsQ0FBQyxnQkFBZ0I7WUFBRUssUUFBUTtRQUFJO0lBQ3hEO0lBRUEsSUFBSTtRQUNGLE1BQU02QixPQUFPLE1BQU1ELElBQUlKLElBQUk7UUFDM0IsTUFBTXRCLGNBQWMsTUFBTVIsbURBQU1BLENBQUNRLFdBQVcsQ0FBQzRCLE1BQU0sQ0FBQztZQUNsREQsTUFBTTtnQkFDSixHQUFHQSxJQUFJO2dCQUNQRSxRQUFRLFFBQVNDLElBQUksQ0FBU3BCLEVBQUU7WUFDbEM7WUFDQVIsU0FBUztnQkFDUEMsU0FBUztnQkFDVEMsT0FBTztZQUNUO1FBQ0Y7UUFFQSxNQUFNRyxTQUFTO1lBQ2JHLElBQUlWLFlBQVlVLEVBQUU7WUFDbEJDLFdBQVdYLFlBQVlXLFNBQVM7WUFDaENDLGFBQWEsQ0FBQyxFQUFFWixZQUFZRyxPQUFPLENBQUNVLFNBQVMsQ0FBQyxDQUFDLEVBQUViLFlBQVlHLE9BQU8sQ0FBQ1csUUFBUSxDQUFDLENBQUM7WUFDL0VDLFNBQVNmLFlBQVllLE9BQU87WUFDNUJDLGFBQWFoQixZQUFZSSxLQUFLLEVBQUVhO1lBQ2hDQyxZQUFZbEIsWUFBWWtCLFVBQVU7WUFDbENaLFdBQVdOLFlBQVlNLFNBQVM7WUFDaENhLFNBQVNuQixZQUFZbUIsT0FBTztZQUM1QnJCLFFBQVFFLFlBQVlGLE1BQU07WUFDMUJzQixPQUFPcEIsWUFBWW9CLEtBQUs7WUFDeEJDLFdBQVdyQixZQUFZcUIsU0FBUztRQUNsQztRQUVBLE9BQU81QixxREFBWUEsQ0FBQzZCLElBQUksQ0FBQ2Y7SUFDM0IsRUFBRSxPQUFPZ0IsT0FBWTtRQUNuQixPQUFPLElBQUk5QixxREFBWUEsQ0FBQzhCLE1BQU1DLE9BQU8sRUFBRTtZQUFFMUIsUUFBUTtRQUFJO0lBQ3ZEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcm0tZnJvbnRlbmQvLi9zcmMvYXBwL2FwaS9yZXNlcnZhdGlvbnMvcm91dGUudHM/ZDIzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gIGlmICghc2Vzc2lvbikge1xyXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJVbmF1dGhvcml6ZWRcIiwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNlcnZhdGlvbnMgPSBhd2FpdCBwcmlzbWEucmVzZXJ2YXRpb24uZmluZE1hbnkoe1xyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgY29udGFjdDogdHJ1ZSxcclxuICAgICAgICB0YWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgb3JkZXJCeToge1xyXG4gICAgICAgIHN0YXJ0VGltZTogJ2Rlc2MnLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbWFwcGVkID0gcmVzZXJ2YXRpb25zLm1hcChyID0+ICh7XHJcbiAgICAgIGlkOiByLmlkLFxyXG4gICAgICBjb250YWN0SWQ6IHIuY29udGFjdElkLFxyXG4gICAgICBjb250YWN0TmFtZTogYCR7ci5jb250YWN0LmZpcnN0TmFtZX0gJHtyLmNvbnRhY3QubGFzdE5hbWV9YCxcclxuICAgICAgdGFibGVJZDogci50YWJsZUlkLFxyXG4gICAgICB0YWJsZU51bWJlcjogci50YWJsZT8ubnVtYmVyLFxyXG4gICAgICBndWVzdENvdW50OiByLmd1ZXN0Q291bnQsXHJcbiAgICAgIHN0YXJ0VGltZTogci5zdGFydFRpbWUsXHJcbiAgICAgIGVuZFRpbWU6IHIuZW5kVGltZSxcclxuICAgICAgc3RhdHVzOiByLnN0YXR1cyxcclxuICAgICAgbm90ZXM6IHIubm90ZXMsXHJcbiAgICAgIGNyZWF0ZWRBdDogci5jcmVhdGVkQXQsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKG1hcHBlZCk7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoZXJyb3IubWVzc2FnZSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiVW5hdXRob3JpemVkXCIsIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICBjb25zdCByZXNlcnZhdGlvbiA9IGF3YWl0IHByaXNtYS5yZXNlcnZhdGlvbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICB1c2VySWQ6IChzZXNzaW9uLnVzZXIgYXMgYW55KS5pZCxcclxuICAgICAgfSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIGNvbnRhY3Q6IHRydWUsXHJcbiAgICAgICAgdGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBtYXBwZWQgPSB7XHJcbiAgICAgIGlkOiByZXNlcnZhdGlvbi5pZCxcclxuICAgICAgY29udGFjdElkOiByZXNlcnZhdGlvbi5jb250YWN0SWQsXHJcbiAgICAgIGNvbnRhY3ROYW1lOiBgJHtyZXNlcnZhdGlvbi5jb250YWN0LmZpcnN0TmFtZX0gJHtyZXNlcnZhdGlvbi5jb250YWN0Lmxhc3ROYW1lfWAsXHJcbiAgICAgIHRhYmxlSWQ6IHJlc2VydmF0aW9uLnRhYmxlSWQsXHJcbiAgICAgIHRhYmxlTnVtYmVyOiByZXNlcnZhdGlvbi50YWJsZT8ubnVtYmVyLFxyXG4gICAgICBndWVzdENvdW50OiByZXNlcnZhdGlvbi5ndWVzdENvdW50LFxyXG4gICAgICBzdGFydFRpbWU6IHJlc2VydmF0aW9uLnN0YXJ0VGltZSxcclxuICAgICAgZW5kVGltZTogcmVzZXJ2YXRpb24uZW5kVGltZSxcclxuICAgICAgc3RhdHVzOiByZXNlcnZhdGlvbi5zdGF0dXMsXHJcbiAgICAgIG5vdGVzOiByZXNlcnZhdGlvbi5ub3RlcyxcclxuICAgICAgY3JlYXRlZEF0OiByZXNlcnZhdGlvbi5jcmVhdGVkQXQsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihtYXBwZWQpO1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKGVycm9yLm1lc3NhZ2UsIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJHRVQiLCJzZXNzaW9uIiwic3RhdHVzIiwicmVzZXJ2YXRpb25zIiwicmVzZXJ2YXRpb24iLCJmaW5kTWFueSIsImluY2x1ZGUiLCJjb250YWN0IiwidGFibGUiLCJvcmRlckJ5Iiwic3RhcnRUaW1lIiwibWFwcGVkIiwibWFwIiwiciIsImlkIiwiY29udGFjdElkIiwiY29udGFjdE5hbWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInRhYmxlSWQiLCJ0YWJsZU51bWJlciIsIm51bWJlciIsImd1ZXN0Q291bnQiLCJlbmRUaW1lIiwibm90ZXMiLCJjcmVhdGVkQXQiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwiUE9TVCIsInJlcSIsImRhdGEiLCJjcmVhdGUiLCJ1c2VySWQiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/reservations/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const user = await _prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email.trim().toLowerCase()\n                    }\n                });\n                if (!user) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                if (!user.isActive) {\n                    throw new Error(\"Account is blocked\");\n                }\n                // If it's a firebase sync, we trust it (it's called from our client after firebase auth)\n                if (credentials.password === \"FIREBASE_AUTH_EXTERNAL\") {\n                    return {\n                        id: user.id,\n                        email: user.email,\n                        name: user.name,\n                        image: user.image,\n                        role: user.role,\n                        emailVerified: user.emailVerified,\n                        isActive: user.isActive\n                    };\n                }\n                if (!user.password || user.password === \"FIREBASE_MANAGED\") {\n                    throw new Error(\"Please use Google or Firebase login\");\n                }\n                const isPasswordCorrect = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, user.password);\n                if (!isPasswordCorrect) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    image: user.image,\n                    role: user.role,\n                    emailVerified: user.emailVerified,\n                    isActive: user.isActive\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        async session ({ session, token }) {\n            if (token && session.user) {\n                session.user.id = token.sub;\n                session.user.emailVerified = token.emailVerified;\n                session.user.role = token.role;\n                session.user.isActive = token.isActive;\n            }\n            return session;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.emailVerified = user.emailVerified;\n                token.role = user.role;\n                token.isActive = user.isActive;\n            } else if (token.sub) {\n                const currentUser = await _prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.findUnique({\n                    where: {\n                        id: token.sub\n                    },\n                    select: {\n                        emailVerified: true,\n                        role: true,\n                        isActive: true\n                    }\n                });\n                if (currentUser) {\n                    token.emailVerified = currentUser.emailVerified;\n                    token.role = currentUser.role;\n                    token.isActive = currentUser.isActive;\n                }\n            }\n            return token;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTtZQUN6QyxPQUFPLElBQUlZLE1BQU1DLEdBQUcsRUFBRTtnQkFDcEIsTUFBTUUsY0FBYyxNQUFNaEMsK0NBQU1BLENBQUNZLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUMvQ0MsT0FBTzt3QkFBRUksSUFBSVcsTUFBTUMsR0FBRztvQkFBQztvQkFDdkJHLFFBQVE7d0JBQ05aLGVBQWU7d0JBQ2ZELE1BQU07d0JBQ05ILFVBQVU7b0JBQ1o7Z0JBQ0Y7Z0JBRUEsSUFBSWUsYUFBYTtvQkFDZkgsTUFBTVIsYUFBYSxHQUFHVyxZQUFZWCxhQUFhO29CQUMvQ1EsTUFBTVQsSUFBSSxHQUFHWSxZQUFZWixJQUFJO29CQUM3QlMsTUFBTVosUUFBUSxHQUFHZSxZQUFZZixRQUFRO2dCQUN2QztZQUNGO1lBQ0EsT0FBT1k7UUFDVDtJQUNGO0lBQ0FLLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUNyQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JtLWZyb250ZW5kLy4vc3JjL2xpYi9hdXRoLnRzPzY2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAYXV0aC9wcmlzbWEtYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xyXG5cclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi9wcmlzbWFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xyXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSBhcyBhbnksXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgbmFtZTogXCJjcmVkZW50aWFsc1wiLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiB9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcclxuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNyZWRlbnRpYWxzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjcmVkZW50aWFsc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdXNlci5pc0FjdGl2ZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY291bnQgaXMgYmxvY2tlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0J3MgYSBmaXJlYmFzZSBzeW5jLCB3ZSB0cnVzdCBpdCAoaXQncyBjYWxsZWQgZnJvbSBvdXIgY2xpZW50IGFmdGVyIGZpcmViYXNlIGF1dGgpXG4gICAgICAgIGlmIChjcmVkZW50aWFscy5wYXNzd29yZCA9PT0gJ0ZJUkVCQVNFX0FVVEhfRVhURVJOQUwnKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICBpbWFnZTogdXNlci5pbWFnZSxcbiAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IHVzZXIuZW1haWxWZXJpZmllZCxcbiAgICAgICAgICAgIGlzQWN0aXZlOiB1c2VyLmlzQWN0aXZlLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxyXG4gICAgICAgIGlmICghdXNlci5wYXNzd29yZCB8fCB1c2VyLnBhc3N3b3JkID09PSAnRklSRUJBU0VfTUFOQUdFRCcpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2UgR29vZ2xlIG9yIEZpcmViYXNlIGxvZ2luXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXNQYXNzd29yZENvcnJlY3QgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcclxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgdXNlci5wYXNzd29yZFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICghaXNQYXNzd29yZENvcnJlY3QpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY3JlZGVudGlhbHNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgaW1hZ2U6IHVzZXIuaW1hZ2UsXG4gICAgICAgICAgcm9sZTogdXNlci5yb2xlLFxuICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IHVzZXIuZW1haWxWZXJpZmllZCxcbiAgICAgICAgICBpc0FjdGl2ZTogdXNlci5pc0FjdGl2ZSxcbiAgICAgICAgfTtcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHNlc3Npb246IHtcclxuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxyXG4gIH0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogXCIvbG9naW5cIixcclxuICB9LFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgaWYgKHRva2VuICYmIHNlc3Npb24udXNlcikge1xyXG4gICAgICAgIChzZXNzaW9uLnVzZXIgYXMgYW55KS5pZCA9IHRva2VuLnN1YjtcbiAgICAgICAgKHNlc3Npb24udXNlciBhcyBhbnkpLmVtYWlsVmVyaWZpZWQgPSB0b2tlbi5lbWFpbFZlcmlmaWVkO1xuICAgICAgICAoc2Vzc2lvbi51c2VyIGFzIGFueSkucm9sZSA9IHRva2VuLnJvbGU7XG4gICAgICAgIChzZXNzaW9uLnVzZXIgYXMgYW55KS5pc0FjdGl2ZSA9IHRva2VuLmlzQWN0aXZlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5lbWFpbFZlcmlmaWVkID0gKHVzZXIgYXMgYW55KS5lbWFpbFZlcmlmaWVkO1xuICAgICAgICB0b2tlbi5yb2xlID0gKHVzZXIgYXMgYW55KS5yb2xlO1xuICAgICAgICB0b2tlbi5pc0FjdGl2ZSA9ICh1c2VyIGFzIGFueSkuaXNBY3RpdmU7XG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnN1Yikge1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGlkOiB0b2tlbi5zdWIgfSxcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IHRydWUsXG4gICAgICAgICAgICByb2xlOiB0cnVlLFxuICAgICAgICAgICAgaXNBY3RpdmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgdG9rZW4uZW1haWxWZXJpZmllZCA9IGN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQ7XG4gICAgICAgICAgdG9rZW4ucm9sZSA9IGN1cnJlbnRVc2VyLnJvbGU7XG4gICAgICAgICAgdG9rZW4uaXNBY3RpdmUgPSBjdXJyZW50VXNlci5pc0FjdGl2ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cbiAgfSxcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxufTtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUFkYXB0ZXIiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsIkVycm9yIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsImlzQWN0aXZlIiwiaWQiLCJpbWFnZSIsInJvbGUiLCJlbWFpbFZlcmlmaWVkIiwiaXNQYXNzd29yZENvcnJlY3QiLCJjb21wYXJlIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJ0b2tlbiIsInN1YiIsImp3dCIsImN1cnJlbnRVc2VyIiwic2VsZWN0Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/@auth","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Freservations%2Froute&page=%2Fapi%2Freservations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freservations%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();