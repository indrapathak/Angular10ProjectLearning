import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 url  = "http://localhost:5050/user"
  constructor(private http : HttpClient) {}
  getAPIData()
  {
     console.warn("the get API data function is called ")
     return this.http.get(this.url)
  }

  saveUser(data)
  {
    console.warn("The data recieved in the user services",data)
    return this.http.post(this.url,data);
  }

}
