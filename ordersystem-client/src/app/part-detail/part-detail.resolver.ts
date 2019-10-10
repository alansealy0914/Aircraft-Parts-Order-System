
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Parts } from '../parts/parts.interface';
import { PartsService } from '../parts/parts.service';

@Injectable()
export class PartDetailResolver implements Resolve<Parts> {
  constructor(private partsService: PartsService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Parts> {
    const id = route.paramMap.get('partId');

    return this.partsService.getPart(id).pipe(
      take(1),
      map(part => {
        if (part) {
          return part;
        } else {
          this.router.navigate(['/parts']);
          return null;
        }
      })
    );
  }
}
