import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 url  = "http://localhost:5001/user?companyId=5fb60fefd825673314d2e1b0"
  constructor(private http : HttpClient) {}
  getAPIData()
  {
     console.warn("the get API data function is called ")
     return this.http.get(this.url)
  }

  saveUser(data)
  {
    console.warn("The data recieved in the user service form for add user is",data)
  //  return this.http.post(thi)
  }

}
