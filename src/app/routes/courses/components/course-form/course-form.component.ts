import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoursesService } from '../../services/courses.service';
import { SubscriptionManager } from 'src/app/lib/core/subscription-manager/subscription-manager';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatToolbarModule, MatButtonModule, MatSelectModule],
  templateUrl: './course-form-component.html',
  styles: [`
    mat-card {
      gap: 8px;
      max-width: 80%;
      margin: 2em auto;
      min-width: 150px;
    }

    .full-width {
      width: 100%;
    }

    mat-card-actions {
      width: 100%;
      justify-content: right;
      gap: 16px;
      padding: 0 16px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseFormComponent {

  formGroup: FormGroup;

  readonly subscriptionManager = new SubscriptionManager();

  constructor(
    private formBuilder: FormBuilder,
    private readonly courseService: CoursesService,
    private readonly alertService: AlertService,
    private readonly location: Location
  ){
      this.formGroup = this.formBuilder.group({
      name: new FormControl(undefined),
      category: new FormControl(undefined)
    })
  }

  courseSave(): void {
    this.courseService.addCourse(this.formGroup.value).pipe(this.subscriptionManager.takeUntilAlive).subscribe({
      next: this.returnToHome,
      error: this.alertService.showErrorMessage
    })
  }

  returnToHome = (): void => {
    this.location.back();
    this.alertService.showSuccessMessage('Curso cadastrado com sucessso!')
  }

  cancel(): void {
    this.location.back();
  }
}
