import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert : boolean = false;

  registerUser = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    mobile: new FormControl('')

  })

  constructor(private user: UserServiceService) { }

  ngOnInit(): void {
  }

  register() {
    console.warn("The data that is recieved from the form is ", this.registerUser.value)
    
    this.user.saveUser(this.registerUser.value).subscribe((result)=>{
      console.warn("the result of register user API is ",result);
      this.alert=true;
      this.registerUser.reset({})

    })
  }

  closeAlert()
  {
    this.alert=false
  }



}
