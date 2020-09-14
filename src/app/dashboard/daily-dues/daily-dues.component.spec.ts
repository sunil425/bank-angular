import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDuesComponent } from './daily-dues.component';

describe('DailyDuesComponent', () => {
  let component: DailyDuesComponent;
  let fixture: ComponentFixture<DailyDuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyDuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyDuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
