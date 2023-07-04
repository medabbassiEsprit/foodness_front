import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/data/user.service';
import User from 'src/app/model/user';

@Component({
  selector: 'app-update-dash',
  templateUrl: './update-dash.component.html',
  styleUrls: ['./update-dash.component.css']
})
export class UpdateDashComponent implements OnInit {
  allUsers$?: Observable<User[]>;
  allUsers !: User[];
  user!: User;

  editForm: any = {
    username: '',
    email: null,
    roles:[],
    status:[]
  };
  roles: string[] = ['user', 'association', 'restaurant'];
  status: string[] = ['Active', 'Pending'];

  constructor( private userService:UserService, private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(params => {
      this.user = this.allUsers[+params.get('_id')!];
      this.getProfile(this.user);
    });


    }

    getProfile(user: User) {
      this.userService.getUserById(user._id)
      .subscribe(
        () => {
          // Success
          console.log('User get successfully.');
          this.allUsers$ = this.userService.getUserById(user._id);
        },
        error => {
          // Error
          console.error('Failed to get user:', error);
        }
      );
  }
  saveUser() {
    if (this.user._id) {
      this.userService.updateUser(this.user._id, this.user).subscribe(
        response => {
          console.log(response);
          console.log(this.user);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
