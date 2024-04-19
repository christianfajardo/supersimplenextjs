import { EmployeeData } from "@/components/employee/employee-type";
import { revalidatePath } from "next/cache";

export interface IEmployeeService {
  createNewEmployee(data: EmployeeData): Promise<void>;
  updateEmployeeData(data: EmployeeData): Promise<void>;
}

export class EmployeeService implements IEmployeeService {
  async createNewEmployee(data: EmployeeData): Promise<void> {
    try {
      await fetch("http://localhost:3010/employees/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      revalidatePath("/employees");
    } catch (error) {
      throw error;
    }
  }

  async updateEmployeeData(data: EmployeeData): Promise<void> {
    try {
      await fetch(`http://localhost:3010/employees/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      revalidatePath(`/employees/${data.id}`);
    } catch (error) {
      throw error;
    }
  }
}
