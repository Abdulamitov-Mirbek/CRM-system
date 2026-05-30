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
exports.id = "app/api/auth/send-code/route";
exports.ids = ["app/api/auth/send-code/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fsend-code%2Froute&page=%2Fapi%2Fauth%2Fsend-code%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsend-code%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fsend-code%2Froute&page=%2Fapi%2Fauth%2Fsend-code%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsend-code%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_user_Desktop_CRM_project_frontend_src_app_api_auth_send_code_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/send-code/route.ts */ \"(rsc)/./src/app/api/auth/send-code/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/send-code/route\",\n        pathname: \"/api/auth/send-code\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/send-code/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\user\\\\Desktop\\\\CRM-project\\\\frontend\\\\src\\\\app\\\\api\\\\auth\\\\send-code\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_user_Desktop_CRM_project_frontend_src_app_api_auth_send_code_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/send-code/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGc2VuZC1jb2RlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGc2VuZC1jb2RlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXV0aCUyRnNlbmQtY29kZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN1c2VyJTVDRGVza3RvcCU1Q0NSTS1wcm9qZWN0JTVDZnJvbnRlbmQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3VzZXIlNUNEZXNrdG9wJTVDQ1JNLXByb2plY3QlNUNmcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDeUM7QUFDdEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcm0tZnJvbnRlbmQvP2JmOTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcdXNlclxcXFxEZXNrdG9wXFxcXENSTS1wcm9qZWN0XFxcXGZyb250ZW5kXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcc2VuZC1jb2RlXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL3NlbmQtY29kZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvc2VuZC1jb2RlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL3NlbmQtY29kZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHVzZXJcXFxcRGVza3RvcFxcXFxDUk0tcHJvamVjdFxcXFxmcm9udGVuZFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXHNlbmQtY29kZVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9zZW5kLWNvZGUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fsend-code%2Froute&page=%2Fapi%2Fauth%2Fsend-code%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsend-code%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/send-code/route.ts":
/*!*********************************************!*\
  !*** ./src/app/api/auth/send-code/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n\n\n// Настройка отправителя (введите свои данные Gmail для реальной отправки)\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_2__.createTransport({\n    service: \"gmail\",\n    auth: {\n        user: process.env.EMAIL_USER,\n        pass: process.env.EMAIL_PASS\n    }\n});\nasync function POST(req) {\n    try {\n        const { email } = await req.json();\n        if (!email) return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Email required\", {\n            status: 400\n        });\n        // 1. Генерируем 6-значный код\n        const code = Math.floor(100000 + Math.random() * 900000).toString();\n        const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 минут жизни\n        // 2. Сохраняем в базу\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.update({\n            where: {\n                email\n            },\n            data: {\n                verificationCode: code,\n                verificationExpires: expires\n            }\n        });\n        // 3. Пытаемся отправить реально\n        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {\n            await transporter.sendMail({\n                from: '\"Velocity CRM\" <' + process.env.EMAIL_USER + \">\",\n                to: email,\n                subject: \"Код подтверждения Velocity CRM\",\n                html: `\r\n          <div style=\"font-family: sans-serif; padding: 20px; background: #050a18; color: white; border-radius: 20px;\">\r\n            <h1 style=\"color: #4cd7f6;\">Подтверждение аккаунта</h1>\r\n            <p>Ваш код безопасности для доступа к системе:</p>\r\n            <div style=\"font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #8b5cf6; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 10px; display: inline-block;\">\r\n              ${code}\r\n            </div>\r\n            <p style=\"color: #666; margin-top: 20px;\">Код действителен 10 минут. Если вы не запрашивали этот код, просто проигнорируйте письмо.</p>\r\n          </div>\r\n        `\n            });\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                success: true,\n                method: \"email\"\n            });\n        } else {\n            // Если почта не настроена - пишем в консоль разработчика\n            console.log(\"-----------------------------------------\");\n            console.log(`КРИТИЧЕСКИЙ СИГНАЛ: Код для ${email} -> ${code}`);\n            console.log(\"-----------------------------------------\");\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                success: true,\n                method: \"console\"\n            });\n        }\n    } catch (error) {\n        console.error(\"EMAIL SEND ERROR:\", error);\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(error.message, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL3NlbmQtY29kZS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtDO0FBQ1M7QUFDUDtBQUVwQywwRUFBMEU7QUFDMUUsTUFBTUcsY0FBY0QsdURBQTBCLENBQUM7SUFDN0NHLFNBQVM7SUFDVEMsTUFBTTtRQUNKQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDNUJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csVUFBVTtJQUM5QjtBQUNGO0FBRU8sZUFBZUMsS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJO1FBQ2hDLElBQUksQ0FBQ0QsT0FBTyxPQUFPLElBQUlkLHFEQUFZQSxDQUFDLGtCQUFrQjtZQUFFZ0IsUUFBUTtRQUFJO1FBRXBFLDhCQUE4QjtRQUM5QixNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUMsU0FBU0QsS0FBS0UsTUFBTSxLQUFLLFFBQVFDLFFBQVE7UUFDakUsTUFBTUMsVUFBVSxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUssS0FBSyxLQUFLLE9BQU8saUJBQWlCO1FBRXhFLHNCQUFzQjtRQUN0QixNQUFNekIsbURBQU1BLENBQUNPLElBQUksQ0FBQ21CLE1BQU0sQ0FBQztZQUN2QkMsT0FBTztnQkFBRVo7WUFBTTtZQUNmYSxNQUFNO2dCQUNKQyxrQkFBa0JYO2dCQUNsQlkscUJBQXFCUDtZQUN2QjtRQUNGO1FBRUEsZ0NBQWdDO1FBQ2hDLElBQUlmLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxJQUFJRixRQUFRQyxHQUFHLENBQUNHLFVBQVUsRUFBRTtZQUNwRCxNQUFNVCxZQUFZNEIsUUFBUSxDQUFDO2dCQUN6QkMsTUFBTSxxQkFBcUJ4QixRQUFRQyxHQUFHLENBQUNDLFVBQVUsR0FBRztnQkFDcER1QixJQUFJbEI7Z0JBQ0ptQixTQUFTO2dCQUNUQyxNQUFNLENBQUM7Ozs7O2NBS0QsRUFBRWpCLEtBQUs7Ozs7UUFJYixDQUFDO1lBQ0g7WUFDQSxPQUFPakIscURBQVlBLENBQUNlLElBQUksQ0FBQztnQkFBRW9CLFNBQVM7Z0JBQU1DLFFBQVE7WUFBUTtRQUM1RCxPQUFPO1lBQ0wseURBQXlEO1lBQ3pEQyxRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDLENBQUMsNEJBQTRCLEVBQUV4QixNQUFNLElBQUksRUFBRUcsS0FBSyxDQUFDO1lBQzdEb0IsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBT3RDLHFEQUFZQSxDQUFDZSxJQUFJLENBQUM7Z0JBQUVvQixTQUFTO2dCQUFNQyxRQUFRO1lBQVU7UUFDOUQ7SUFDRixFQUFFLE9BQU9HLE9BQVk7UUFDbkJGLFFBQVFFLEtBQUssQ0FBQyxxQkFBcUJBO1FBQ25DLE9BQU8sSUFBSXZDLHFEQUFZQSxDQUFDdUMsTUFBTUMsT0FBTyxFQUFFO1lBQUV4QixRQUFRO1FBQUk7SUFDdkQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NybS1mcm9udGVuZC8uL3NyYy9hcHAvYXBpL2F1dGgvc2VuZC1jb2RlL3JvdXRlLnRzPzY1ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xyXG5cclxuLy8g0J3QsNGB0YLRgNC+0LnQutCwINC+0YLQv9GA0LDQstC40YLQtdC70Y8gKNCy0LLQtdC00LjRgtC1INGB0LLQvtC4INC00LDQvdC90YvQtSBHbWFpbCDQtNC70Y8g0YDQtdCw0LvRjNC90L7QuSDQvtGC0L/RgNCw0LLQutC4KVxyXG5jb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuICBzZXJ2aWNlOiAnZ21haWwnLFxyXG4gIGF1dGg6IHtcclxuICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsIC8vINCS0LDRiCBlbWFpbCAo0L3QsNC/0YDQuNC80LXRgCBibmYuY3JtQGdtYWlsLmNvbSlcclxuICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX1BBU1MsIC8vINCf0LDRgNC+0LvRjCDQv9GA0LjQu9C+0LbQtdC90LjRjyAoQXBwIFBhc3N3b3JkKVxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZW1haWwgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICBpZiAoIWVtYWlsKSByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIkVtYWlsIHJlcXVpcmVkXCIsIHsgc3RhdHVzOiA0MDAgfSk7XHJcblxyXG4gICAgLy8gMS4g0JPQtdC90LXRgNC40YDRg9C10LwgNi3Qt9C90LDRh9C90YvQuSDQutC+0LRcclxuICAgIGNvbnN0IGNvZGUgPSBNYXRoLmZsb29yKDEwMDAwMCArIE1hdGgucmFuZG9tKCkgKiA5MDAwMDApLnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCBleHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIDEwICogNjAgKiAxMDAwKTsgLy8gMTAg0LzQuNC90YPRgiDQttC40LfQvdC4XHJcblxyXG4gICAgLy8gMi4g0KHQvtGF0YDQsNC90Y/QtdC8INCyINCx0LDQt9GDXHJcbiAgICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBlbWFpbCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdmVyaWZpY2F0aW9uQ29kZTogY29kZSxcclxuICAgICAgICB2ZXJpZmljYXRpb25FeHBpcmVzOiBleHBpcmVzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gMy4g0J/Ri9GC0LDQtdC80YHRjyDQvtGC0L/RgNCw0LLQuNGC0Ywg0YDQtdCw0LvRjNC90L5cclxuICAgIGlmIChwcm9jZXNzLmVudi5FTUFJTF9VU0VSICYmIHByb2Nlc3MuZW52LkVNQUlMX1BBU1MpIHtcclxuICAgICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwoe1xyXG4gICAgICAgIGZyb206ICdcIlZlbG9jaXR5IENSTVwiIDwnICsgcHJvY2Vzcy5lbnYuRU1BSUxfVVNFUiArICc+JyxcclxuICAgICAgICB0bzogZW1haWwsXHJcbiAgICAgICAgc3ViamVjdDogXCLQmtC+0LQg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8gVmVsb2NpdHkgQ1JNXCIsXHJcbiAgICAgICAgaHRtbDogYFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyBwYWRkaW5nOiAyMHB4OyBiYWNrZ3JvdW5kOiAjMDUwYTE4OyBjb2xvcjogd2hpdGU7IGJvcmRlci1yYWRpdXM6IDIwcHg7XCI+XHJcbiAgICAgICAgICAgIDxoMSBzdHlsZT1cImNvbG9yOiAjNGNkN2Y2O1wiPtCf0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1INCw0LrQutCw0YPQvdGC0LA8L2gxPlxyXG4gICAgICAgICAgICA8cD7QktCw0Ygg0LrQvtC0INCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuCDQtNC70Y8g0LTQvtGB0YLRg9C/0LAg0Log0YHQuNGB0YLQtdC80LU6PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAzMnB4OyBmb250LXdlaWdodDogYm9sZDsgbGV0dGVyLXNwYWNpbmc6IDVweDsgY29sb3I6ICM4YjVjZjY7IHBhZGRpbmc6IDIwcHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGRpc3BsYXk6IGlubGluZS1ibG9jaztcIj5cclxuICAgICAgICAgICAgICAke2NvZGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT1cImNvbG9yOiAjNjY2OyBtYXJnaW4tdG9wOiAyMHB4O1wiPtCa0L7QtCDQtNC10LnRgdGC0LLQuNGC0LXQu9C10L0gMTAg0LzQuNC90YPRgi4g0JXRgdC70Lgg0LLRiyDQvdC1INC30LDQv9GA0LDRiNC40LLQsNC70Lgg0Y3RgtC+0YIg0LrQvtC0LCDQv9GA0L7RgdGC0L4g0L/RgNC+0LjQs9C90L7RgNC40YDRg9C50YLQtSDQv9C40YHRjNC80L4uPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYCxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1ldGhvZDogJ2VtYWlsJyB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vINCV0YHQu9C4INC/0L7Rh9GC0LAg0L3QtSDQvdCw0YHRgtGA0L7QtdC90LAgLSDQv9C40YjQtdC8INCyINC60L7QvdGB0L7Qu9GMINGA0LDQt9GA0LDQsdC+0YLRh9C40LrQsFxyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhg0JrQoNCY0KLQmNCn0JXQodCa0JjQmSDQodCY0JPQndCQ0Js6INCa0L7QtCDQtNC70Y8gJHtlbWFpbH0gLT4gJHtjb2RlfWApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBtZXRob2Q6ICdjb25zb2xlJyB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRU1BSUwgU0VORCBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoZXJyb3IubWVzc2FnZSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsIk5leHRSZXNwb25zZSIsIm5vZGVtYWlsZXIiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInNlcnZpY2UiLCJhdXRoIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJFTUFJTF9VU0VSIiwicGFzcyIsIkVNQUlMX1BBU1MiLCJQT1NUIiwicmVxIiwiZW1haWwiLCJqc29uIiwic3RhdHVzIiwiY29kZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiZXhwaXJlcyIsIkRhdGUiLCJub3ciLCJ1cGRhdGUiLCJ3aGVyZSIsImRhdGEiLCJ2ZXJpZmljYXRpb25Db2RlIiwidmVyaWZpY2F0aW9uRXhwaXJlcyIsInNlbmRNYWlsIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJzdWNjZXNzIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/send-code/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fsend-code%2Froute&page=%2Fapi%2Fauth%2Fsend-code%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsend-code%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CCRM-project%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();