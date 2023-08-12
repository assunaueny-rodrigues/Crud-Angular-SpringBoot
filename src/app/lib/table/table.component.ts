import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Course } from 'src/app/modules/courses/models';

@Component({
  standalone: true,
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
    `
      table {
        width: 100%;
      }
    `,
  ],
  imports: [MatTableModule, CommonModule],
})
export class TableComponent {
  @Input()
  headers: string[] = [];

  @Input()
  data: Course[] = [];
}
