import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  clientId = 'DF05CEA37CC742FCA7E5BC965275068B';
  redirectUri = 'http://localhost:4200';

  ngOnInit() {
    this.checkToken();
  }

  loginToSpotify() {
    const scope = 'user-read-private user-read-email';
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=code&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=${encodeURIComponent(scope)}`;
    window.location.href = authUrl;
  }

  checkToken() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      console.log('Kod ze Spotify:', code);
    }
  }
}