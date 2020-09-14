import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffInactiveComponent } from './staff-inactive.component';

describe('StaffInactiveComponent', () => {
  let component: StaffInactiveComponent;
  let fixture: ComponentFixture<StaffInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
