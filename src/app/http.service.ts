import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private apollo: Apollo) { }

  getCurrency(currency: string) {
    return this.apollo.watchQuery({
      query: gql`${currency}`
    }).valueChanges;
  }

  getCurrencyV2(currency: string) {
    return this.apollo.watchQuery({
      query: gql`{
        rates(currency: "${currency}" ) {
          currency
          rate
        }
      }`
    }).valueChanges;
  }
}
