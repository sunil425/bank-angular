import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDuesComponent } from './monthly-dues.component';

describe('MonthlyDuesComponent', () => {
  let component: MonthlyDuesComponent;
  let fixture: ComponentFixture<MonthlyDuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyDuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyDuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
