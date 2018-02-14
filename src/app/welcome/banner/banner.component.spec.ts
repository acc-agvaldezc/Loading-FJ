import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core/';
import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async(() => {
    const BannerComponentMock = {};
  
      TestBed.configureTestingModule({
        declarations: [ BannerComponent ],
        schemas: [ NO_ERRORS_SCHEMA],
        providers: [
          { provide: BannerComponent, useValue: BannerComponentMock },
        ]
      })
      .compileComponents();
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should alert works', () => {
    component.alertLogin 
    expect(component.alertLogin).toBeTruthy;
  });
});
