import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareManagementComponent } from './share-management.component';

describe('ShareManagementComponent', () => {
  let component: ShareManagementComponent;
  let fixture: ComponentFixture<ShareManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
