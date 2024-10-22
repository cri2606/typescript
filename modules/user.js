"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = function (username, password, status, permissions, orders) {
    if (orders === void 0) { orders = []; }
    return ({
        username: username,
        password: password,
        status: status,
        permissions: permissions,
        orders: orders
    });
};
exports.User = User;
