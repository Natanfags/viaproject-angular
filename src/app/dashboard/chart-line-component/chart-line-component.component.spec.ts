import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLineComponentComponent } from './chart-line-component.component';

describe('ChartLineComponentComponent', () => {
  let component: ChartLineComponentComponent;
  let fixture: ComponentFixture<ChartLineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartLineComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
