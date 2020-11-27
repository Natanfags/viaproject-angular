import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-chart-all-status-component',
  templateUrl: './chart-all-status-component.component.html',
  styleUrls: ['./chart-all-status-component.component.css']
})
export class ChartAllStatusComponentComponent implements OnInit {
  data: any;
  filters: any;
  selectFilter: string;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {

    this.dashboardService.getAllStatusServicos().subscribe(allStatus => {

      const estados = allStatus.map(a => a.estado);
      const statusVerde = allStatus.map(a => a.statusVerde);
      const statusVermelho = allStatus.map(a => a.statusVermelho);
      const statusAmarelo = allStatus.map(a => a.statusAmarelo);

      this.data = {
      //TODO otimizar dados e deixar funcional
        labels: [estados[0], estados[1], estados[2], estados[3], estados[4], estados[5], estados[6], estados[7], estados[8], estados[9],
          estados[10], estados[11], estados[12], estados[13], estados[14]],
        datasets: [
          {
            label: 'Verde',
            backgroundColor: '#07cb28',
            borderColor: '#01470a',
            data: [statusVerde[0], statusVerde[1], statusVerde[2], statusVerde[3], statusVerde[4], statusVerde[5], statusVerde[6],
              statusVerde[7], statusVerde[8], statusVerde[9], statusVerde[10], statusVerde[11], statusVerde[12], statusVerde[13],
              statusVerde[14]]
          },
          {
            label: 'Vermelho',
            backgroundColor: '#c11126',
            borderColor: '#600306',
            data: [statusVermelho[0], statusVermelho[1], statusVermelho[2], statusVermelho[3], statusVermelho[4], statusVermelho[5],
              statusVermelho[6], statusVermelho[7], statusVermelho[8], statusVermelho[9], statusVermelho[10], statusVermelho[11],
              statusVermelho[12], statusVermelho[13], statusVermelho[14]]
          },
          {
            label: 'Amarelo',
            backgroundColor: '#eeca0c',
            borderColor: '#7c6304',
            data: [statusAmarelo[0], statusAmarelo[1], statusAmarelo[2], statusAmarelo[3], statusAmarelo[4], statusAmarelo[5],
              statusAmarelo[6], statusAmarelo[7], statusAmarelo[8], statusAmarelo[9], statusAmarelo[10], statusAmarelo[11],
              statusAmarelo[12], statusAmarelo[13], statusAmarelo[14]]
          },
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
