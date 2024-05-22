import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatToolbarModule, MatButtonModule],
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

  constructor(private formBuilder: FormBuilder){
    this.formGroup = this.formBuilder.group({
      name: new FormControl(undefined),
      category: new FormControl(undefined)
    })
  }

  courseSave(): void {

  }

  cancel(): void {

  }
}
