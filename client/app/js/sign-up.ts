import { Component } from 'angular2/angular2';
import { Http, Response, Headers } from 'angular2/http';

@Component({
  selector: 'sign-up',
  templateUrl: 'app/html/sign-up.html'
})

class SignUp {
  http:Http;
  postResponse:String;

  constructor(http:Http) {
    this.http = http;
    console.log('register...');
    http.get('./auth/register').map(res => res.json());
  }

  public username = '';
  public password = '';

  register() {
    console.log('register...');
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('./auth/register', JSON.stringify({firstName: 'Joe', lastName: 'Smith'}), {headers: headers})
      .map((res:String) => {
        return res;
      })
      .subscribe((res:String) => {
        this.postResponse = res;
      });

  }
}

class Person {
  firstName:string;
  lastName:string;
}

export default SignUp;
