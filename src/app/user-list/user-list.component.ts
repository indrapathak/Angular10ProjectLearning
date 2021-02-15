import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service' ;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  collection={}
  constructor(private user:UserServiceService) {}
  ngOnInit(): void {
    this.user.getAPIData().subscribe((data=>{
      console.warn("the data recieved is ",data)
      this.collection=data["data"]
      console.log("collections element" ,this.collection[1].name)
    }))
  }

}
