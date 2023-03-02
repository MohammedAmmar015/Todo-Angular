import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  icons = [
    'fa-solid fa-gear',
    'fa-solid fa-question',
    'fa-solid fa-bullhorn',
    'fa-regular fa-user'
  ]
}
