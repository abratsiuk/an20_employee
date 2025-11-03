import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { startWith } from 'rxjs';
import { EmployeesService } from '../../data-access/employees';
import { EmployeeData } from '../../../../shared/models/employee-data.dto';

@Component({
  selector: 'app-page-employees',
  imports: [],
  templateUrl: './page-employees.html',
  styleUrl: './page-employees.scss',
})
export class PageEmployeesComponent {
  private readonly employeesService = inject(EmployeesService);

  readonly employees = toSignal(
    this.employeesService.getAll$().pipe(startWith([] as EmployeeData[])),
  );
}
