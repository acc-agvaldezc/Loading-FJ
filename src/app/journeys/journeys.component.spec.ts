import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core/';
import { JourneysComponent } from './journeys.component';

describe('JourneysComponent', () => {
  let component: JourneysComponent;
  let fixture: ComponentFixture<JourneysComponent>;

  beforeEach(async(() => {
    const JourneysComponentMock={};

    TestBed.configureTestingModule({
      declarations: [ JourneysComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide:JourneysComponent, useValue: JourneysComponentMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
