import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Auth } from '../../../services/auth/auth.service';

@Injectable()
export class AuthResolver implements Resolve<any> {
  constructor(
    private auth: Auth
  ) {}

  resolve(route: ActivatedRouteSnapshot): boolean {
    return this.auth.authenticated();
  }
}
