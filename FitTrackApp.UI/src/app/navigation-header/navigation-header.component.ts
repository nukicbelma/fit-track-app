import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrl: './navigation-header.component.css'
})
export class NavigationHeaderComponent {
  constructor(
    private router: Router
  ) {}
}
