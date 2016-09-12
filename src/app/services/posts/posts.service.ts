import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {HeaderService} from "../header/header.service";

@Injectable()
export class PostsService {
  private postsUrl = 'https://fug6028wqj.execute-api.eu-west-1.amazonaws.com/dev/posts';  // move to some consts
  constructor(private http: Http, private headersService: HeaderService) { }

  getPosts () {
    return this.http.get(this.postsUrl, {headers: this.headersService.getHeaders()})
      .map(this.extractData)
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.Items || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
