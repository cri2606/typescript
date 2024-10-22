import { User } from './modules/user';
import { createOrder } from './modules/order';

const order1 = createOrder(1, 100, 82, 18, ['tavolo', 'sedia']);
const order2 = createOrder(2, 200, 164, 36, ['frigorifero', 'forno']);

const user1 = User('Mario Rossi', 'pw33534', 1, ['read', 'write', 'delete'], [order1, order2]);

console.log(user1);

user1.orders.forEach(order => {
    console.log(`Ordine ID: ${order.id}`);
    console.log(`Prodotti dell'ordine:`);
    order.prodotti.forEach(prodotto => {
        console.log(`- ${prodotto}`);
    });
});