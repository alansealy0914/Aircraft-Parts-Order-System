import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'navigation',
    templateUrl: './navigation.html'
})
export class NavigationComponent implements OnInit {
    constructor(private loginService: AuthenticationService) {}
  ngOnInit() {
  }
}
