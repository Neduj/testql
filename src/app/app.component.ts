import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {currencyUAH, currencyUSD} from './gql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usdData: any;
  uahData: any;
  aedData: any;
  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.usdData = this.httpService.getCurrency(currencyUSD);
    this.uahData = this.httpService.getCurrency(currencyUAH);
    this.aedData = this.httpService.getCurrencyV2('AED');
  }
}
