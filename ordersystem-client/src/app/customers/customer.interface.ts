 import { Discount } from '../customerDetail/discount.interface';

export interface Customer {
    CustomerId: number;
    FirstName: string;
    LastName: string;
    ClientCode: string;
    BusName: string;
    Office: string;
    doctitle: string;
    getsDiscount: boolean;
    discount: Discount;
 }
