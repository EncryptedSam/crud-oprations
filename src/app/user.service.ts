import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = '/api/users';

  constructor(private http:HttpClient) { }
  
  //-------------------------------------------------------Get  - Read
  //Fetches all users data from db
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }
  
  //Fetches user data from db using id
  getUserById(uid:number):Observable<User>{
    return this.http.get<User>(this.userUrl+"/"+uid);
  }
  
  //-------------------------------------------------------Delete - Delete
  //Deletes user data from db using id
  deleteUserById(uid:number){
    return this.http.delete(this.userUrl+"/"+uid);
  }
  
  //-------------------------------------------------------Put - Update
  //Updates existing user's details
  updateUser(user:User){
    return this.http.put(this.userUrl+"/"+user.id, user);
  }
  
  //-------------------------------------------------------Post - Create
  //Creates a new user
  newUser(user:User){
    return this.http.post(this.userUrl+"/"+user.id, user);
  }

}

// C - Create   - Post
// R - Read     - Get
// U - Update   - Put
// D - Delete   - Delete


//delimeter

//get     - to get the data from db
//delete  - to delete a user from db
//put     - to update the existing user data in db 


//post    - to create a new user in db