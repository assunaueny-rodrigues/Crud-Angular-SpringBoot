import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from 'src/app/lib/toolbar/toolbar.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
    `
      main {
        padding: 0px 32px 32px 32px;
        height: 90vh;
        overflow-y: scroll;
      }
    `,
  ],
  imports: [ToolbarComponent, RouterModule, CommonModule, MatCardModule],
})
export class LayoutComponent {}
