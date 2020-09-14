import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GstComponent } from './gst.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { GeneralGstComponent } from './general-gst/general-gst.component';
import { GstDepositeComponent } from './gst-deposite/gst-deposite.component';
import { MemorandumApplyComponent } from './memorandum-apply/memorandum-apply.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ReportComponent } from './report/report.component';
import { SupplierComponent } from './supplier/supplier.component';
import { Routes, RouterModule } from '@angular/router';

const childRoutes:Routes=[

  {path:'' ,component:GstComponent ,children:[
  
    
    
    {path:'',redirectTo:'supplier',pathMatch:'full'},
    {path:'supplier',component:SupplierComponent},
  
    { path: 'account-statement', component: AccountStatementComponent },
    { path: 'report', component: ReportComponent },
    { path: 'purchase', component: PurchaseComponent},
    { path: 'general-gst', component: GeneralGstComponent },
    { path: 'gst-deposite', component: GstDepositeComponent },
  
    { path: 'memorandum-apply', component: MemorandumApplyComponent },
  
  ]}
  
  
  ]

@NgModule({
  declarations: [GstComponent, AccountStatementComponent, GeneralGstComponent, GstDepositeComponent, MemorandumApplyComponent, PurchaseComponent, ReportComponent, SupplierComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes)
  ]
})
export class GstModule { }
