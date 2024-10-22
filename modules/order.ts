export type OrderType = {
    id: number;
    totale: number;
    imponibile: number;
    iva: number;
    prodotti: string[];
}

export const createOrder = (id: number, totale: number, imponibile: number, iva: number, prodotti: string[]): OrderType => ({
    id, totale, imponibile, iva, prodotti
});