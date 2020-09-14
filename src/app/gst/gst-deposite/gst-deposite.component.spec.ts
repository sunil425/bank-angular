import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstDepositeComponent } from './gst-deposite.component';

describe('GstDepositeComponent', () => {
  let component: GstDepositeComponent;
  let fixture: ComponentFixture<GstDepositeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstDepositeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstDepositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
