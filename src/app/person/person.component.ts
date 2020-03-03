import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { NgxGalleryThumbnailsComponent } from 'ngx-gallery';
import { Person } from '../_models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
person:Person[];
limit=5;
  constructor(private userService: UserService,
    private alertify: AlertifyService,
    private router: Router
){}

  ngOnInit() {
    this.loadData();
  }
 loadData(){
this.userService.getperson().subscribe((data:any)=>{
  console.log("person data is", data)
  this.person =data;
  console.log("total data is", data.item)
  // take first 2 objects only

});
 }
}
