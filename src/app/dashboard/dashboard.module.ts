import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {ChartModule} from 'primeng/chart';
import {HomeModule} from '../home/home.module';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DashboardService} from './dashboard.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ChartLineComponentComponent} from './chart-line-component/chart-line-component.component';
import {ChartBarComponentComponent} from './chart-bar-component/chart-bar-component.component';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {FilterComponentComponent} from '../filter-component/filter-component.component';
import {ChartPolarComponentComponent} from './chart-polar-component/chart-polar-component.component';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [DashboardComponent,
    ChartLineComponentComponent,
    ChartBarComponentComponent,
    FilterComponentComponent,
    ChartPolarComponentComponent
  ],
  exports: [DashboardComponent],
  imports: [
    ChartModule,
    CommonModule,
    HomeModule,
    ButtonModule,
    CardModule,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    CalendarModule
  ],
  providers: [DashboardService, HttpClient]
})
export class DashboardModule {
}
