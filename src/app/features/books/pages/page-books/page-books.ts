import { Component, inject } from '@angular/core';
import { BooksService } from '../../data-access/books-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { startWith } from 'rxjs';
import { BookDataDto } from '../../../../shared/models/book-data.dto';

@Component({
  selector: 'app-page-books',
  imports: [],
  templateUrl: './page-books.html',
  styleUrl: './page-books.scss',
})
export class PageBooksComponent {
  private readonly booksService = inject(BooksService);

  readonly books = toSignal(this.booksService.getAll$().pipe(startWith([] as BookDataDto[])));
}
