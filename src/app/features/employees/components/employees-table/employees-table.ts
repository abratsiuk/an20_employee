import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-employees-table',
  imports: [],
  templateUrl: './employees-table.html',
  styleUrl: './employees-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesTable {

}
