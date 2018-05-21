import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'https://restcountries.eu/rest/v2/region/';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getPaises(continente) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+continente).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
