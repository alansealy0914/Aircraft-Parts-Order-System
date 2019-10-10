import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Parts } from '../parts/parts.interface';
import { PartsService } from '../parts/parts.service';


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'part-detail',
    templateUrl: './part-detail.component.html'
})
export class PartDetailComponent implements OnInit {
    /*parts: Parts;
    title = 'Part Detail';

    constructor(private partsService: PartsService,
        private route: ActivatedRoute) {
    }

  ngOnInit() {
        this.route.data.subscribe((data: { parts: Parts }) => {
            this.parts = data.parts;
        });
    }
}*/


title = 'Geo-Global Parts-Detail';
  parts: any[];
  constructor(private partsService: PartsService) { }

  ngOnInit() {
    this.partsService.getParts()
      .subscribe((data) => this.parts = data);
  }
}
