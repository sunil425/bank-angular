import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MadComponent } from './mad.component';
import { DealerComponent } from './dealer/dealer.component';
import { AgentsComponent } from './agents/agents.component';
import { DsaComponent } from './dsa/dsa.component';
import { MemberInsuranceComponent } from './member-insurance/member-insurance.component';
import { MembersComponent } from './members/members.component';
import { EmployeesComponent } from './employees/employees.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';


const childRoutes: Routes = [
  {
    path: '', component: MadComponent, children: [
      { path: '', redirectTo: 'members', pathMatch: 'full' },



    
      { path: 'agents', component:AgentsComponent  },
     
      { path: 'dealer', component: DealerComponent },
     
      { path: 'members', component: MembersComponent },
     
      { path: 'dsa', component:  DsaComponent},
     
      { path: 'member-insurance', component: MemberInsuranceComponent },
     
      { path: 'employees', component:   EmployeesComponent},



    ]
  }
];

@NgModule({
  declarations: [MadComponent, DealerComponent, AgentsComponent, DsaComponent, MemberInsuranceComponent, MembersComponent, EmployeesComponent],
  imports: [
    CommonModule,
    AgGridModule,
    
    RouterModule.forChild(childRoutes)
  ]
})
export class MadModule { }
