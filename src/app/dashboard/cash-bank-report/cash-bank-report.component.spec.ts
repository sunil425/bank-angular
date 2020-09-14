import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBankReportComponent } from './cash-bank-report.component';

describe('CashBankReportComponent', () => {
  let component: CashBankReportComponent;
  let fixture: ComponentFixture<CashBankReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashBankReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashBankReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
