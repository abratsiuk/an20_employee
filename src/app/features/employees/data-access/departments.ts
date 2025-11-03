import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Department } from '../../../shared/models/department.model';

@Injectable({ providedIn: 'root' })
export class DepartmentsService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiBaseUrl}/api/departments`;

  getAll$(): Observable<Department[]> {
    return this.http.get<Department[]>(this.base).pipe(
      catchError((err) => {
        console.error('[DepartmentsService] getAll$ error', err);
        return of([] as Department[]);
      }),
    );
  }
}
