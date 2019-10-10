import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'ordersystem-app',
    template: `
    <navigation></navigation>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent {}
