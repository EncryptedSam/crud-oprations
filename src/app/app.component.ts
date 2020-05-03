import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    usersList:User[];
    user:User = new User(null, null, null);

    constructor(private userService:UserService){ }

    ngOnInit(){
      this.getAllUsers();
    }

    getAllUsers(){
      this.userService.getAllUsers().subscribe(
        data => this.usersList = data
      )
    }

    getUserById(uid:number){
      this.userService.getUserById(uid).subscribe(
        data => this.user = data
      )
    }

    deleteUserById(uid:number){
      this.userService.deleteUserById(uid).subscribe(
        (res) => {
          console.log(res);
          this.getAllUsers();
        }
        )
      }
      
    updateUserById(){
      this.userService.updateUser(this.user).subscribe(
        (res)=>{
          this.getAllUsers();       
        }
        )
      }
      
    newUser(){
      this.user.id = this.usersList[this.usersList.length-1].id + 1;

      this.userService.newUser(this.user).subscribe(
        (res)=>{
            this.getAllUsers();
        }
      )
    }

}
