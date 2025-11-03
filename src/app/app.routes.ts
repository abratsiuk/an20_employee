import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full',
  },
  {
    path: 'employees',
    loadComponent: () =>
      import('./features/employees/pages/page-employees/page-employees').then(
        (m) => m.PageEmployeesComponent,
      ),
  },
  {
    path: 'employees/new',
    loadComponent: () =>
      import('./features/employees/pages/page-employee-edit/page-employee-edit').then(
        (m) => m.PageEmployeeEditComponent,
      ),
  },
  {
    path: 'employees/:id',
    loadComponent: () =>
      import('./features/employees/pages/page-employee-edit/page-employee-edit').then(
        (m) => m.PageEmployeeEditComponent,
      ),
  },
  {
    path: 'books',
    loadComponent: () =>
      import('./features/books/pages/page-books/page-books').then((m) => m.PageBooksComponent),
  },
  {
    path: 'books/new',
    loadComponent: () =>
      import('./features/books/pages/page-book-edit/page-book-edit').then(
        (m) => m.PageBookEditComponent,
      ),
  },
  {
    path: 'books/:id',
    loadComponent: () =>
      import('./features/books/pages/page-book-edit/page-book-edit').then(
        (m) => m.PageBookEditComponent,
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./core/pages/not-found/not-found').then((m) => m.NotFoundComponent),
  },
] as const;
