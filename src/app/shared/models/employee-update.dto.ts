export interface EmployeeUpdate {
  firstName: string;
  lastName: string;
  salary: number;
  departmentId: number;
  managerId?: number | null;
}
