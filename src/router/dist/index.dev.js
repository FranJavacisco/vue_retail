"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _ProductList = _interopRequireDefault(require("@/components/ProductList.vue"));

var _OrderList = _interopRequireDefault(require("@/components/OrderList.vue"));

var _CreateOrder = _interopRequireDefault(require("@/components/CreateOrder.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/products',
  component: _ProductList["default"]
}, {
  path: '/orders',
  component: _OrderList["default"]
}, {
  path: '/create-order',
  component: _CreateOrder["default"]
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(),
  routes: routes
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
