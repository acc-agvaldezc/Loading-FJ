import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core/';
import { JourneysService } from '../services/journeys.service';
import { AuthService } from '../services/auth.service';


import { GraficoComponent } from './grafico.component';

fdescribe('GraficoComponent', () => {
  let component: GraficoComponent;
  let fixture: ComponentFixture<GraficoComponent>;

  beforeEach(async(() => {
  const journeyServiceMock = {};
  const authServiceMock = {};

    TestBed.configureTestingModule({
      declarations: [ GraficoComponent ],
      schemas: [ NO_ERRORS_SCHEMA],
      providers: [
        { provide: JourneysService, useValue: journeyServiceMock },
        { provide: AuthService, useValue: authServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should followTask works', () => {
    component.journeyCurrent = 'Prueba'
    component.followTask('Prueba');
    expect(component.journeyCurrent).toEqual('Prueba');
  });
  it('should ngOnChanges works', () => {
    component.journeyCompletePercent = 20;
    component.pieChartData = [ ];
    component.ngOnChanges();
    expect(component.pieChartData).toEqual([20,80]);
  });
  it('should yo works on true', () => {
    const spy = spyOn(component, 'tu')
    component.yo(123);
    expect(spy).toHaveBeenCalled();
  });
  it('should yo works on false', () => {
    const spy = spyOn(component, 'tu')
    component.yo(false);
    expect(spy).not.toHaveBeenCalled();
  });
});
