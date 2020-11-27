import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-chart-status-component',
  templateUrl: './chart-status-component.component.html',
  styleUrls: ['./chart-status-component.component.css']
})
export class ChartStatusComponentComponent implements OnInit {
  data: any;
  filters: any;
  selectFilter: string;

  constructor(private dashBoardService: DashboardService) {
  }

  ngOnInit(): void {

    this.dashBoardService.getAllStatusCounted().subscribe(allStatusCounted => {
      this.data = {
        datasets: [{
          data: [allStatusCounted.statusVermelho, allStatusCounted.statusVerde, allStatusCounted.getStatusAmarelo],
          backgroundColor: [
            '#ba082d',
            '#50c639',
            '#FFCE56',
          ],
          label: 'Status'
        }],
        labels: [
          'Vermelho',
          'Verde',
          'Amarelo',
        ]
      };
    });

    this.filters = [
      {name: 'São Paulo', code: 'SP'},
      {name: 'Minas Gerais', code: 'MG'},
      {name: 'Paraná', code: 'PR'},
      {name: 'Santa Catarina', code: 'SC'},
      {name: 'Mato Grosso', code: 'MS'}
    ];
  }

}
