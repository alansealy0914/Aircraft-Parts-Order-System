import { Component, OnInit } from '@angular/core';
import { PartsService } from './parts.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {
  title = 'Geo-Global Parts';
  parts: any[];
  constructor(private partsService: PartsService) { }

  ngOnInit() {
    this.partsService.getParts()
      .subscribe((data) => this.parts = data);
  }
}
