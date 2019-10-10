import { Component, Input } from '@angular/core';
import { Customer } from './customer.interface';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'customers-table',
    templateUrl: './customers-table.html'
})
export class CustomersTableComponent {
    @Input() customers: Customer[];
    constructor() {

    }
}
