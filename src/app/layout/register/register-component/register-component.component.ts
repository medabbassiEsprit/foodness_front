import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/data/auth.service';
import User from 'src/app/model/user';


@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null,
    profesion:null,
    dateNaissance:null,
    roles: [],
    file:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  roles: string[] = ['user', 'association', 'restaurant'];
  loading: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
   // this.checkUserRole();
  }

  onSubmit(): void {

    const { username, email, password,profesion,dateNaissance,roles,file } = this.form;

    this.authService.register(username, email, password,profesion,dateNaissance,roles,file).subscribe(
      {
        next: data => {
          (event: any) => {
            if (typeof (event) === 'object') {

                this.loading = false; // Flag variable
            }
           }
          console.log(`roles:${roles}`)
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }

      }
    );
  }
  onChange(event: any) {
    this.form.file= event.target.files[0];
}

}


