import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ActivatedRoute}  from '@angular/router';
import { UserServiceService } from '../user-service.service'

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  alert : boolean = false;

  updateUser = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    userType: new FormControl(''),
    companyId: new FormControl('5fb60fefd825673314d2e1b0'),
    password: new FormControl('')

  })

  constructor(private route : ActivatedRoute , private user : UserServiceService) { }

  ngOnInit(): void {
    console.warn("The Key for updating is",this.route.snapshot.params.email)
    this.user.getCurrentUser(this.route.snapshot.params.email).subscribe(result=>{
      console.warn("the result of get current user function",result["data"][0].name)
      this.updateUser = new FormGroup({
        name: new FormControl(result["data"][0].name),
        mobile: new FormControl(result["data"][0].mobile),
        userType: new FormControl(result["data"][0].userType),
        password: new FormControl(result["data"][0].password)
    
      })
    })
  }

  collect()
  {
    console.log("the update user details are",this.updateUser.value)
    this.user.updateUserData(this.route.snapshot.params.email,this.updateUser.value).subscribe(result=>{
      console.warn("the result of get current user function",result["data"])
      this.alert=true;
      console.log("the alert value is",this.alert)
     
    })
  }

 closeAlert()
  {
    this.alert=false
  }

}
