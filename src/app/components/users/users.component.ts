import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:any;
constructor(private userservices:UserService){}
ngOnInit(): void {
  this.userservices.getAllUsers().subscribe((response)=>{
this.user=response  })
}

remove(userid:number){
this.userservices.deleteUser(userid).subscribe((Response)=>{
this.user=this.user.filter((user:any)=>{
  return user.id!=userid;
})})
}
}
