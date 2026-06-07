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
exports.id = "app/api/auth/request-password-reset/route";
exports.ids = ["app/api/auth/request-password-reset/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

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

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Frequest-password-reset%2Froute&page=%2Fapi%2Fauth%2Frequest-password-reset%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Frequest-password-reset%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Frequest-password-reset%2Froute&page=%2Fapi%2Fauth%2Frequest-password-reset%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Frequest-password-reset%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_user_Desktop_CRM_project_frontend_src_app_api_auth_request_password_reset_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/request-password-reset/route.ts */ \"(rsc)/./src/app/api/auth/request-password-reset/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/request-password-reset/route\",\n        pathname: \"/api/auth/request-password-reset\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/request-password-reset/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\user\\\\Desktop\\\\CRM-project\\\\frontend\\\\src\\\\app\\\\api\\\\auth\\\\request-password-reset\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_user_Desktop_CRM_project_frontend_src_app_api_auth_request_password_reset_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/request-password-reset/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGcmVxdWVzdC1wYXNzd29yZC1yZXNldCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYXV0aCUyRnJlcXVlc3QtcGFzc3dvcmQtcmVzZXQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhdXRoJTJGcmVxdWVzdC1wYXNzd29yZC1yZXNldCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN1c2VyJTVDRGVza3RvcCU1Q0NSTS1wcm9qZWN0JTVDZnJvbnRlbmQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3VzZXIlNUNEZXNrdG9wJTVDQ1JNLXByb2plY3QlNUNmcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDc0Q7QUFDbkk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcm0tZnJvbnRlbmQvPzc5MzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcdXNlclxcXFxEZXNrdG9wXFxcXENSTS1wcm9qZWN0XFxcXGZyb250ZW5kXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxccmVxdWVzdC1wYXNzd29yZC1yZXNldFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9yZXF1ZXN0LXBhc3N3b3JkLXJlc2V0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9yZXF1ZXN0LXBhc3N3b3JkLXJlc2V0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL3JlcXVlc3QtcGFzc3dvcmQtcmVzZXQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERlc2t0b3BcXFxcQ1JNLXByb2plY3RcXFxcZnJvbnRlbmRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxyZXF1ZXN0LXBhc3N3b3JkLXJlc2V0XFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL3JlcXVlc3QtcGFzc3dvcmQtcmVzZXQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Frequest-password-reset%2Froute&page=%2Fapi%2Fauth%2Frequest-password-reset%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Frequest-password-reset%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/request-password-reset/route.ts":
/*!**********************************************************!*\
  !*** ./src/app/api/auth/request-password-reset/route.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n\n\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_2__.createTransport({\n    service: \"gmail\",\n    auth: {\n        user: process.env.EMAIL_USER,\n        pass: process.env.EMAIL_PASS\n    }\n});\nasync function POST(req) {\n    try {\n        const { email } = await req.json();\n        if (typeof email !== \"string\" || !email.trim()) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Email required\", {\n                status: 400\n            });\n        }\n        const normalizedEmail = email.trim().toLowerCase();\n        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                email: normalizedEmail\n            }\n        });\n        if (!user) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"User not found\", {\n                status: 404\n            });\n        }\n        const code = Math.floor(100000 + Math.random() * 900000).toString();\n        const expires = new Date(Date.now() + 10 * 60 * 1000);\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.update({\n            where: {\n                email: normalizedEmail\n            },\n            data: {\n                verificationCode: code,\n                verificationExpires: expires\n            }\n        });\n        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {\n            await transporter.sendMail({\n                from: `\"Velocity CRM\" <${process.env.EMAIL_USER}>`,\n                to: normalizedEmail,\n                subject: \"Password reset code for Velocity CRM\",\n                html: `\n          <div style=\"font-family: sans-serif; padding: 20px; background: #050a18; color: white; border-radius: 20px;\">\n            <h1 style=\"color: #4cd7f6;\">Password reset</h1>\n            <p>Use this code to set a new password:</p>\n            <div style=\"font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #8b5cf6; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 10px; display: inline-block;\">\n              ${code}\n            </div>\n            <p style=\"color: #aaa; margin-top: 20px;\">The code is valid for 10 minutes.</p>\n          </div>\n        `\n            });\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                success: true,\n                method: \"email\"\n            });\n        }\n        console.log(\"-----------------------------------------\");\n        console.log(`PASSWORD RESET CODE for ${normalizedEmail} -> ${code}`);\n        console.log(\"-----------------------------------------\");\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            success: true,\n            method: \"console\"\n        });\n    } catch (error) {\n        console.error(\"PASSWORD RESET REQUEST ERROR:\", error);\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(error.message, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL3JlcXVlc3QtcGFzc3dvcmQtcmVzZXQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrQztBQUNTO0FBQ1A7QUFFcEMsTUFBTUcsY0FBY0QsdURBQTBCLENBQUM7SUFDN0NHLFNBQVM7SUFDVEMsTUFBTTtRQUNKQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDNUJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csVUFBVTtJQUM5QjtBQUNGO0FBRU8sZUFBZUMsS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJO1FBRWhDLElBQUksT0FBT0QsVUFBVSxZQUFZLENBQUNBLE1BQU1FLElBQUksSUFBSTtZQUM5QyxPQUFPLElBQUloQixxREFBWUEsQ0FBQyxrQkFBa0I7Z0JBQUVpQixRQUFRO1lBQUk7UUFDMUQ7UUFFQSxNQUFNQyxrQkFBa0JKLE1BQU1FLElBQUksR0FBR0csV0FBVztRQUNoRCxNQUFNYixPQUFPLE1BQU1QLG1EQUFNQSxDQUFDTyxJQUFJLENBQUNjLFVBQVUsQ0FBQztZQUN4Q0MsT0FBTztnQkFBRVAsT0FBT0k7WUFBZ0I7UUFDbEM7UUFFQSxJQUFJLENBQUNaLE1BQU07WUFDVCxPQUFPLElBQUlOLHFEQUFZQSxDQUFDLGtCQUFrQjtnQkFBRWlCLFFBQVE7WUFBSTtRQUMxRDtRQUVBLE1BQU1LLE9BQU9DLEtBQUtDLEtBQUssQ0FBQyxTQUFTRCxLQUFLRSxNQUFNLEtBQUssUUFBUUMsUUFBUTtRQUNqRSxNQUFNQyxVQUFVLElBQUlDLEtBQUtBLEtBQUtDLEdBQUcsS0FBSyxLQUFLLEtBQUs7UUFFaEQsTUFBTTlCLG1EQUFNQSxDQUFDTyxJQUFJLENBQUN3QixNQUFNLENBQUM7WUFDdkJULE9BQU87Z0JBQUVQLE9BQU9JO1lBQWdCO1lBQ2hDYSxNQUFNO2dCQUNKQyxrQkFBa0JWO2dCQUNsQlcscUJBQXFCTjtZQUN2QjtRQUNGO1FBRUEsSUFBSXBCLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxJQUFJRixRQUFRQyxHQUFHLENBQUNHLFVBQVUsRUFBRTtZQUNwRCxNQUFNVCxZQUFZZ0MsUUFBUSxDQUFDO2dCQUN6QkMsTUFBTSxDQUFDLGdCQUFnQixFQUFFNUIsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNsRDJCLElBQUlsQjtnQkFDSm1CLFNBQVM7Z0JBQ1RDLE1BQU0sQ0FBQzs7Ozs7Y0FLRCxFQUFFaEIsS0FBSzs7OztRQUliLENBQUM7WUFDSDtZQUVBLE9BQU90QixxREFBWUEsQ0FBQ2UsSUFBSSxDQUFDO2dCQUFFd0IsU0FBUztnQkFBTUMsUUFBUTtZQUFRO1FBQzVEO1FBRUFDLFFBQVFDLEdBQUcsQ0FBQztRQUNaRCxRQUFRQyxHQUFHLENBQUMsQ0FBQyx3QkFBd0IsRUFBRXhCLGdCQUFnQixJQUFJLEVBQUVJLEtBQUssQ0FBQztRQUNuRW1CLFFBQVFDLEdBQUcsQ0FBQztRQUVaLE9BQU8xQyxxREFBWUEsQ0FBQ2UsSUFBSSxDQUFDO1lBQUV3QixTQUFTO1lBQU1DLFFBQVE7UUFBVTtJQUM5RCxFQUFFLE9BQU9HLE9BQVk7UUFDbkJGLFFBQVFFLEtBQUssQ0FBQyxpQ0FBaUNBO1FBQy9DLE9BQU8sSUFBSTNDLHFEQUFZQSxDQUFDMkMsTUFBTUMsT0FBTyxFQUFFO1lBQUUzQixRQUFRO1FBQUk7SUFDdkQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NybS1mcm9udGVuZC8uL3NyYy9hcHAvYXBpL2F1dGgvcmVxdWVzdC1wYXNzd29yZC1yZXNldC9yb3V0ZS50cz9hYjNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xuXG5jb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgc2VydmljZTogXCJnbWFpbFwiLFxuICBhdXRoOiB7XG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuRU1BSUxfVVNFUixcbiAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9QQVNTLFxuICB9LFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZW1haWwgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICBpZiAodHlwZW9mIGVtYWlsICE9PSBcInN0cmluZ1wiIHx8ICFlbWFpbC50cmltKCkpIHtcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiRW1haWwgcmVxdWlyZWRcIiwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBub3JtYWxpemVkRW1haWwgPSBlbWFpbC50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBlbWFpbDogbm9ybWFsaXplZEVtYWlsIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiVXNlciBub3QgZm91bmRcIiwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb2RlID0gTWF0aC5mbG9vcigxMDAwMDAgKyBNYXRoLnJhbmRvbSgpICogOTAwMDAwKS50b1N0cmluZygpO1xuICAgIGNvbnN0IGV4cGlyZXMgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgMTAgKiA2MCAqIDEwMDApO1xuXG4gICAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGVtYWlsOiBub3JtYWxpemVkRW1haWwgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdmVyaWZpY2F0aW9uQ29kZTogY29kZSxcbiAgICAgICAgdmVyaWZpY2F0aW9uRXhwaXJlczogZXhwaXJlcyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuRU1BSUxfVVNFUiAmJiBwcm9jZXNzLmVudi5FTUFJTF9QQVNTKSB7XG4gICAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XG4gICAgICAgIGZyb206IGBcIlZlbG9jaXR5IENSTVwiIDwke3Byb2Nlc3MuZW52LkVNQUlMX1VTRVJ9PmAsXG4gICAgICAgIHRvOiBub3JtYWxpemVkRW1haWwsXG4gICAgICAgIHN1YmplY3Q6IFwiUGFzc3dvcmQgcmVzZXQgY29kZSBmb3IgVmVsb2NpdHkgQ1JNXCIsXG4gICAgICAgIGh0bWw6IGBcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IHBhZGRpbmc6IDIwcHg7IGJhY2tncm91bmQ6ICMwNTBhMTg7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyLXJhZGl1czogMjBweDtcIj5cbiAgICAgICAgICAgIDxoMSBzdHlsZT1cImNvbG9yOiAjNGNkN2Y2O1wiPlBhc3N3b3JkIHJlc2V0PC9oMT5cbiAgICAgICAgICAgIDxwPlVzZSB0aGlzIGNvZGUgdG8gc2V0IGEgbmV3IHBhc3N3b3JkOjwvcD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDMycHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBsZXR0ZXItc3BhY2luZzogNXB4OyBjb2xvcjogIzhiNWNmNjsgcGFkZGluZzogMjBweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTsgYm9yZGVyLXJhZGl1czogMTBweDsgZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPlxuICAgICAgICAgICAgICAke2NvZGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIHN0eWxlPVwiY29sb3I6ICNhYWE7IG1hcmdpbi10b3A6IDIwcHg7XCI+VGhlIGNvZGUgaXMgdmFsaWQgZm9yIDEwIG1pbnV0ZXMuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1ldGhvZDogXCJlbWFpbFwiIH0pO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgY29uc29sZS5sb2coYFBBU1NXT1JEIFJFU0VUIENPREUgZm9yICR7bm9ybWFsaXplZEVtYWlsfSAtPiAke2NvZGV9YCk7XG4gICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1ldGhvZDogXCJjb25zb2xlXCIgfSk7XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiUEFTU1dPUkQgUkVTRVQgUkVRVUVTVCBFUlJPUjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKGVycm9yLm1lc3NhZ2UsIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJOZXh0UmVzcG9uc2UiLCJub2RlbWFpbGVyIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZXJ2aWNlIiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiRU1BSUxfVVNFUiIsInBhc3MiLCJFTUFJTF9QQVNTIiwiUE9TVCIsInJlcSIsImVtYWlsIiwianNvbiIsInRyaW0iLCJzdGF0dXMiLCJub3JtYWxpemVkRW1haWwiLCJ0b0xvd2VyQ2FzZSIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImNvZGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImV4cGlyZXMiLCJEYXRlIiwibm93IiwidXBkYXRlIiwiZGF0YSIsInZlcmlmaWNhdGlvbkNvZGUiLCJ2ZXJpZmljYXRpb25FeHBpcmVzIiwic2VuZE1haWwiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiaHRtbCIsInN1Y2Nlc3MiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/request-password-reset/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Frequest-password-reset%2Froute&page=%2Fapi%2Fauth%2Frequest-password-reset%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Frequest-password-reset%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();