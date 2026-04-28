import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // TA LINIA JEST KLUCZOWA. Bez niej masz błąd NG0908.
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)
  ]
};