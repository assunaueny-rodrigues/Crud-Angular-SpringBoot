import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './course-form-component.html',
  styles: [`
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseFormComponent { }
