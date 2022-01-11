import { Component, OnInit } from '@angular/core';
import { FlightsInfoService } from 'src/app/services/flights-info.service';

@Component({
  selector: 'app-flight-price-trends',
  templateUrl: './flight-price-trends.component.html',
  styleUrls: ['./flight-price-trends.component.scss']
})
export class FlightPriceTrendsComponent implements OnInit {

  constructor(private flightInfoService : FlightsInfoService) { }
  data = [];

  ngOnInit(): void {
    this.flightInfoService.
    getFlightPriceTrends()
    .subscribe(({data} : any) => this.data )
    console.log(this.data)
  }
  
}
