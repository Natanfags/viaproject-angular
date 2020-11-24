import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart-bar-component',
  templateUrl: './chart-bar-component.component.html',
  styleUrls: ['./chart-bar-component.component.css']
})
export class ChartBarComponentComponent implements OnInit {
  data: any;
  filters: any;
  selectFilter: string;

  constructor() {
  }

  ngOnInit(): void {

    this.filters = [
      {name: 'São Paulo', code: 'SP'},
      {name: 'Minas Gerais', code: 'MG'},
      {name: 'Paraná', code: 'PR'},
      {name: 'Santa Catarina', code: 'SC'},
      {name: 'Mato Grosso', code: 'MS'}
    ];

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
