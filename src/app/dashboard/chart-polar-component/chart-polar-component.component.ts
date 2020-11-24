import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart-polar-component',
  templateUrl: './chart-polar-component.component.html',
  styleUrls: ['./chart-polar-component.component.css']
})
export class ChartPolarComponentComponent implements OnInit {
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
      datasets: [{
        data: [
          11,
          16,
          7,
        ],
        backgroundColor: [
          '#ba082d',
          '#50c639',
          '#FFCE56',
        ],
        label: 'Status'
      }],
      labels: [
        'Red',
        'Green',
        'Yellow',
      ]
    };
  }

}
