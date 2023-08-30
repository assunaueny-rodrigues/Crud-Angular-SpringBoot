import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  standalone: true,
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styles: [
    `
      .spinner-content {
        height: 85vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 8px;
      }
    `,
  ],
  imports: [CommonModule, MatProgressSpinnerModule],
})
export class SpinnerComponent {}
