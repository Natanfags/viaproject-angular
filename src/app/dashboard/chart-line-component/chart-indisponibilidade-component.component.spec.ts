import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartIndisponibilidadeComponentComponent } from './chart-line-component.component';

describe('ChartLineComponentComponent', () => {
  let component: ChartIndisponibilidadeComponentComponent;
  let fixture: ComponentFixture<ChartIndisponibilidadeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartIndisponibilidadeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartIndisponibilidadeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
