import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { IBookDataDto } from '../../../shared/models/ibook-data-dto.model';

@Injectable({ providedIn: 'root' })
export class BooksService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiBaseUrl}/api/Books`;

  /**
   * Get all books (non-paged).
   */
  getAll$(): Observable<IBookDataDto[]> {
    return this.http.get<IBookDataDto[]>(this.base);
  }
}
