import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralGstComponent } from './general-gst.component';

describe('GeneralGstComponent', () => {
  let component: GeneralGstComponent;
  let fixture: ComponentFixture<GeneralGstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralGstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralGstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
