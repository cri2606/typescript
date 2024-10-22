"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
var createOrder = function (id, totale, imponibile, iva, prodotti) { return ({
    id: id,
    totale: totale,
    imponibile: imponibile,
    iva: iva,
    prodotti: prodotti
}); };
exports.createOrder = createOrder;
