import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/data/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  token: string;
  password: string;
  errorMessage: string;
  successMessage: string;

  constructor(private authService: AuthService) {
    this.token = '';
    this.password = '';
    this.errorMessage = '';
    this.successMessage = '';

  }

  onSubmit() {
    this.authService.resetPassword(this.token, this.password).subscribe(
      () => {
        this.successMessage = 'Password reset successful.';
        window.location.href = '/login';
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }

  ngOnInit(): void {}
}
