import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../_service/user.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems = [];
  // DataExpert:any;
  constructor(
    private router: Router,
    private UserService: UserService,
  ) { }

  ngOnInit(): void {

    // this.DataExpert = JSON.parse(localStorage.getItem('Expert_Details'));

    this.menuItems = [  {
      name: "Users",
      icon: "person",
      route: "userlist",
      active: true
      },
      {
        name: "Service",
        icon: "person",
        route: "servicelist",
        active: false
      },
      {
        name: "Booking",
        icon: "person",
        route: "bookinglist",
        active: false
      }
     
     
  
    ]
  }

}
