import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userid:any;
  user:any;
  constructor(private userservice:UserService,private activation:ActivatedRoute){
    this.userid=this.activation.snapshot.params['id']
  }
  ngOnInit(): void {
    this.userservice.getUsersById(this.userid).subscribe((Response)=>{
      this.user=Response;
    })
  }



}
