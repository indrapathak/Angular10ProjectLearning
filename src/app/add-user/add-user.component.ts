import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms' ;

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUser= new FormGroup({
    name : new FormControl(''),
    email : new FormControl('') ,
    mobile : new FormControl(''),
    userType : new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  collectUser()
  {
    console.warn(this.addUser.value)
  }

}
