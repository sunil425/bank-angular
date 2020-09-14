import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AgGridModule} from 'ag-grid-angular'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModalComponent } from './shared/account-modal/account-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';





@NgModule({
  declarations: [
    AppComponent,
    AccountModalComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DataTablesModule,
    AgGridModule.withComponents([]),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
