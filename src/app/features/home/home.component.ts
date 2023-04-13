import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  images = [
    { url: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp' },
    { url: 'https://mdbcdn.b-cdn.net/img/new/slides/042.webp' },
    { url: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp' }
  ];

}
