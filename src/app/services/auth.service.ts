import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentSession: any; // Assuming you have a variable to store the current session data

  constructor() { }

  getCurrentUserId(): string {
    if (this.currentSession && this.currentSession.user && this.currentSession.user.id) {
      return this.currentSession.user.id;
    } else {
      // Handle the case when the current session or user ID is not available
      return "null";
    }
  }
}
