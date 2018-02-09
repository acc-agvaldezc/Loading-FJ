import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastscreenComponent } from './lastscreen.component';

describe('LastscreenComponent', () => {
  let component: LastscreenComponent;
  let fixture: ComponentFixture<LastscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastscreenComponent ]
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
