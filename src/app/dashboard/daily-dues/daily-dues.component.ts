import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as $ from 'jquery'
import "datatables.net"

import "datatables.net-dt"
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-daily-dues',
  templateUrl: './daily-dues.component.html',
  styleUrls: ['./daily-dues.component.css']
})
export class DailyDuesComponent implements OnInit {

  public data = [
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
];
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};

  

    
  userId:[];
  constructor(private dataService:DataService,private chRef: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

    this.getUser();
console.log(this.userId)




  }



  getUser() {
    this.dataService.currentUser.subscribe(user => {
      this.userId = user
      console.log(this.userId)
    }, err => {
      console.log(err);
    });
  }

}
