import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
 url  = "http://localhost:5050/user"
 //Below URL is working Backend URL
 //url = "https://still-forest-96530.herokuapp.com/user"

 // URL for testing the spring boot app localhost API and Hosted APP Api  
 //url = "http://localhost:8080/getAllData";
 url1 =  "https://springnewap.herokuapp.com/getAllData";
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

  //Delete User Function is not working as backend is not getting email Need check for this
  deleteUserData(data)
  {
    console.log("the deletion key in delete User Data in services is",data)
    return this.http.delete(`${this.url}/${data}`)
  }

  getCurrentUser(key)
  {
     console.warn("the get API data function is called ",key,`${this.url}/${key}`)
     return this.http.get(`${this.url}/${key}`)
  }

  updateUserData(key,data)
  {
     console.warn("the Update API data function is called ",key,`${this.url}/${key}`)
     return this.http.put(`${this.url}/${key}`,data)
  }

  ///////////////////////////////////Getting Charts Data //////////////////////
  getChartsData()
  {
     console.warn("The get charts data function is called")
     return this.http.get(this.url1)
  }

}
