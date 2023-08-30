import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import { TableComponent } from 'src/app/lib/table/table.component';
import { Course, CourseColumns } from '../models';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from 'src/app/lib/card/card.component';
import { CoursesService } from '../services/courses.service';
import { SubscriptionManager } from 'src/app/lib/core/subscription-manager/subscription-manager';
import { delayWhen, tap, timer } from 'rxjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageHeaderComponent } from 'src/app/lib/page-header/page-header.component';

@Component({
  standalone: true,
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styles: [``],
  imports: [
    CardComponent,
    TableComponent,
    MatCardModule,
    MatToolbarModule,
    PageHeaderComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnDestroy {
  courses: Course[] = [];
  headers = [CourseColumns.name, CourseColumns.category];
  loading = true;

  private readonly subManager = new SubscriptionManager();

  constructor(
    private readonly coursesService: CoursesService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    this.buscarListaDeCursos();
  }

  private buscarListaDeCursos(): void {
    this.coursesService
      .listaCursos()
      .pipe(
        delayWhen(() => timer(3000)),
        tap(() => (this.loading = false)),
        this.subManager.takeUntilAlive
      )
      .subscribe({
        next: this.definirListaDeCursos,
      });
  }

  private definirListaDeCursos = (courses: Course[]): void => {
    this.courses = courses;
    this.changeDetectorRef.detectChanges();
  };

  ngOnDestroy(): void {
    this.subManager.destroy();
  }
}
