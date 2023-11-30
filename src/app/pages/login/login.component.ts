import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  validateForm(event: Event): void {
    event.preventDefault();

    // Reset error messages
    // ...

    // Get values from the form
    const email = (<HTMLInputElement>document.getElementById("email")).value;
    const password = (<HTMLInputElement>document.getElementById("password")).value;

    // Validate email
    // ...

    // Your authentication logic goes here
    // ...
  }
}
/*

// login.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  validateForm(event: Event): void {
    event.preventDefault();

    // Reset error messages
    // ...

    // Get values from the form
    const email = (<HTMLInputElement>document.getElementById("email")).value;
    const password = (<HTMLInputElement>document.getElementById("password")).value;

    // Validate email
    // ...

    // Your authentication logic goes here
    // ...
  }

  isValidEmail(email: string): boolean {
    // A simple email validation using a regular expression
    // ...
  }
}
*/