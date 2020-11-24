import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private _route: Router) {
  }

  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit(): void {

    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home']},
      {label: 'Dashboard', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/dashboard']},
    ];
  }
}
