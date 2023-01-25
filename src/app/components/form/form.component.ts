import { Component } from '@angular/core';
import {FormGroup , FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

// import { UsersComponent } from '../users/users.component';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userid:any;
  user:any;
constructor(private router:Router , private userservices:UserService, private activatedroute:ActivatedRoute){
  this.userid= this.activatedroute.snapshot.params["id"]
}


loginform= new FormGroup({
name:new FormControl("",[Validators.required,Validators.pattern(/^[a-zA-Z]{4}$/)]),
email:new FormControl("", [Validators.email,Validators.required]),
password:new FormControl("",[ Validators.maxLength(10),Validators.required])
});

get getName(){
 return this.loginform.controls["name"]
}
get getEmail(){
  return this.loginform.controls["email"]
 }
 get getPassword(){
  return this.loginform.controls["password"]
 }

 

 
login(){
  if(this.loginform.status=="VALID"&&this.userid){
    this.userservices.editUser(this.userid,this.loginform.value).subscribe((Response)=>{
      this.userservices.getAllUsers().subscribe((Response)=>{
        this.user=Response
      })
      return this.user
    })
    this.router.navigate(['/user']);
  }
 else if(this.loginform.status=="VALID"){
    this.userservices.addUser(this.loginform.value).subscribe((response)=>{
      this.userservices.getAllUsers().subscribe((Response)=>{
        this.user=Response
      })
      return this.user
    })
      this.router.navigate(['/user']);
    }
  else{
      console.log("error")
    }

  // console.log(this.loginform.value)
  // console.log(this.loginform)

  // console.log(this.getName);
  // console.log(this.getEmail);
  // console.log(this.getPassword);
}
}
