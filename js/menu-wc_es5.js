'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">TodoMVC Angular documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter additional\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#additional-pages"' : 'data-target="#xs-additional-pages"', ">\n                            <span class=\"icon ion-ios-book\"></span>\n                            <span>Additional documentation</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"', ">\n                                    <li class=\"link \">\n                                        <a href=\"additional-documentation/introduction.html\" data-type=\"entity-link\" data-context-id=\"additional\">Introduction</a>\n                                    </li>\n                                    <li class=\"chapter inner\">\n                                        <a data-type=\"chapter-link\" href=\"additional-documentation/actions.html\" data-context-id=\"additional\">\n                                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#additional-page-cde0e8dcb3b8f73434ddd09aa74f6c26"' : 'data-target="#xs-additional-page-cde0e8dcb3b8f73434ddd09aa74f6c26"', ">\n                                                <span class=\"link-name\">Actions</span>\n                                                <span class=\"icon ion-ios-arrow-down\"></span>\n                                            </div>\n                                        </a>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="additional-page-cde0e8dcb3b8f73434ddd09aa74f6c26"' : 'id="xs-additional-page-cde0e8dcb3b8f73434ddd09aa74f6c26"', ">\n                                            <li class=\"link for-chapter2\">\n                                                <a href=\"additional-documentation/actions/creation-of-a-todo.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"additional\">Creation of a todo</a>\n                                            </li>\n                                            <li class=\"link for-chapter2\">\n                                                <a href=\"additional-documentation/actions/edition-of-a-todo.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"additional\">Edition of a todo</a>\n                                            </li>\n                                            <li class=\"link for-chapter2\">\n                                                <a href=\"additional-documentation/actions/delete-a-todo.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"additional\">Delete a todo</a>\n                                            </li>\n                                            <li class=\"link for-chapter2\">\n                                                <a href=\"additional-documentation/actions/update-the-status-of-a-todo.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"additional\">Update the status of a todo</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AboutModule.html\" data-type=\"entity-link\" >AboutModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AboutModule-df6171fd7f72472739608255c046825c"' : 'data-target="#xs-components-links-module-AboutModule-df6171fd7f72472739608255c046825c"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AboutModule-df6171fd7f72472739608255c046825c"' : 'id="xs-components-links-module-AboutModule-df6171fd7f72472739608255c046825c"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AboutComponent.html\"\n                                                    data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AboutComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CompodocComponent.html\"\n                                                    data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CompodocComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TodoMVCComponent.html\"\n                                                    data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TodoMVCComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-cad670cd6ee13d95d209065fb5914206"' : 'data-target="#xs-components-links-module-AppModule-cad670cd6ee13d95d209065fb5914206"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-cad670cd6ee13d95d209065fb5914206"' : 'id="xs-components-links-module-AppModule-cad670cd6ee13d95d209065fb5914206"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\"\n                                                    data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AppModule-cad670cd6ee13d95d209065fb5914206"' : 'data-target="#xs-injectables-links-module-AppModule-cad670cd6ee13d95d209065fb5914206"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-cad670cd6ee13d95d209065fb5914206"' : 'id="xs-injectables-links-module-AppModule-cad670cd6ee13d95d209065fb5914206"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/TodoStore.html\"\n                                                data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TodoStore</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/FooterModule.html\" data-type=\"entity-link\" >FooterModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-FooterModule-4e191cecda8c3d37ff4e026741ad4b67"' : 'data-target="#xs-components-links-module-FooterModule-4e191cecda8c3d37ff4e026741ad4b67"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-FooterModule-4e191cecda8c3d37ff4e026741ad4b67"' : 'id="xs-components-links-module-FooterModule-4e191cecda8c3d37ff4e026741ad4b67"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/FooterComponent.html\"\n                                                    data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FooterComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HeaderModule.html\" data-type=\"entity-link\" >HeaderModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-HeaderModule-01a1a87cb030a71d2f514e684f4c9f4d"' : 'data-target="#xs-components-links-module-HeaderModule-01a1a87cb030a71d2f514e684f4c9f4d"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-HeaderModule-01a1a87cb030a71d2f514e684f4c9f4d"' : 'id="xs-components-links-module-HeaderModule-01a1a87cb030a71d2f514e684f4c9f4d"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/HeaderComponent.html\"\n                                                    data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HeaderComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeModule.html\" data-type=\"entity-link\" >HomeModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-HomeModule-87ed69a3d9924293fc88b800af669ceb"' : 'data-target="#xs-components-links-module-HomeModule-87ed69a3d9924293fc88b800af669ceb"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-HomeModule-87ed69a3d9924293fc88b800af669ceb"' : 'id="xs-components-links-module-HomeModule-87ed69a3d9924293fc88b800af669ceb"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/HomeComponent.html\"\n                                                    data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HomeComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeRoutingModule.html\" data-type=\"entity-link\" >HomeRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ListModule.html\" data-type=\"entity-link\" >ListModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ListModule-7fecf30277f8cac65e9e73c3fc811853"' : 'data-target="#xs-components-links-module-ListModule-7fecf30277f8cac65e9e73c3fc811853"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ListModule-7fecf30277f8cac65e9e73c3fc811853"' : 'id="xs-components-links-module-ListModule-7fecf30277f8cac65e9e73c3fc811853"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ListComponent.html\"\n                                                    data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ListComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TodoModule.html\" data-type=\"entity-link\" >TodoModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' : 'data-target="#xs-components-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' : 'id="xs-components-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/TodoComponent.html\"\n                                                    data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TodoComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#directives-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' : 'data-target="#xs-directives-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"', ">\n                                        <span class=\"icon ion-md-code-working\"></span>\n                                        <span>Directives</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="directives-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' : 'id="xs-directives-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"', ">\n                                        <li class=\"link\">\n                                            <a href=\"directives/DoNothingDirective.html\"\n                                                data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DoNothingDirective</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#pipes-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' : 'data-target="#xs-pipes-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"', ">\n                                            <span class=\"icon ion-md-add\"></span>\n                                            <span>Pipes</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="pipes-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"' : 'id="xs-pipes-links-module-TodoModule-f511f1dcb48009f273b93f18e4b27268"', ">\n                                            <li class=\"link\">\n                                                <a href=\"pipes/FirstUpperPipe.html\"\n                                                    data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FirstUpperPipe</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"', ">\n                            <span class=\"icon ion-md-cog\"></span>\n                            <span>Components</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="components-links"' : 'id="xs-components-links"', ">\n                            <li class=\"link\">\n                                <a href=\"components/EmptyComponent.html\" data-type=\"entity-link\" >EmptyComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/EmptyParentComponent.html\" data-type=\"entity-link\" >EmptyParentComponent</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/StringIndexedItems.html\" data-type=\"entity-link\" >StringIndexedItems</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Todo.html\" data-type=\"entity-link\" >Todo</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/EmitterService.html\" data-type=\"entity-link\" >EmitterService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/EmptyService.html\" data-type=\"entity-link\" >EmptyService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interceptors-links"' : 'data-target="#xs-interceptors-links"', ">\n                            <span class=\"icon ion-ios-swap\"></span>\n                            <span>Interceptors</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interceptors/NoopInterceptor.html\" data-type=\"entity-link\" >NoopInterceptor</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/NoopGuard.html\" data-type=\"entity-link\" >NoopGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/ClockInterface.html\" data-type=\"entity-link\" >ClockInterface</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/InterfaceWithIndexable.html\" data-type=\"entity-link\" >InterfaceWithIndexable</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/LabelledTodo.html\" data-type=\"entity-link\" class=\"deprecated-name\">LabelledTodo</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/SearchFunc.html\" data-type=\"entity-link\" >SearchFunc</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/StringArray.html\" data-type=\"entity-link\" >StringArray</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/superString.html\" data-type=\"entity-link\" >superString</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TimeInterface.html\" data-type=\"entity-link\" >TimeInterface</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));