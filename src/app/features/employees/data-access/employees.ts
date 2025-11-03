import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { EmployeeData } from '../../../shared/models/employee-data.dto';
import { EmployeeOption } from '../../../shared/models/employee-option.dto';
import { EmployeeRead } from '../../../shared/models/employee-read.dto';
import { EmployeeCreate } from '../../../shared/models/employee-create.dto';
import { EmployeeUpdate } from '../../../shared/models/employee-update.dto';
import { EmployeeCanDelete } from '../../../shared/models/employee-can-delete.dto';
import { Sort } from '../../../shared/models/sort.model';
import { PageResult } from '../../../shared/models/page-result.model';

@Injectable({ providedIn: 'root' })
export class EmployeesService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiBaseUrl}/api/employees`;

  getAll$(): Observable<EmployeeData[] | null> {
    return this.http.get<EmployeeData[]>(this.base).pipe(
      catchError((err) => {
        console.error('[EmployeesService] getAll$ error', err);
        return of(null);
      }),
    );
  }

  getOptions$(): Observable<EmployeeOption[] | null> {
    return this.http.get<EmployeeOption[]>(`${this.base}/options`).pipe(
      catchError((err) => {
        console.error('[EmployeesService] getOptions$ error', err);
        return of(null);
      }),
    );
  }

  getById$(id: number): Observable<EmployeeRead | null> {
    return this.http.get<EmployeeRead>(`${this.base}/${id}`).pipe(
      catchError((err) => {
        console.error('[EmployeesService] getById$ error', err);
        return of(null);
      }),
    );
  }

  create$(dto: EmployeeCreate): Observable<number | null> {
    return this.http.post<number>(this.base, dto).pipe(
      catchError((err) => {
        console.error('[EmployeesService] create$ error', err);
        return of(null);
      }),
    );
  }

  update$(id: number, dto: EmployeeUpdate): Observable<void> {
    return this.http.put<void>(`${this.base}/${id}`, dto).pipe(
      catchError((err) => {
        console.error('[EmployeesService] update$ error', err);
        return of(undefined as void);
      }),
    );
  }

  delete$(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`).pipe(
      catchError((err) => {
        console.error('[EmployeesService] delete$ error', err);
        return of(undefined as void);
      }),
    );
  }

  canDelete$(id: number): Observable<EmployeeCanDelete> {
    return this.http.get<EmployeeCanDelete>(`${this.base}/${id}/can-delete`).pipe(
      catchError((err) => {
        console.error('[EmployeesService] canDelete$ error', err);
        return of({
          canDelete: false,
          reason: 'Unexpected error. Please try again.',
        } satisfies EmployeeCanDelete);
      }),
    );
  }

  getPage$(pageIndex: number, pageSize: number, sort: Sort): Observable<PageResult<EmployeeData>> {
    const params = new HttpParams()
      .set('page', pageIndex.toString())
      .set('pageSize', pageSize.toString())
      .set('sort', sort.sortField)
      .set('order', sort.sortOrder ?? 'asc');

    return this.http.get<PageResult<EmployeeData>>(`${this.base}/page`, { params }).pipe(
      catchError((err) => {
        console.error('[EmployeesService] getPage$ error', err);
        return of({ data: [], totalCount: 0 } as PageResult<EmployeeData>);
      }),
    );
  }
}
