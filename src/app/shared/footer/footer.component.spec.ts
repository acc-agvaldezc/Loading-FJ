import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core/';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    const FooterComponentMock = {};
  
      TestBed.configureTestingModule({
        declarations: [ FooterComponent ],
        schemas: [ NO_ERRORS_SCHEMA],
        providers: [
          { provide: FooterComponent, useValue: FooterComponentMock },
        ]
      })
      .compileComponents();
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
