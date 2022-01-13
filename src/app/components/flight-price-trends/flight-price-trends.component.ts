import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FlightsInfoService } from 'src/app/services/flights-info.service';
import { RequestDataState } from 'src/app/store/request-data.state';

@Component({
  selector: 'app-flight-price-trends',
  templateUrl: './flight-price-trends.component.html',
  styleUrls: ['./flight-price-trends.component.scss']
})
export class FlightPriceTrendsComponent implements OnInit {

  constructor(private flightInfoService : FlightsInfoService , private store: Store) { }
  data: any = [];
  origin: any = 'LWO';
  destination: any = 'MXP';
  departDate: any = '2022-01';
  returnDate: any = '2022-02';
  currency: any = 'USD';

  ngOnInit(): void {
    // const formData = this.store.selectSnapshot(RequestDataState.formData);
    this.flightInfoService.getFlightPriceTrends(this.origin, this.destination, this.departDate, this.returnDate, this.currency).subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
    });
 }
}
