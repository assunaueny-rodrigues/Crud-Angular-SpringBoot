import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { TableComponent } from 'src/app/lib/table/table.component';
import { Course, CourseColumns } from '../models';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from 'src/app/lib/card/card.component';
import { CoursesService } from '../services/courses.service';
import { SubscriptionManager } from 'src/app/lib/core/subscription-manager/subscription-manager';
import { Observable, catchError, delayWhen, of, timer } from 'rxjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageHeaderComponent } from 'src/app/lib/page-header/page-header.component';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/lib/error-dialog/error-dialog.component';

@Component({
  standalone: true,
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styles: [``],
  imports: [
    CommonModule,
    CardComponent,
    TableComponent,
    MatCardModule,
    MatToolbarModule,
    PageHeaderComponent,
    ErrorDialogComponent,
    MatDialogModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnDestroy {
  courses$ = new Observable<Course[]>();
  headers = [CourseColumns.name, CourseColumns.category];

  private readonly subManager = new SubscriptionManager();

  constructor(
    public dialog: MatDialog,
    private readonly coursesService: CoursesService
  ) {
    this.buscarListaDeCursos();
  }

  private buscarListaDeCursos(): void {
    this.courses$ = this.coursesService.listaCursos().pipe(
      catchError(() => {
        this.onError('Erro ao carregar cursos');
        return of([]);
      }),
      this.subManager.takeUntilAlive
    );
  }

  private onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  ngOnDestroy(): void {
    this.subManager.destroy();
  }
}
