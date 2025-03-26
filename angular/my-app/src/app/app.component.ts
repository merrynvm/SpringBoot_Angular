import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  helloMessage = '';
  greetMessage = '';
  welcomeMessage = '';

  greetName = '';
  welcomeName = '';

  constructor(private http: HttpClient) {}

  callHello() {
    this.http.get('/api/hello', { responseType: 'text' }).subscribe({
      next: data => this.helloMessage = data,
      error: err => console.error('Errore in /api/hello:', err)
    });
  }

  callGreet() {
    const url = `/api/greet?name=${encodeURIComponent(this.greetName)}`;
    this.http.get(url, { responseType: 'text' }).subscribe({
      next: data => this.greetMessage = data,
      error: err => console.error('Errore in /api/greet:', err)
    });
  }

  callWelcome() {
    let url = '/api/welcome';
    if (this.welcomeName) {
      url += `?name=${encodeURIComponent(this.welcomeName)}`;
    }
    this.http.get(url, { responseType: 'text' }).subscribe({
      next: data => this.welcomeMessage = data,
      error: err => console.error('Errore in /api/welcome:', err)
    });
  }
}