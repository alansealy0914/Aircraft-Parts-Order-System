export interface Order {
    orderId: number;
    customerName: string;
    orderDate: string;
    customerId: number;
    totalCost: number;
    totalSale: number;
    totalItems: number;
    items: [
        {
            quantity: number,
            productId: string,
            productName: string,
            itemPrice: number
        }
    ];
}
