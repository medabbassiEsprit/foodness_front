import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/data/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {


  email: string;

  constructor(private authService: AuthService) {
    this.email = '';
  }

  onSubmit() {
    this.authService.forgetpassword(this.email)
      .subscribe(
        () => {
          window.location.href = '/resetpassword';
        },
        (error) => {
          // Handle error response, display error message, etc.
        }
      );
  }

  ngOnInit(): void {
  }

}
