import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedAndMiscComponent } from './fixed-and-misc.component';

describe('FixedAndMiscComponent', () => {
  let component: FixedAndMiscComponent;
  let fixture: ComponentFixture<FixedAndMiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedAndMiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedAndMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
