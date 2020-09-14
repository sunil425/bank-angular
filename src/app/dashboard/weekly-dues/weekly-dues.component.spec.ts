import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyDuesComponent } from './weekly-dues.component';

describe('WeeklyDuesComponent', () => {
  let component: WeeklyDuesComponent;
  let fixture: ComponentFixture<WeeklyDuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyDuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyDuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
