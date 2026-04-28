import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app'; // Upewnij się, że tu jest 'App', a nie 'AppComponent'

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));