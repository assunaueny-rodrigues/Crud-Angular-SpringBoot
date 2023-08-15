import { Component } from '@angular/core';
import { TableComponent } from 'src/app/lib/table/table.component';
import { Course, CourseColumns } from '../models';

@Component({
  standalone: true,
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  imports: [TableComponent],
})
export class CoursesComponent {
  courses: Course[] = [
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
    {
      _id: '1234',
      name: 'Programação orientada a objetos',
      category: 'Programação',
    },
  ];
  headers = [CourseColumns.name, CourseColumns.category];

  constructor() {}
}
