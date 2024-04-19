"use client";
import * as React from "react";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import { EmployeeData } from "./employee-type";
import { AddEmployee } from "./employee-add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70, hideable: true },
  { field: "first_name", headerName: "First name", width: 130 },
  { field: "last_name", headerName: "Last name", width: 130 },
  { field: "birth_date", headerName: "Birth date", width: 130 },
  {
    field: "employee_status",
    headerName: "Status",
    type: "string",
    width: 130,
  },
  { field: "email", headerName: "Email", width: 130 },
  { field: "phone", headerName: "Phone", width: 130 },
  {
    field: "primaryAddress",
    headerName: "Primary address",
    width: 300,
    valueGetter: (params) =>
      `${params.row.addresses[0]?.street || ""}, 
       ${params.row.addresses[0]?.city || ""} 
       ${params.row.addresses[0]?.zip || ""}`,
    description: "May have multiple addresses. This shows the primary address.",
  },
];

type Props = {
  rows: EmployeeData[];
};

const EmployeeTable = ({ rows }: Props) => {
  const [employeeData, setEmployeeData] = React.useState<EmployeeData>();

  const handleRowClick = (
    params: GridRowParams<EmployeeData>,
    event: React.MouseEvent
  ) => {
    setEmployeeData(params.row);
  };

  const handleClear = () => setEmployeeData(undefined);

  return (
    <>
      {employeeData && (
        <AddEmployee
          isUpdate={true}
          employeeData={employeeData}
          clearEmployeeToUpdate={handleClear}
        />
      )}
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
          columns: {
            columnVisibilityModel: {
              id: false,
            },
          },
        }}
        pageSizeOptions={[5, 10]}
        onRowClick={handleRowClick}
        sx={{
          "& .MuiDataGrid-row": {
            cursor: "pointer",
          },
        }}
      />
    </>
  );
};

export default EmployeeTable;
