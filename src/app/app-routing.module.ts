import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './components/forTest/first/first.component';
import { SecondComponent } from './components/forTest/second/second.component';
import { ThirdComponent } from './components/forTest/third/third.component';
import { CalendarOfPricesComponent } from './components/calendar-of-prices/calendar-of-prices.component';
import { FlightPriceTrendsComponent } from './components/flight-price-trends/flight-price-trends.component';

export const routes: Routes = [
  { path: '', component: FirstComponent, data: { tab: 'First' } },
  { path: 'second', component: SecondComponent, data: { tab: 'Second' } },
  { path: 'third', component: ThirdComponent, data: { tab: 'Third' } },
  {
    path: 'calendar',
    component: CalendarOfPricesComponent,
    data: { tab: 'Calendar of prices' },
  },
  { path : 'trends', component: FlightPriceTrendsComponent, data:{ tab : 'Flight price trends'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
