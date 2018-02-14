import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core/';
import { LastscreenComponent } from './lastscreen.component';

describe('LastscreenComponent', () => {
  let component: LastscreenComponent;
  let fixture: ComponentFixture<LastscreenComponent>;

  beforeEach(async(() => {
    const LastscreenComponentMock={};

    TestBed.configureTestingModule({
      declarations: [ LastscreenComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide:LastscreenComponent, useValue: LastscreenComponentMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
