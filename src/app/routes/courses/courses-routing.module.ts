import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { LayoutComponent } from 'src/app/modules/layout/layout.component';
import { CourseFormComponent } from './components/course-form/course-form.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        data: { title: 'Lista de cursos' },
        component: CoursesComponent,
      },
      {
        path: 'new',
        data: { title: 'Adicionar curso' },
        component: CourseFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
