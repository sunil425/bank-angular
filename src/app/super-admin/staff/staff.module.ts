import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { StaffActiveComponent } from './staff-active/staff-active.component';
import { StaffInactiveComponent } from './staff-inactive/staff-inactive.component';
import { Routes, RouterModule } from '@angular/router';

const childRoutes: Routes = [
  {
    path: '', component: StaffComponent, children: [
      { path: '', redirectTo: 'active', pathMatch: 'full' },



      
      { path: 'active', component:StaffActiveComponent  },
     
      { path: 'in-active', component:StaffInactiveComponent  },
     
     

      

    ]
  }
];



@NgModule({
  declarations: [StaffComponent, StaffActiveComponent, StaffInactiveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes)
  ]
})
export class StaffModule { }
