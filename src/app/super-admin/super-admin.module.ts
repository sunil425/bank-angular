import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin.component';
import { TopHeadsComponent } from './top-heads/top-heads.component';
import { ShareManagementComponent } from './share-management/share-management.component';
import { ContentManagementComponent } from './content-management/content-management.component';
import { ClosingComponent } from './closing/closing.component';
import { AgentCadresComponent } from './agent-cadres/agent-cadres.component';
import { BranchesComponent } from './branches/branches.component';
import { Routes, RouterModule } from '@angular/router';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';


const childRoutes: Routes = [
  {
    path: '', component: SuperAdminComponent, children: [
      { path: '', redirectTo: 'staff', pathMatch: 'full' },



      
      { path: 'branches', component:BranchesComponent  },
     
      { path: 'top-heads', component:TopHeadsComponent  },
     
      { path: 'agent-cardes', component:AgentCadresComponent  },
     
      { path: 'closing', component:ClosingComponent  },
     
      { path: 'content-management', component:ContentManagementComponent  },
     
      { path: 'share-management', component:ShareManagementComponent  },

      {path:'staff', loadChildren:() =>import('./staff/staff.module').then(m=>m.StaffModule)}


    ]
  }
];


@NgModule({
  declarations: [SuperAdminComponent, TopHeadsComponent, ShareManagementComponent, ContentManagementComponent, ClosingComponent, AgentCadresComponent, BranchesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes),

    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
  ]
})
export class SuperAdminModule { }
