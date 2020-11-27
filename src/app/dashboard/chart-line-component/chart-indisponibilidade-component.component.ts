import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-indisponibilidade-component',
  templateUrl: './chart-indisponibilidade-component.component.html',
  styleUrls: ['./chart-indisponibilidade-component.component.css']
})
export class ChartIndisponibilidadeComponentComponent implements OnInit {
  data: any;
  filters: any;
  selectFilter: string;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {

    this.dashboardService.getIndisponibilidade().subscribe(data => {

      this.data = {
        labels: [data.estado],
        datasets: [

          {
            label: 'Vermelho',
            backgroundColor: '#c11126',
            borderColor: '#600306',
            data: [data.countStatusVermelho]
          }
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
