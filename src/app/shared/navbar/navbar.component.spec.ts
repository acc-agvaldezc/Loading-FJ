import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core/';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    const NavbarComponentMock = {};
  
      TestBed.configureTestingModule({
        declarations: [ NavbarComponent ],
        schemas: [ NO_ERRORS_SCHEMA],
        providers: [
          { provide: NavbarComponent, useValue: NavbarComponentMock },
        ]
      })
      .compileComponents();
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
