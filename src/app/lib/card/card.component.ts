import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
    `
      mat-card {
        padding: 16px;
        height: 100%;
      }
    `,
  ],
  imports: [MatCardModule],
})
export class CardComponent {}
