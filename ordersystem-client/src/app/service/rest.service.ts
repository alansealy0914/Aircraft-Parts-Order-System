import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:54953/api/globalparts';

// Http Headers
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getParts(): Observable<any> {
    return this.http.get(endpoint + 'parts').pipe(
      map(this.extractData));
  }

  getPart(id: string): Observable<any> {
    return this.http.get(endpoint + 'parts/' + id).pipe(
      map(this.extractData));
  }

  addPart (part: any): Observable<any> {
    console.log(part);
    return this.http.post<any>(endpoint + 'parts', JSON.stringify(part), httpOptions).pipe(
      // tslint:disable-next-line: no-shadowed-variable
      tap((part) => console.log(`added part w/ id=${part.id}`)),
      catchError(this.handleError<any>('addPart'))
    );
  }

  updatePart (id: string, part: any): Observable<any> {
    return this.http.put(endpoint + 'parts/' + id, JSON.stringify(part), httpOptions).pipe(
      tap(_ => console.log(`updated part id=${id}`)),
      catchError(this.handleError<any>('updatePart'))
    );
  }

  deletePart (id: string): Observable<any> {
    return this.http.delete<any>(endpoint + 'parts/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted part id=${id}`)),
      catchError(this.handleError<any>('deletePart'))
    );
  }

  getClients(): Observable<any> {
    return this.http.get(endpoint + 'clients').pipe(
      map(this.extractData));
  }

  getClient(id: string): Observable<any> {
    return this.http.get(endpoint + 'clients/' + id).pipe(
      map(this.extractData));
  }

  // Error handling
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

/*getProducts(): Observable<any> {
    return this.http.get(endpoint + 'products').pipe(
      map(this.extractData));
  }

  getProduct(id: string): Observable<any> {
    return this.http.get(endpoint + 'products/' + id).pipe(
      map(this.extractData));
  }

  addProduct (product: any): Observable<any> {
    console.log(product);
    return this.http.post<any>(endpoint + 'products', JSON.stringify(product), httpOptions).pipe(
      // tslint:disable-next-line: no-shadowed-variable
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }

  updateProduct (id: string, product: any): Observable<any> {
    return this.http.put(endpoint + 'products/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct (id: string): Observable<any> {
    return this.http.delete<any>(endpoint + 'products/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }*/
/* GET
getGlobalParts(): Observable<any> {
  return this.http.get(endpoint + 'globalparts').pipe(
    map(this.extractData));
}*/

  /*// GET
  getCustomers(): Observable<any> {
    return this.http.get(endpoint + 'customers').pipe(
      map(this.extractData));
  }
  // GET
  getCustomer(id: string): Observable<any> {
    return this.http.get(endpoint + 'customers/' + id).pipe(
      map(this.extractData));
  }
  // PUT
  addCustomer (customer: any): Observable<any> {
    console.log(customer);
    return this.http.post<any>(endpoint + 'customers', JSON.stringify(customer), httpOptions).pipe(
      // tslint:disable-next-line: no-shadowed-variable
      tap((customer) => console.log(`added customer w/ id=${customer.id}`)),
      catchError(this.handleError<any>('addCustomer'))
    );
  }
  // PUT
  updateCustomer (id: string, customer: any): Observable<any> {
    return this.http.put(endpoint + 'customers/' + id, JSON.stringify(customer), httpOptions).pipe(
      tap(_ => console.log(`updated customer id=${id}`)),
      catchError(this.handleError<any>('updateCustomer'))
    );
  }
  // DELETE
  deleteCustomer (id: string): Observable<any> {
    return this.http.delete<any>(endpoint + 'customers/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted customer id=${id}`)),
      catchError(this.handleError<any>('deleteCustomer'))
    );
  }*/
