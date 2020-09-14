import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorandumApplyComponent } from './memorandum-apply.component';

describe('MemorandumApplyComponent', () => {
  let component: MemorandumApplyComponent;
  let fixture: ComponentFixture<MemorandumApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemorandumApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorandumApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
