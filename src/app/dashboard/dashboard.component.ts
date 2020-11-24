import {Component, OnInit} from '@angular/core';
import {DashboardService} from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;

  constructor(private dataService: DashboardService) {
  }

  ngOnInit(): void {

    // this.dataService.getData().subscribe(data => {
    //   this.data = data;
    // });

    this.data = {
      labels: ['SP', 'MG', 'PR', 'SC', 'MS', 'RS', 'RJ', 'PE', 'AM', 'PI', 'PA', 'TO', 'GO', 'BA', 'SVAN'],
      datasets: [
        {
          label: 'Verde',
          backgroundColor: '#07cb28',
          borderColor: '#01470a',
          data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40]
        },
        {
          label: 'Vermelho',
          backgroundColor: '#c11126',
          borderColor: '#600306',
          data: [28, 48, 40, 19, 86, 27, 90, 86, 27, 90, 86, 27, 90, 86, 27, 90, 86]
        },
        {
          label: 'Amarelo',
          backgroundColor: '#eeca0c',
          borderColor: '#7c6304',
          data: [28, 48, 40, 19, 86, 27, 90, 86, 27, 90, 86, 27, 90, 86, 27, 90, 86]
        },
      ]
    };
  }
}

