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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  html {\n    interpolate-size: allow-keywords;\n  }\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\ntable {\n  border-color: currentcolor;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\nhtml {\n  height: 100%;\n  font-family: \"Roboto\", Arial, Helvetica, sans-serif;\n  background-color: #70712e;\n  color: #463f3a;\n}\n\nbody {\n  height: 100vh;\n  padding-top: 20px;\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\n.tabs {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #463f3a;\n  border-radius: 10px;\n  position: relative;\n  max-width: 600px;\n  margin: 0px auto 20px auto;\n}\n\n.tabs button {\n  flex-grow: 1;\n  background-color: transparent;\n  border: none;\n  padding: 10px;\n  cursor: pointer;\n  z-index: 3;\n  color: #faf0ca;\n}\n\n.tabs .active {\n  background: #a93a3a;\n  height: calc(100% - 10px);\n  width: calc(33% - 10px);\n  position: absolute;\n  top: 5px;\n  left: 0;\n  transform: translateX(5px);\n  border-radius: inherit;\n  box-shadow: 0 2px 2px #392828;\n  transition: all 100ms;\n}\n\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.presentation {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  width: clamp(180px, 50vw, 700px);\n}\n\n.presentation h1 {\n  margin-top: 120px;\n  margin-bottom: 20px;\n  font-family: \"Noto Serif TC\", serif;\n  font-weight: 600;\n  font-size: 68px;\n}\n\n.presentation p {\n  text-align: center;\n  white-space: pre-line;\n  font-size: 15px;\n}\n\n.food-card,\n.beverage-card,\n.contact-card {\n  background-color: #ede5d9;\n  border-radius: 10px;\n  padding: 28px;\n  box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.card-container,\n.contactContainer {\n  width: clamp(180px, 50vw, 800px);\n}\n\n.card-container h2 {\n  font-family: \"Noto Serif TC\", serif;\n  text-align: center;\n  margin: 15px 0px;\n  font-size: 45px;\n  color: #f3ebe0;\n}\n\n#menu-food-section {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 3fr));\n  grid-auto-rows: 1fr;\n}\n\nimg {\n  width: 200px;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 20px;\n  box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.1);\n}\n\n.food-card p:last-child,\n.beverage-card p:last-child {\n  margin-top: auto;\n}\n\n.description,\n.food-card h4,\n.beverage-card h4 {\n  text-align: center;\n}\n\n.description {\n  font-size: 14px;\n  margin: 5px 0px;\n}\n\n.food-card h4 {\n  margin-top: 10px;\n  color: #a93a3a;\n}\n\n.beverage-card h4 {\n  margin-top: 10px;\n  color: #ba4353;\n}\n\n.food-card p:last-child,\n.beverage-card p:last-child {\n  padding: 5px 8px;\n  border-radius: 10px;\n  color: #ede5d9;\n  box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.1);\n}\n\n.food-card p:last-child {\n  background-color: #a93a3a;\n}\n\n.beverage-card p:last-child {\n  background-color: #ba4353;\n}\n.beverage-card img {\n  width: 160px;\n  height: 180px;\n  object-fit: cover;\n  border-radius: 20px;\n}\n\n#menu-drink-section {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));\n  grid-auto-rows: 1fr;\n  margin-bottom: 30px;\n}\n\n.contactContainer p,\n.contact-card p {\n  white-space: pre-line;\n}\n\n.contact-cards-div {\n  display: grid;\n  gap: 20px;\n  grid-auto-rows: 1fr;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n}\n\n.homepage-img {\n  height: 100vh;\n  background-image: url(\"https://www.travelandleisure.com/thmb/8z95bf6yaGn0hTm3jzLhslOQYYg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-lake-como-italy-recirc-ITALYTAX24-12545c3a6e544240a674f603c9a0d21a.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n\n.homepage-img::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #305c7d;\n  opacity: 0.6;\n  z-index: 1;\n}\n\n.homepage-img h1,\n.homepage-img p,\n.homepage-img header {\n  position: relative;\n  z-index: 2;\n}\n\n.homepage-img p {\n  color: #f5f3ef;\n}\n\n.homepage-img h1 {\n  color: #faf0ca;\n}\n\n\n.contactContainer h1,\n.contactContainer p {\n  text-align: center;\n}\n\n.contactContainer h1 {\n  margin: 12px;\n  font-size: 48px;\n  color: #ede5d9;\n}\n\n.contactContainer h1 + p {\n  margin-bottom: 30px;\n  color: #ede5d9;\n}\n\n.contactContainer h1 + p:last-child{\n  color: #ba4353;\n}\n\n.highlight{\n  color: #ede5d9;\n  font-weight: 600;\n  font-size: 22px;\n  background-color: #ba4353;\n  padding: 5px 8px;\n  border-radius: 15px;\n}\n\n.contact-card{\n  justify-content: center;\n}\n\n.contact-card p {\n  margin-top: 8px;\n  font-size: 15px;\n}\n\n.material-icons{\n  color: #a93a3a;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tab_restaurant_pages/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tab_restaurant_pages/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tab_restaurant_pages/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tab_restaurant_pages/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tab_restaurant_pages/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tab_restaurant_pages/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tab_restaurant_pages/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tab_restaurant_pages/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tab_restaurant_pages/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nconst contactBoxes = [];\n\nclass Contact {\n    constructor(title, description, icon) {\n        this.title = title;\n        this.description = description;\n        this.icon = icon;\n    }\n}\n\nfunction addContact(title, description, icon) {\n    let newContact = new Contact(title, description, icon);\n\n    contactBoxes.push(newContact);\n}\n\nfunction loadContactPage(parentContainer) {\n    const contactContaner = document.createElement('div');\n    contactContaner.classList.add(\"contactContainer\");\n\n    const title = document.createElement('h1');\n    title.textContent = \"Contact Us\";\n\n    const text = document.createElement(\"p\");\n    text.innerHTML = `At Bravo I'llorno, connecting with our community is just as important as the quality of our cuisine. If you have any questions, would like to make a reservation, or simply want to share your experience, we would love to hear from you!\n\n    We are available by phone, email, or in person at our restaurant.\n\n    <span class=\"highlight\">We hope to see you soon at our table!</span>`;\n\n    const contactCards = document.createElement('div');\n    contactCards.classList.add(\"contact-cards-div\");\n\n    contactContaner.appendChild(title);\n    contactContaner.appendChild(text);\n    contactContaner.appendChild(contactCards);\n\n    contactBoxes.forEach((contact) => {\n        const card = createContactCard(contact);\n        contactCards.appendChild(card);\n    })\n\n    parentContainer.appendChild(contactContaner);\n}\n\n\nfunction createContactCard(contact) {\n    const card = document.createElement('div');\n    card.classList.add('contact-card');\n\n    const logo = document.createElement('span');\n    logo.classList.add(\"material-icons\", \"contact-icon\");\n    logo.textContent = contact.icon;\n\n    const title = document.createElement('h3');\n    title.textContent = contact.title;\n\n    const description = document.createElement('p');\n    description.textContent = contact.description;\n\n    card.appendChild(logo);\n    card.appendChild(title);\n    card.appendChild(description);\n\n    return card;\n}\n\naddContact(\"Phone\", \"+1 (555) 123-4567\", \"phone\");\naddContact(\"E-mail\", \"contact@bravoIllHorno.com\", \"email\");\naddContact(\n  \"Location\",\n  \"57 John F. Kennedy Avenue, Ensanche La Fé, Santo Domingo, Dominican Republic.\",\n  \"location_on\"\n);\naddContact(\n  \"Schedule\",\n  \"Mon - Sat: 12:00 PM - 10:00 PM \\nSunday: 12:00 PM - 11:30 PM\",\n  \"schedule\"\n);\n\n//# sourceURL=webpack://tab_restaurant_pages/./src/contact.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome(parentContainer) {\n    const presentation = document.createElement('div');\n    presentation.classList.add('presentation');\n\n    const title = document.createElement('div');\n    const titleText = document.createElement('h1');\n    titleText.textContent = \"Bravo I'llorno\";\n    title.appendChild(titleText);\n\n    const presentationText = document.createElement('div');\n    const paragraph1 = document.createElement('p');\n    paragraph1.textContent = `Bravo I'llhorno is born from the love of home cooking, inspiring a\n            culinary offering dedicated to providing the best Italian food. We\n            use genuinely Italian products and the freshest ingredients to\n            guarantee an unmatched taste, all within a warm and familiar\n            framework.\\n\\n`;\n    const paragraph2 = document.createElement('p');\n    paragraph2.textContent = `We strive to offer a moment of happiness at every gathering,\n            combining a memorable dining experience with impeccable service. The\n            design is modern and laid-back, visually highlighting the kitchen\n            display and, as the central protagonist, our traditional wood-fired\n            oven. We want you to come and share our great passion for Italy and\n            its cuisine.`;\n    presentationText.appendChild(paragraph1);\n    presentationText.appendChild(paragraph2);\n\n    presentation.appendChild(title);\n    presentation.appendChild(presentationText);\n\n    parentContainer.appendChild(presentation);        \n}\n\n//# sourceURL=webpack://tab_restaurant_pages/./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconsole.log(\"We are serving\");\n\nconst btns = document.querySelectorAll(\"button\");\n\nconst active = document.querySelector(\".active\");\n\nfor (let i = 0; i < btns.length; i++) {\n  btns[i].onclick = function () {\n    let move = (100 / btns.length) * i;\n    active.style.left = move + \"%\";\n  };\n}\n\nconst content = document.querySelector(\"#content\");\n\nfunction cleanContent() {\n  content.innerHTML = \"\";\n}\n\nconst html = document.body;\n\nfunction clearBackgroundClasses(element){\n  element.classList.remove(\"homepage-img\");\n}\nconst tabs = document.querySelector(\".tabs\");\n\ntabs.addEventListener(\"click\", (event) => {\n  let target = event.target;\n\n  switch (target.id) {\n    case \"home\":\n      cleanContent();\n      clearBackgroundClasses(html);\n      html.classList.add('homepage-img');\n      (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\n      break;\n    case \"menu\":\n      cleanContent();\n      clearBackgroundClasses(html);\n      (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n      break;\n    case \"contact\":\n      cleanContent();\n      clearBackgroundClasses(html);\n      (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\n      break;\n  }\n});\n\n(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\n\n//# sourceURL=webpack://tab_restaurant_pages/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _wine_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wine.png */ \"./src/wine.png\");\n\n\nconst menuItems = [];\n\nclass MenuItem {\n  constructor(name, description, price, img, type) {\n    this.name = name;\n    this.description = description;\n    this.price = price;\n    this.img = img;\n    this.type = type;\n  }\n}\n\nfunction addMenuItems(name, description, price, img, type) {\n  let newMenuItem = new MenuItem(name, description, price, img, type);\n\n  menuItems.push(newMenuItem);\n}\n\nfunction loadMenu(parentContainer) {\n  const container = document.createElement(\"div\");\n  container.classList.add(\"card-container\");\n\n  const foodContainer = document.createElement(\"div\");\n  foodContainer.id = \"menu-food-section\";\n\n  const drinkContainer = document.createElement(\"div\");\n  drinkContainer.id = \"menu-drink-section\";\n\n  const foodTitle = document.createElement(\"h2\");\n  foodTitle.textContent = \"Food\";\n\n  const drinkTitle = document.createElement(\"h2\");\n  drinkTitle.textContent = \"Beverages\";\n\n  container.appendChild(foodTitle);\n  container.appendChild(foodContainer);\n  container.appendChild(drinkTitle);\n  container.appendChild(drinkContainer);\n\n  menuItems.forEach((menuItem) => {\n    const card = createItemCard(menuItem);\n\n    if (menuItem.type === \"food\") {\n      foodContainer.appendChild(card);\n    } else if (menuItem.type === \"beverage\") {\n      drinkContainer.appendChild(card);\n    }\n  });\n\n  parentContainer.appendChild(container);\n}\n\nfunction createItemCard(item) {\n  const div = document.createElement(\"div\");\n\n  if (item.type === \"food\") {\n    div.classList.add(\"food-card\");\n  } else if (item.type === \"beverage\") {\n    div.classList.add(\"beverage-card\");\n  }\n\n  const img = document.createElement(\"img\");\n  img.src = item.img;\n\n  const name = document.createElement(\"h4\");\n  name.textContent = item.name;\n\n  const descripcion = document.createElement(\"p\");\n  descripcion.classList.add(\"description\");\n  descripcion.textContent = item.description;\n\n  const price = document.createElement(\"p\");\n  price.textContent = `$${item.price}.00`;\n\n  div.appendChild(img);\n  div.appendChild(name);\n  div.appendChild(descripcion);\n  div.appendChild(price);\n\n  return div;\n}\n\n/*data */\naddMenuItems(\n  \"STELLA BRAVA\",\n  \"Star-shaped pizza with tomato sauce, mozzarella, ricotta, pepperoni, and basil\",\n  575,\n  \"https://fornobravo.myshopify.com/cdn/shop/files/FornoBravo_Kids_031_503x.jpg?v=1736886881\",\n  \"food\"\n);\naddMenuItems(\n  \"CALZONE IL BRAVISSIMO\",\n  \"Mozzarella, gorgonzola, ricotta, peppers, mushrooms, raw onion, and white truffle oil\",\n  625,\n  \"https://fornobravo.myshopify.com/cdn/shop/products/calzonbravissimo_503x503.webp?v=1644433345\",\n  \"food\"\n);\naddMenuItems(\n  \"FOCCACIA ROSSA\",\n  \"Ricotta cheese, roasted tomatoes, aromatic herbs.\",\n  420,\n  \"https://fornobravo.myshopify.com/cdn/shop/products/focacciarossa_503x.webp?v=1644431985\",\n  \"food\"\n);\naddMenuItems(\n  \"FETTUCINE ALFREDO\",\n  \"Fresh homemade fettuccine with alfredo sauce.\",\n  435,\n  \"https://fornobravo.myshopify.com/cdn/shop/files/FornoBravo_Octubre2_086_503x.jpg?v=1736888141\",\n  \"food\"\n);\naddMenuItems(\n  \"ARRABIATA BRAVA SIN CAMARONES\",\n  \"Arrabiata sauce, peperoncini, pomodoro, and cherry tomatoes.\",\n  425,\n  \"https://fornobravo.myshopify.com/cdn/shop/files/ArrabiataBrava_503x.jpg?v=1736871701\",\n  \"food\"\n);\naddMenuItems(\n  \"RIGATONI DI MARIA\",\n  \"shrimp, truffle cream, goat cheese, gratinated with mozzarella.\",\n  575,\n  \"https://fornobravo.myshopify.com/cdn/shop/files/IMG_7052_1_503x.jpg?v=1736871380\",\n  \"food\"\n);\n\naddMenuItems(\n  \"CALA ROSSA\",\n  \"Frozen or fresh lemon and strawberry.\",\n  245,\n  \"https://fornobravo.myshopify.com/cdn/shop/files/frozenlimonyfresa_503x.jpg?v=1713984375\",\n  \"beverage\"\n);\naddMenuItems(\n  \"SAN VITO\",\n  \"Frozen or fresh strawberry and passion fruit\",\n  245,\n  \"https://fornobravo.myshopify.com/cdn/shop/files/FrozendeChinolayGranadina_503x.jpg?v=1713984213\",\n  \"beverage\"\n);\naddMenuItems(\n  \"CAPRI\",\n  \"Frozen or fresh lemon and mint juice.\",\n  245,\n  \"https://fornobravo.myshopify.com/cdn/shop/files/FrozendeLimonyMenta_503x.jpg?v=1713984170\",\n  \"beverage\"\n);\n\naddMenuItems(\n  \"VILLA S. ANDREA II PERTICATO\",\n  \"Italian red wine\",\n  2.745,\n  _wine_png__WEBPACK_IMPORTED_MODULE_0__,\n  \"beverage\"\n);\n\n//# sourceURL=webpack://tab_restaurant_pages/./src/menu.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tab_restaurant_pages/./src/style.css?\n}");

/***/ }),

/***/ "./src/wine.png":
/*!**********************!*\
  !*** ./src/wine.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"6e0ef7686e29927ec9f7.png\";\n\n//# sourceURL=webpack://tab_restaurant_pages/./src/wine.png?\n}");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;