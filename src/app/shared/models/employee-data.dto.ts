export interface EmployeeData {
  id: number;
  firstName: string;
  lastName: string;
  departmentName: string;
  managerFullName?: string | null;
  salary: number;
}
