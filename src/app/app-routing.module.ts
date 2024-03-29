import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddUserComponent} from './add-user/add-user.component';
import {UpdateUserComponent} from './update-user/update-user.component' ;
import {RegisterComponent} from './register/register.component';
import {LoginComponent}  from './login/login.component';
import {UserListComponent} from './user-list/user-list.component' ;
import {ChartsComponentComponent} from './charts-component/charts-component.component';



const routes: Routes = [
  {
    component : AddUserComponent,
    path : "add"
  },
  {
    component : UpdateUserComponent,
    path : "update/:email"
  },
  {
    component : RegisterComponent,
    path : "register"
  },
  {
    component : LoginComponent,
    path : "login"
  },
  {
    component : ChartsComponentComponent,
    path : "Charts"
  },
  {
    component : UserListComponent,
    path : ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
