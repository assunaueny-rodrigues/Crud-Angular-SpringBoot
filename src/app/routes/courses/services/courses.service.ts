import { Injectable } from '@angular/core';
import { Course } from '../models';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';

  constructor(private readonly httpClient: HttpClient) {}

  courseList(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API);
  }

  addCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(this.API, course)
  }
}
