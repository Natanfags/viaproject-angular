import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart-line-component',
  templateUrl: './chart-line-component.component.html',
  styleUrls: ['./chart-line-component.component.css']
})
export class ChartLineComponentComponent implements OnInit {
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
      labels: ['SP'],
      datasets: [

        {
          label: 'Vermelho',
          backgroundColor: '#c11126',
          borderColor: '#600306',
          data: [28]
        }
      ]
    };
  }

}
