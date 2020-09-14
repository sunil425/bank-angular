import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsaComponent } from './dsa.component';

describe('DsaComponent', () => {
  let component: DsaComponent;
  let fixture: ComponentFixture<DsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
