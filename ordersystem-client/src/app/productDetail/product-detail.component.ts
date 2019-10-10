import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../products/product.interface';
import { Url } from 'url';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'product-detail',
    templateUrl: './productDetail.html'
})

export class ProductDetailComponent implements OnInit {
    title = 'Product Detail';
    product: Product;
    url: string | ArrayBuffer;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.subscribe((data: { product: Product }) => {
            this.product = data.product;
        });
    }

    onPrint() {
      window.print();
  }

    onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]); // read file as data url

        // tslint:disable-next-line: no-shadowed-variable
        reader.onload = (e) => { // called once readAsDataURL is completed
        this.url = reader.result;
      };
    }
  }
}
