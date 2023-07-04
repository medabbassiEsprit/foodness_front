import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/data/user.service';
import User from 'src/app/model/user';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {
  allUsers !: User[] ;
  userId: any;


  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {

    
  }

  ngOnInit(): void {

    this.userService.getAllUsers()
      .subscribe(
        (data: User[] )=> {
          this.allUsers = data;
          console.log(this.allUsers);

        },
        error => {
          console.error('Failed to get all users:', error);
        }
      );


  }

  onDeleteUser(user: User) {
    this.userService.deleteUser(user._id)
      .subscribe(
        () => {
          // Success
          console.log('User deleted successfully.');
          this.allUsers = this.allUsers.filter(u => u._id !== user._id);
        },
        error => {
          // Error
          console.error('Failed to delete user:', error);
        }
      );
  }

}
