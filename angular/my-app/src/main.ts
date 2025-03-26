import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient() // <--- Abilita l'uso dell'HttpClient in tutta l'app
  ]
})
.catch(err => console.error(err));

