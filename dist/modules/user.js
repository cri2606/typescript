"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const User = (username, password, status, permissions, orders) => ({
    username, password, status, permissions, orders: orders || []
});
exports.User = User;
//# sourceMappingURL=user.js.map