import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Course } from 'src/app/routes/courses/models';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CardComponent } from '../card/card.component';
import { Observable } from 'rxjs';

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
  imports: [MatTableModule, CommonModule, SpinnerComponent, CardComponent],
})
export class TableComponent {
  @Input()
  headers: string[] = [];

  @Input()
  data$ = new Observable<Course[]>();

  @Input()
  loading = true;
}
