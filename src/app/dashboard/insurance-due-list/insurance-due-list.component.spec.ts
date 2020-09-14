import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceDueListComponent } from './insurance-due-list.component';

describe('InsuranceDueListComponent', () => {
  let component: InsuranceDueListComponent;
  let fixture: ComponentFixture<InsuranceDueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceDueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceDueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
