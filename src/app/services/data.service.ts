import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class DataService {




  private userIdSource = new BehaviorSubject<any>('');
  currentUser = this.userIdSource.asObservable();



  constructor() { }

  setUser(userid: any) {
    this.userIdSource.next(userid)
  }

   
}
    
    


