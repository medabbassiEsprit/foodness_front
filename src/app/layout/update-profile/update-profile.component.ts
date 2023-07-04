import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/data/storage.service';
import { UserService } from 'src/app/data/user.service';
import User from 'src/app/model/user';
import { Observable } from 'rxjs';
import { DateFormatPipe } from 'src/app/date-format.pipe';



@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
  providers: [DateFormatPipe]
})



export class UpdateProfileComponent implements OnInit {
  allUsers$?: Observable<User[]>;
  user: User = new User(); // Provide the necessary default values
  currentUser: any;


  _id!: any;
  sexe: string[] = ['Femme', 'Homme', 'Others'];

  constructor(
    private userService: UserService,
    private activated: ActivatedRoute,
    private storageService: StorageService
  ) {}


  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    console.log(`idddddddddd:${this.currentUser.id}`);

    this.allUsers$ = this.userService.getAllUsers();

    this.allUsers$.subscribe((users: User[]) => {
      for (let i = 0; i < users.length; i++) {
        if (users[i]._id === this.currentUser.id) {
          //this.convertDate(users[i].dateNaissance);
         // formatDate(users[i].dateNaissance,'dd/MM/yyyy', 'fr');
          this.user = { ...users[i] };


        }
      }
    });
  }
   convertDate(date: Date){
    //  const year = date.getFullYear();
    //  const month = ('0' + (date.getMonth() + 1)).slice(-2);
    //  const day = ('0' + date.getDate()).slice(-2);
    //  return `${year}-${month}-${day}`;
   }

  editUser(user: User) {
    //this.convertDate(user.dateNaissance);
    this.user = { ...user };

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
