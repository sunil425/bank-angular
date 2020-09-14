import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentCadresComponent } from './agent-cadres.component';

describe('AgentCadresComponent', () => {
  let component: AgentCadresComponent;
  let fixture: ComponentFixture<AgentCadresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentCadresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentCadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
