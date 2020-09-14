import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingAndCurrentComponent } from './saving-and-current.component';

describe('SavingAndCurrentComponent', () => {
  let component: SavingAndCurrentComponent;
  let fixture: ComponentFixture<SavingAndCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingAndCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingAndCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
