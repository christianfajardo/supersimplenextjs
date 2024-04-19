import { Address } from "./address-type";

export type EmployeeData = {
  id: string | undefined;
  email: string;
  last_name: string;
  first_name: string;
  birth_date: string;
  phone: string;
  employee_status: string;
  addresses: Address[] | [];
};
