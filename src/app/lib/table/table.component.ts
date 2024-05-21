import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Course } from 'src/app/routes/courses/models';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CardComponent } from '../card/card.component';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';

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
  imports: [MatTableModule, CommonModule, SpinnerComponent, CardComponent, MatButtonModule, MatIconModule],
})
export class TableComponent {
  @Input()
  headers: string[] = [];

  @Input()
  data$ = new Observable<Course[]>();

  @Input()
  loading = true;

  constructor(private readonly router: Router, private readonly acivatedRoute: ActivatedRoute){

  }

  onAdd(): void {
    this.router.navigate(['new'], { relativeTo: this.acivatedRoute })
  }
}
