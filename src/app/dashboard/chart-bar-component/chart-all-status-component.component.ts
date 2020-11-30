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

    this.dashboardService.getAllStados().subscribe(estados => {
      const map = estados.map(a => ({name: a}));
      this.filters = [
        ...map
      ];
    });

    this.dashboardService.getAllStatusServicos().subscribe(allStatus => {

      const estados = allStatus.map(a => a.estado);
      const statusVerde = allStatus.map(a => a.statusVerde);
      const statusVermelho = allStatus.map(a => a.statusVermelho);
      const statusAmarelo = allStatus.map(a => a.statusAmarelo);

      this.data = {
        labels: [...estados],
        datasets: [
          {
            label: 'Verde',
            backgroundColor: '#07cb28',
            borderColor: '#01470a',
            data: [...statusVerde]
          },
          {
            label: 'Vermelho',
            backgroundColor: '#c11126',
            borderColor: '#600306',
            data: [...statusVermelho]
          },
          {
            label: 'Amarelo',
            backgroundColor: '#eeca0c',
            borderColor: '#7c6304',
            data: [...statusAmarelo]
          },
        ]
      };
    });
  }

}
