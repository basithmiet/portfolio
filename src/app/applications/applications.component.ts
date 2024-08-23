import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [],
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.scss'
})
export class ApplicationsComponent {
  constructor(private router: Router) {}

  navigateToShoppingCart() {
    this.router.navigate(['/applications/shopping-cart']);
  }
}
