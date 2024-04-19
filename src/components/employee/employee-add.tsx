"use client";
import { Tooltip, IconButton, Alert, Snackbar } from "@mui/material";
import * as React from "react";
import { MdAddCircle } from "react-icons/md";
import { EmployeeFormDialog } from "./employee-form";
import { EmployeeData } from "./employee-type";
import { EmployeeService } from "@/internal/store/employee-service";
import { revalidatePath } from "next/cache";

type Props = {
  isUpdate?: boolean;
  employeeData?: EmployeeData;
  clearEmployeeToUpdate?: () => void;
};

export const AddEmployee = ({
  isUpdate,
  employeeData,
  clearEmployeeToUpdate,
}: Props) => {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openFailure, setOpenFailure] = React.useState(false);
  const [openNewEmployee, setOpenNewEmployee] = React.useState(false);
  const [employeeToUpdate, setEmployeeToUpdate] = React.useState<
    EmployeeData | undefined
  >(employeeData);

  React.useEffect(() => {
    setEmployeeToUpdate(employeeData);
  }, [employeeData]);

  const handleAddNew = () => {
    setOpenNewEmployee(true);
  };

  const handleClose = () => {
    setEmployeeToUpdate(undefined);
    setOpenNewEmployee(false);
    if (clearEmployeeToUpdate) clearEmployeeToUpdate();
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  const handleCloseFailure = () => {
    setOpenSuccess(false);
  };

  const handleSaveSuccess = () => {
    setOpenSuccess(true);
  };

  const handleSaveFail = () => {
    setOpenFailure(true);
  };

  return (
    <>
      {!isUpdate && (
        <Tooltip title="Add new employee">
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleAddNew}
            color="inherit"
            className="h-12 mt-5"
          >
            <MdAddCircle className="text-[#02e060] size-7" />
          </IconButton>
        </Tooltip>
      )}
      <EmployeeFormDialog
        open={openNewEmployee || !!employeeToUpdate}
        onClose={handleClose}
        onSuccess={handleSaveSuccess}
        onFail={handleSaveFail}
        employeeData={employeeToUpdate}
        employeeSvc={new EmployeeService()}
      />
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSuccess}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {isUpdate ? "Employee data updated!" : "New employee added!"}
        </Alert>
      </Snackbar>
      <Snackbar
        open={openFailure}
        autoHideDuration={6000}
        onClose={handleCloseFailure}
      >
        <Alert
          onClose={handleCloseFailure}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Oops! Something went wrong. Please try again later.
        </Alert>
      </Snackbar>
    </>
  );
};
