import { Component, inject, signal } from '@angular/core';
import { BooksService } from './features/books/data-access/books-service';
import { IBookDataDto } from './shared/models/ibook-data-dto.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('an_test_project_20');

  private readonly booksService = inject(BooksService);

  readonly books = toSignal(this.booksService.getAll$().pipe(startWith([] as IBookDataDto[])));
}
