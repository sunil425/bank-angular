import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

{path : '' , redirectTo:'/dashboard' , pathMatch:'full'},

 { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},

{path:'super-admin', loadChildren:() =>import('./super-admin/super-admin.module').then(m=>m.SuperAdminModule)},

{path:'gst', loadChildren:() =>import('./gst/gst.module').then(m=>m.GstModule)},



{path:'mad', loadChildren:() =>import('./mad/mad.module').then(m=>m.MadModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
