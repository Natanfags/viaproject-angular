import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPolarComponentComponent } from './chart-polar-component.component';

describe('ChartPolarComponentComponent', () => {
  let component: ChartPolarComponentComponent;
  let fixture: ComponentFixture<ChartPolarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPolarComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPolarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
