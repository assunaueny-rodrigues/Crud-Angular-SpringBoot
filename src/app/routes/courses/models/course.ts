export enum CourseColumns {
  name = 'name',
  category = 'category',
}

export interface Course {
  _id: string;
  name: string;
  category: string;
}
