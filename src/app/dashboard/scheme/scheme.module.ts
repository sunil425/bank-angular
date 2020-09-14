import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemeComponent } from './scheme.component';
import { FixedAndMiscComponent } from './fixed-and-misc/fixed-and-misc.component';
import { RecurringComponent } from './recurring/recurring.component';
import { SavingAndCurrentComponent } from './saving-and-current/saving-and-current.component';
import { LoanComponent } from './loan/loan.component';
import { DefaultComponent } from './default/default.component';
import { DdsComponent } from './dds/dds.component';
import { CcComponent } from './cc/cc.component';
import { Routes, RouterModule } from '@angular/router';

const ChildRoutes: Routes = [
  {path: '', component: SchemeComponent, children: [
    {path: '', redirectTo: 'cc', pathMatch: 'full'},
    {path: 'cc', component: CcComponent},
    {path: 'dds', component: DdsComponent},
    {path: 'default', component: DefaultComponent},
    {path: 'fixed-and-misc', component: FixedAndMiscComponent},
    {path: 'loan', component: LoanComponent},
    {path: 'recurring', component: RecurringComponent},
    {path: 'saving-and-current', component: SavingAndCurrentComponent},
  ]
}
];

@NgModule({
  declarations: [SchemeComponent, FixedAndMiscComponent, RecurringComponent, SavingAndCurrentComponent, LoanComponent, DefaultComponent, DdsComponent, CcComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ChildRoutes)
  ]
})
export class SchemeModule { }
