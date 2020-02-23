import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/admin/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() { }

  clickLogOut() {
    this.userService.logOut();
  }

}
