import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.css']
})
export class FilterComponentComponent implements OnInit {

  @Input() filters: any;
  @Input() selectFilter: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
