import { Injectable } from '@angular/core';
import { Headers} from '@angular/http';


@Injectable()
export class HeaderService {

  token: string;
  headers:Headers;

  onLoggedIn () {
    this.token = localStorage.getItem('id_token');
    this.headers = new Headers({
      'X-auth': this.token
    });
  }

  onLoggedOut () {
    this.headers = new Headers({});
  }

  getHeaders () {
    return this.headers;
  }
}
