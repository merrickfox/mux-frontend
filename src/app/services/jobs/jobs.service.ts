import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class JobsService {
  private jobsUrl = 'https://ux2zq2o3q1.execute-api.eu-west-1.amazonaws.com/dev/posts';  // move to some consts
  constructor(private http: Http) { }

  getJobs () {
    return this.http.get(this.jobsUrl)
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
