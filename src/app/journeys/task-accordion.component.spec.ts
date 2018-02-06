import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAccordionComponent } from './task-accordion.component';

describe('TaskAccordionComponent', () => {
  let component: TaskAccordionComponent;
  let fixture: ComponentFixture<TaskAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
