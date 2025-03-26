import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-demo',
  templateUrl: './api-demo.component.html',
  styleUrls: ['./api-demo.component.css']
})
export class ApiDemoComponent {
  helloMessage: string = '';
  greetMessage: string = '';
  welcomeMessage: string = '';

  greetName: string = '';
  welcomeName: string = '';

  constructor(private http: HttpClient) {}

  callHello() {
    this.http.get('/api/hello', { responseType: 'text' }).subscribe(
      response => this.helloMessage = response,
      error => console.error(error)
    );
  }

  callGreet() {
    this.http.get(`/api/greet?name=${encodeURIComponent(this.greetName)}`, { responseType: 'text' })
      .subscribe(
        response => this.greetMessage = response,
        error => console.error(error)
      );
  }

  callWelcome() {
    let url = '/api/welcome';
    if(this.welcomeName) {
      url += `?name=${encodeURIComponent(this.welcomeName)}`;
    }
    this.http.get(url, { responseType: 'text' }).subscribe(
      response => this.welcomeMessage = response,
      error => console.error(error)
    );
  }
}