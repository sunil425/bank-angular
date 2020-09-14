import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsOpnedTodayComponent } from './accounts-opned-today.component';

describe('AccountsOpnedTodayComponent', () => {
  let component: AccountsOpnedTodayComponent;
  let fixture: ComponentFixture<AccountsOpnedTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsOpnedTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsOpnedTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
