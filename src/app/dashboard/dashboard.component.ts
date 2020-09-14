import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { formatDate } from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import {DataService} from '../services/data.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

user:any
superadmin:boolean=true;
gst:boolean=true;
mad:boolean=true;


 date=new Date();
userDate= '';
today :string =formatDate(this.date,'yyyy-MM-dd','en-US')
date1 = new FormControl(new Date())



  constructor(private http:HttpClient, private dataService:DataService) { }

  ngOnInit() {
    this.getUser();

    console.log(this.today)
    





    $(document).ready(function(){

      $('.super-admin-content a').hide();
      $('.gst-content a').hide();
      $('.mad-content a').hide();


      $("#super-admin").click(function(){
        
        $(".super-admin-content a").slideToggle();

      });


      $("#gst").click(function(){
        
        $(".gst-content a").slideToggle();

      });


      $("#mad").click(function(){
        
        $(".mad-content a").slideToggle();

      });

    });


    






  }


  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
this.userDate=formatDate(event.value,'yyyy-MM-dd','en-US')


console.log(this.userDate)
this.getUser();
}



getUser(){
  return this.http.get('https://jsonplaceholder.typicode.com/users')
  .subscribe(
    data => {
      this.user=data
      this.dataService.setUser(this.user); 


      console.log(this.user)
    },
    error => console.log(error));
}
}
