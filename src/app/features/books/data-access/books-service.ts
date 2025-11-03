import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { BookDataDto } from '../../../shared/models/book-data.dto';

@Injectable({ providedIn: 'root' })
export class BooksService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiBaseUrl}/api/Books`;

  /**
   * Get all books (non-paged).
   */
  getAll$(): Observable<BookDataDto[]> {
    return this.http.get<BookDataDto[]>(this.base);
  }
}
