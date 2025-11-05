import { Component, input, output } from '@angular/core';
import { EmployeeData } from '../../../../shared/models/employee-data.dto';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DecimalPipe } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-employees-table',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    DecimalPipe,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './employees-table.html',
  styleUrl: './employees-table.scss',
})
export class EmployeesTableComponent {
  readonly employees = input.required<EmployeeData[]>();

  readonly total = input.required<number>();
  readonly pageIndex = input.required<number>();
  readonly pageSize = input.required<number>();
  readonly pageSizeOptions = input<number[]>([5, 10, 25, 50]);

  readonly sortActive = input<string>('lastName');
  readonly sortDirection = input<'asc' | 'desc'>('asc');

  readonly create = output<void>();
  readonly edit = output<number>();
  readonly remove = output<EmployeeData>();

  readonly pageChange = output<PageEvent>();
  readonly sortChange = output<Sort>();

  readonly displayedColumns = [
    'firstName',
    'lastName',
    'departmentName',
    'managerFullName',
    'salary',
    'actions',
  ] as const;

  onCreate() {
    this.create.emit();
  }

  onEdit(id: number) {
    this.edit.emit(id);
  }

  onDelete(e: EmployeeData) {
    this.remove.emit(e);
  }

  onPage(event: PageEvent) {
    this.pageChange.emit(event);
  }

  onSort(event: Sort) {
    this.sortChange.emit(event);
  }
}
