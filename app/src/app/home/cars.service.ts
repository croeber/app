import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';




@Injectable()
export class CarsService {

  constructor(private httpClient: HttpClient) { }
  getCars(): Observable<Array<Car>> {
    return this.httpClient
      .get('/api/v1/examples')
      .pipe(
        map((body: any) =>
          body
        ),
        catchError(() => of())
      );
  }
  getDetails(id: string): Observable<Details> {
    return this.httpClient
      .get<Details>('/api/v1/examples/' + id)
      .pipe(
        map((body: any) =>
          body
        ),
        catchError(() => of())
      );
  }

}
export class Car {
  id: string;
  img: string;
  manufacturer: string;
  model: string;
  price: string;
  quality: Array<QualityIndicator> = [];
  wiki: string;
}
export class Details extends Car {
  constructor() {
    super();
  }
  curbWeight: string;
  engine: string;
  horsePower: string;
  year: string;
  question: string;
  mpg: string;
  seller: string;

}
export class QualityIndicator {
  name: string;
  rating: string;
}
