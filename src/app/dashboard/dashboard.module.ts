import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {ChartModule} from 'primeng/chart';
import {HomeModule} from '../home/home.module';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DashboardService} from './dashboard.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {ChartIndisponibilidadeComponentComponent} from './chart-line-component/chart-indisponibilidade-component.component';
import {ChartAllStatusComponentComponent} from './chart-bar-component/chart-all-status-component.component';
import {ChartStatusComponentComponent} from './chart-polar-component/chart-status-component.component';

@NgModule({
  declarations: [DashboardComponent,
    ChartIndisponibilidadeComponentComponent,
    ChartAllStatusComponentComponent,
    ChartStatusComponentComponent
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
