export enum CourseColumns {
  name = 'name',
  category = 'category',
  actions = 'actions',
}

export interface Course {
  _id: string;
  name: string;
  category: string;
}
