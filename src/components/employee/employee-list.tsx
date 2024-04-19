import React from "react";
import { EmployeeData } from "./employee-type";
import EmployeeTable from "./employee-table";
import { AddEmployee } from "./employee-add";

export const EmployeeList = async () => {
  const employeeListData: EmployeeData[] = await (
    await fetch("http://localhost:3010/employees")
  ).json();

  return (
    <div className="flex flex-col overflow-auto w-[100%] sm:px-1 md:px-8">
      <div className="flex flex-row justify-between w-[100%]">
        <h1>Employees</h1>
        <AddEmployee />
      </div>
      <EmployeeTable rows={employeeListData} />
    </div>
  );
};
