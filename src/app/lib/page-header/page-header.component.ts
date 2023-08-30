import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styles: [
    `
      mat-toolbar {
        position: sticky;
        top: 0;
        z-index: 1;
      }
    `,
  ],
  imports: [CommonModule, MatToolbarModule],
})
export class PageHeaderComponent {
  @Input()
  pageTitle: string = '';
}
