import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStatusComponentComponent } from './chart-polar-component.component';

describe('ChartPolarComponentComponent', () => {
  let component: ChartStatusComponentComponent;
  let fixture: ComponentFixture<ChartStatusComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartStatusComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStatusComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
