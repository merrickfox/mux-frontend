import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import {HeaderService} from "../header/header.service";

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('blxZlzL6cjm6O40mf9YhMDjTStHuh8l0', 'muxapp.eu.auth0.com', {
    auth: {
      redirect: false
    }
  });

  constructor(private headerService: HeaderService) {
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      this.headerService.onLoggedIn();
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    let loggedIn: boolean = tokenNotExpired();
    if (loggedIn) {
      this.headerService.onLoggedIn();
    } else {
      this.headerService.onLoggedOut();
    }

    return loggedIn;
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    this.headerService.onLoggedOut();
  };
}
