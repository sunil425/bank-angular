import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeadsComponent } from './top-heads.component';

describe('TopHeadsComponent', () => {
  let component: TopHeadsComponent;
  let fixture: ComponentFixture<TopHeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
