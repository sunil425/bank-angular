import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DataTablesModule} from 'angular-datatables';


import { Routes, RouterModule } from '@angular/router';
import { DailyDuesComponent } from './daily-dues/daily-dues.component';
import { WeeklyDuesComponent } from './weekly-dues/weekly-dues.component';
import { MonthlyDuesComponent } from './monthly-dues/monthly-dues.component';
import { InsuranceDueListComponent } from './insurance-due-list/insurance-due-list.component';
import { CashBankReportComponent } from './cash-bank-report/cash-bank-report.component';
import { AccountsOpnedTodayComponent } from './accounts-opned-today/accounts-opned-today.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';


import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';





const childRoutes:Routes=[

{path:'' ,component:DashboardComponent ,children:[

  
  
  {path:'',redirectTo:'daily-dues',pathMatch:'full'},
  {path:'daily-dues',component:DailyDuesComponent},

  { path: 'weekly-dues', component: WeeklyDuesComponent },
  { path: 'monthly-dues', component: MonthlyDuesComponent },
  { path: 'accounts-opened-today', component: AccountsOpnedTodayComponent},
  { path: 'cash-bank-report', component: CashBankReportComponent },
  { path: 'insurance-due-list', component: InsuranceDueListComponent },
  {path: 'scheme' ,loadChildren:() => import('./scheme/scheme.module').then(m=>m.SchemeModule) }



]}


]


@NgModule({
  declarations: [DashboardComponent,DailyDuesComponent,WeeklyDuesComponent,AccountsOpnedTodayComponent,MonthlyDuesComponent,CashBankReportComponent,InsuranceDueListComponent],
  imports: [
   
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    
    RouterModule.forChild(childRoutes),
    CommonModule

  ],


}
)
export class DashboardModule { }
