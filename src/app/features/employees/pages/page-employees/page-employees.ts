import {Component, inject, signal} from '@angular/core';
import {EmployeesService} from '../../data-access/employees';
import {EmployeesTableComponent} from '../../components/employees-table/employees-table';
import {Router} from '@angular/router';
import {EmployeeData} from '../../../../shared/models/employee-data.dto';
import {Sort} from '@angular/material/sort';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-page-employees',
  imports: [EmployeesTableComponent],
  templateUrl: './page-employees.html',
  styleUrl: './page-employees.scss',
})
export class PageEmployeesComponent {
  private readonly employeesService = inject(EmployeesService);
  private readonly router = inject(Router);

  readonly employees = signal<EmployeeData[]>([]);
  readonly total = signal(0);

  readonly pageIndex = signal(0);
  readonly pageSize = signal(10);

  readonly sortField = signal<
    'firstName' | 'lastName' | 'departmentName' | 'managerFullName' | 'salary'
  >('lastName');
  readonly sortDirection = signal<'asc' | 'desc'>('asc');

  readonly loading = signal(false);

  constructor() {
    this.loadPage();
  }

  private loadPage(): void {
    this.loading.set(true);

    const page = this.pageIndex();
    const size = this.pageSize();
    const sort = this.sortField();
    const order = this.sortDirection();

    this.employeesService.getPage$(page, size, sort, order).subscribe((result) => {
      this.employees.set(result.data);
      this.total.set(result.totalCount);
      this.loading.set(false);
    });
  }

  onCreate(): void {
    this.router.navigate(['/employees', 'new']);
  }

  onEdit(id: number): void {
    this.router.navigate(['/employees', id]);
  }

  onDelete(e: EmployeeData): void {
    // сюда позже добавим диалог и реальный delete
    console.log('delete', e);
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.loadPage();
  }

  onSortChange(sort: Sort): void {
    const dir = (sort.direction || 'asc') as 'asc' | 'desc';
    this.sortField.set((sort.active as any) || 'lastName');
    this.sortDirection.set(dir);
    this.pageIndex.set(0);
    this.loadPage();
  }
}
