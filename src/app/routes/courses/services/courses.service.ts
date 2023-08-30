import { Injectable } from '@angular/core';
import { Course } from '../models';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '../../../../../assets/courses.json';

  constructor(private readonly httpClient: HttpClient) {}

  listaCursos(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API);
  }
}
