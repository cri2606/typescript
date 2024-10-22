"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./modules/user");
var order_1 = require("./modules/order");
var order1 = (0, order_1.createOrder)(1, 100, 82, 18, ['tavolo', 'sedia']);
var order2 = (0, order_1.createOrder)(2, 200, 164, 36, ['frigorifero', 'forno']);
var user1 = (0, user_1.User)('Mario Rossi', 'pw33534', 1, ['read', 'write', 'delete'], [order1, order2]);
console.log(user1);
user1.orders.forEach(function (order) {
    console.log("Ordine ID: ".concat(order.id));
    console.log("Prodotti dell'ordine:");
    order.prodotti.forEach(function (prodotto) {
        console.log("- ".concat(prodotto));
    });
});
