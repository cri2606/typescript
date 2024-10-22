import { OrderType } from './order'

export type UserType = {
    username: string;
    password: string;
    status: number;
    permissions: string[];
    orders: OrderType[];
}
export const User = (username: string, password: string, status: number, permissions: string[], orders?: OrderType[]): UserType => ({
    username, password, status, permissions, orders: orders || []
});