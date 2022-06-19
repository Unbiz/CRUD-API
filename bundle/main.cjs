/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uuid/dist/esm-node/regex.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/regex.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://crud-api/./node_modules/uuid/dist/esm-node/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/rng.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/rng.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n\nconst rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate\n\nlet poolPtr = rnds8Pool.length;\nfunction rng() {\n  if (poolPtr > rnds8Pool.length - 16) {\n    crypto__WEBPACK_IMPORTED_MODULE_0___default().randomFillSync(rnds8Pool);\n    poolPtr = 0;\n  }\n\n  return rnds8Pool.slice(poolPtr, poolPtr += 16);\n}\n\n//# sourceURL=webpack://crud-api/./node_modules/uuid/dist/esm-node/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/stringify.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/stringify.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-node/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://crud-api/./node_modules/uuid/dist/esm-node/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v4.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v4.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-node/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-node/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://crud-api/./node_modules/uuid/dist/esm-node/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/validate.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/validate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-node/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://crud-api/./node_modules/uuid/dist/esm-node/validate.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/version.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/version.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-node/validate.js\");\n\n\nfunction version(uuid) {\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Invalid UUID');\n  }\n\n  return parseInt(uuid.substr(14, 1), 16);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (version);\n\n//# sourceURL=webpack://crud-api/./node_modules/uuid/dist/esm-node/version.js?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var _routes_deleteUser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/deleteUser.js */ \"./dist/routes/deleteUser.js\");\n/* harmony import */ var _routes_get_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/get.js */ \"./dist/routes/get.js\");\n/* harmony import */ var _routes_non_exist_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/non-exist.js */ \"./dist/routes/non-exist.js\");\n/* harmony import */ var _routes_postUser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/postUser.js */ \"./dist/routes/postUser.js\");\n/* harmony import */ var _routes_putUser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/putUser.js */ \"./dist/routes/putUser.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils.js */ \"./dist/utils.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst server = http__WEBPACK_IMPORTED_MODULE_0__.createServer((req, res) => {\r\n    try {\r\n        switch (req.method) {\r\n            case 'GET':\r\n                (0,_routes_get_js__WEBPACK_IMPORTED_MODULE_2__.get)(req, res);\r\n                break;\r\n            case 'POST':\r\n                (0,_routes_postUser_js__WEBPACK_IMPORTED_MODULE_4__.postUser)(req, res);\r\n                break;\r\n            case 'PUT':\r\n                (0,_routes_putUser_js__WEBPACK_IMPORTED_MODULE_5__.putUser)(req, res);\r\n                break;\r\n            case 'DELETE':\r\n                (0,_routes_deleteUser_js__WEBPACK_IMPORTED_MODULE_1__.deleteUser)(req, res);\r\n                break;\r\n            default:\r\n                (0,_routes_non_exist_js__WEBPACK_IMPORTED_MODULE_3__.nonExist)(req, res);\r\n                break;\r\n        }\r\n    }\r\n    catch (_a) {\r\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.sendServerErrorResponse)(res);\r\n    }\r\n})\r\n    .listen(8080);\r\nserver.on('error', (err) => {\r\n    console.error(err);\r\n});\r\nconsole.log('Server running at http://localhost:8080/');\r\n\n\n//# sourceURL=webpack://crud-api/./dist/index.js?");

/***/ }),

/***/ "./dist/routes/deleteUser.js":
/*!***********************************!*\
  !*** ./dist/routes/deleteUser.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteUser\": () => (/* binding */ deleteUser)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ \"./dist/utils.js\");\n/* harmony import */ var _users_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../users.js */ \"./dist/users.js\");\n/* harmony import */ var _non_exist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./non-exist.js */ \"./dist/routes/non-exist.js\");\n\r\n\r\n\r\nconst deleteUser = (req, res) => {\r\n    var _a;\r\n    if ((_a = req.url) === null || _a === void 0 ? void 0 : _a.startsWith('/api/users/')) {\r\n        const userId = req.url.split('/')[3] || '';\r\n        const isValidUserId = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.uuidValidateV4)(userId);\r\n        if (isValidUserId) {\r\n            if (_users_js__WEBPACK_IMPORTED_MODULE_1__.isUserExist(userId)) {\r\n                _users_js__WEBPACK_IMPORTED_MODULE_1__.remove(userId);\r\n                res.writeHead(204, { 'Content-Type': 'application/json' });\r\n                res.end('User deleted');\r\n            }\r\n            else {\r\n                res.writeHead(404, { 'Content-Type': 'text/plain' });\r\n                res.end('User not found');\r\n            }\r\n        }\r\n        else {\r\n            res.writeHead(400, { 'Content-Type': 'text/plain' });\r\n            res.end('User ID not valid');\r\n        }\r\n    }\r\n    else {\r\n        (0,_non_exist_js__WEBPACK_IMPORTED_MODULE_2__.nonExist)(req, res);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://crud-api/./dist/routes/deleteUser.js?");

/***/ }),

/***/ "./dist/routes/get.js":
/*!****************************!*\
  !*** ./dist/routes/get.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get\": () => (/* binding */ get)\n/* harmony export */ });\n/* harmony import */ var _getUser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getUser.js */ \"./dist/routes/getUser.js\");\n/* harmony import */ var _getUsers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getUsers.js */ \"./dist/routes/getUsers.js\");\n/* harmony import */ var _non_exist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./non-exist.js */ \"./dist/routes/non-exist.js\");\n\r\n\r\n\r\nconst get = (req, res) => {\r\n    var _a;\r\n    if (req.url === '/api/users') {\r\n        (0,_getUsers_js__WEBPACK_IMPORTED_MODULE_1__.getUsers)(res);\r\n    }\r\n    else if ((_a = req.url) === null || _a === void 0 ? void 0 : _a.startsWith('/api/users/')) {\r\n        (0,_getUser_js__WEBPACK_IMPORTED_MODULE_0__.getUser)(req, res);\r\n    }\r\n    else {\r\n        (0,_non_exist_js__WEBPACK_IMPORTED_MODULE_2__.nonExist)(req, res);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://crud-api/./dist/routes/get.js?");

/***/ }),

/***/ "./dist/routes/getUser.js":
/*!********************************!*\
  !*** ./dist/routes/getUser.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUser\": () => (/* binding */ getUser)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ \"./dist/utils.js\");\n/* harmony import */ var _users_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../users.js */ \"./dist/users.js\");\n\r\n\r\nconst getUser = (req, res) => {\r\n    var _a;\r\n    const userId = ((_a = req.url) === null || _a === void 0 ? void 0 : _a.split('/')[3]) || '';\r\n    const isValidUserId = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.uuidValidateV4)(userId);\r\n    if (isValidUserId) {\r\n        if (_users_js__WEBPACK_IMPORTED_MODULE_1__.isUserExist(userId)) {\r\n            res.writeHead(200, { 'Content-Type': 'application/json' });\r\n            res.end(JSON.stringify(_users_js__WEBPACK_IMPORTED_MODULE_1__.get(userId)));\r\n        }\r\n        else {\r\n            res.writeHead(404, { 'Content-Type': 'text/plain' });\r\n            res.end('User not found');\r\n        }\r\n    }\r\n    else {\r\n        res.writeHead(400, { 'Content-Type': 'text/plain' });\r\n        res.end('User ID not valid');\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://crud-api/./dist/routes/getUser.js?");

/***/ }),

/***/ "./dist/routes/getUsers.js":
/*!*********************************!*\
  !*** ./dist/routes/getUsers.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUsers\": () => (/* binding */ getUsers)\n/* harmony export */ });\n/* harmony import */ var _users_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../users.js */ \"./dist/users.js\");\n\r\nconst getUsers = (res) => {\r\n    res.writeHead(200, { 'Content-Type': 'application/json' });\r\n    res.end(JSON.stringify(_users_js__WEBPACK_IMPORTED_MODULE_0__.getAll()));\r\n};\r\n\n\n//# sourceURL=webpack://crud-api/./dist/routes/getUsers.js?");

/***/ }),

/***/ "./dist/routes/non-exist.js":
/*!**********************************!*\
  !*** ./dist/routes/non-exist.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nonExist\": () => (/* binding */ nonExist)\n/* harmony export */ });\nconst nonExist = (req, res) => {\r\n    res.writeHead(404, { 'Content-Type': 'text/plain' });\r\n    res.end('Requests to non-existing endpoints');\r\n};\r\n\n\n//# sourceURL=webpack://crud-api/./dist/routes/non-exist.js?");

/***/ }),

/***/ "./dist/routes/postUser.js":
/*!*********************************!*\
  !*** ./dist/routes/postUser.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postUser\": () => (/* binding */ postUser)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-node/v4.js\");\n/* harmony import */ var _users_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../users.js */ \"./dist/users.js\");\n/* harmony import */ var _non_exist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./non-exist.js */ \"./dist/routes/non-exist.js\");\n\r\n\r\n\r\nconst postUser = (req, res) => {\r\n    if (req.url === '/api/users') {\r\n        if (req.headers['content-type'] === 'application/json') {\r\n            let body = '';\r\n            req.on('data', (chunk) => {\r\n                body += chunk;\r\n            });\r\n            req.on('end', () => {\r\n                const user = JSON.parse(body);\r\n                if (user.username && user.age && user.hobbies) {\r\n                    user.id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n                    _users_js__WEBPACK_IMPORTED_MODULE_0__.add(user);\r\n                    res.writeHead(201, { 'Content-Type': 'application/json' });\r\n                    res.end(JSON.stringify(user));\r\n                }\r\n                else {\r\n                    res.writeHead(400, { 'Content-Type': 'text/plain' });\r\n                    res.end('Request body does not contain required fields');\r\n                }\r\n            });\r\n        }\r\n    }\r\n    else {\r\n        (0,_non_exist_js__WEBPACK_IMPORTED_MODULE_1__.nonExist)(req, res);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://crud-api/./dist/routes/postUser.js?");

/***/ }),

/***/ "./dist/routes/putUser.js":
/*!********************************!*\
  !*** ./dist/routes/putUser.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"putUser\": () => (/* binding */ putUser)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ \"./dist/utils.js\");\n/* harmony import */ var _users_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../users.js */ \"./dist/users.js\");\n/* harmony import */ var _non_exist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./non-exist.js */ \"./dist/routes/non-exist.js\");\n\r\n\r\n\r\nconst putUser = (req, res) => {\r\n    var _a;\r\n    if ((_a = req.url) === null || _a === void 0 ? void 0 : _a.startsWith('/api/users/')) {\r\n        const userId = req.url.split('/')[3];\r\n        const isValidUserId = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.uuidValidateV4)(userId);\r\n        if (isValidUserId) {\r\n            if (req.headers['content-type'] === 'application/json') {\r\n                let body = '';\r\n                req.on('data', (chunk) => {\r\n                    body += chunk;\r\n                });\r\n                req.on('end', () => {\r\n                    const user = JSON.parse(body);\r\n                    if (_users_js__WEBPACK_IMPORTED_MODULE_1__.isUserExist(userId)) {\r\n                        if (user.username && user.age && user.hobbies) {\r\n                            user.id = userId;\r\n                            _users_js__WEBPACK_IMPORTED_MODULE_1__.updateUser(user);\r\n                            res.writeHead(200, { 'Content-Type': 'application/json' });\r\n                            res.end(JSON.stringify(user));\r\n                        }\r\n                        else {\r\n                            res.writeHead(400, { 'Content-Type': 'text/plain' });\r\n                            res.end('Request body does not contain required fields');\r\n                        }\r\n                    }\r\n                    else {\r\n                        res.writeHead(404, { 'Content-Type': 'text/plain' });\r\n                        res.end('User not found');\r\n                    }\r\n                });\r\n            }\r\n            else {\r\n                res.writeHead(400, { 'Content-Type': 'text/plain' });\r\n                res.end('Content-Type header must be application/json');\r\n            }\r\n        }\r\n        else {\r\n            res.writeHead(400, { 'Content-Type': 'text/plain' });\r\n            res.end('User ID not valid');\r\n        }\r\n    }\r\n    else {\r\n        (0,_non_exist_js__WEBPACK_IMPORTED_MODULE_2__.nonExist)(req, res);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://crud-api/./dist/routes/putUser.js?");

/***/ }),

/***/ "./dist/users.js":
/*!***********************!*\
  !*** ./dist/users.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"get\": () => (/* binding */ get),\n/* harmony export */   \"getAll\": () => (/* binding */ getAll),\n/* harmony export */   \"isUserExist\": () => (/* binding */ isUserExist),\n/* harmony export */   \"remove\": () => (/* binding */ remove),\n/* harmony export */   \"updateUser\": () => (/* binding */ updateUser)\n/* harmony export */ });\nconst users = [];\r\nconst add = (user) => {\r\n    users.push(user);\r\n};\r\nconst remove = (userId) => {\r\n    const userIndex = users.findIndex((user) => user.id === userId);\r\n    users.splice(userIndex, 1);\r\n};\r\nconst updateUser = (user) => {\r\n    const userIndex = users.findIndex((u) => u.id === user.id);\r\n    users[userIndex] = user;\r\n};\r\nconst get = (id) => {\r\n    const userIndex = users.findIndex((u) => u.id === id);\r\n    return users[userIndex];\r\n};\r\nconst getAll = () => {\r\n    return users;\r\n};\r\nconst isUserExist = (userId) => {\r\n    return users.findIndex((u) => u.id === userId) !== -1;\r\n};\r\n\n\n//# sourceURL=webpack://crud-api/./dist/users.js?");

/***/ }),

/***/ "./dist/utils.js":
/*!***********************!*\
  !*** ./dist/utils.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendServerErrorResponse\": () => (/* binding */ sendServerErrorResponse),\n/* harmony export */   \"uuidValidateV4\": () => (/* binding */ uuidValidateV4)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-node/validate.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-node/version.js\");\n\r\nconst uuidValidateV4 = (uuid) => {\r\n    return (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid) && (0,uuid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(uuid) === 4;\r\n};\r\nconst sendServerErrorResponse = (res) => {\r\n    res.writeHead(500, { 'Content-Type': 'text/plain' });\r\n    res.end('Server error');\r\n};\r\n\n\n//# sourceURL=webpack://crud-api/./dist/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/index.js");
/******/ 	
/******/ })()
;