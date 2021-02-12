import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUser = new FormGroup({
    name: new FormControl('sdfghj'),
    email: new FormControl(''),
    mobile: new FormControl(''),
    userType: new FormControl(''),
    companyId: new FormControl('5fb60fefd825673314d2e1b0'),
    password: new FormControl('')

  })



  constructor(private user: UserServiceService) { }

  ngOnInit(): void {
  }

  collectUser() {
    console.warn("The data that is recieved from the form is ", this.addUser.value)
    
  }

}
