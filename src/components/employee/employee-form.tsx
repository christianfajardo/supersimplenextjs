"use client";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import * as React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import dayjs from "dayjs";
import { EmployeeData } from "./employee-type";
import { IEmployeeService } from "@/internal/store/employee-service";
import { HiX } from "react-icons/hi";

type EmployeeFormProps = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onFail: () => void;
  employeeSvc: IEmployeeService;
  employeeData?: EmployeeData;
};

export const EmployeeFormDialog = ({
  open,
  onClose,
  onSuccess,
  onFail,
  employeeData,
  employeeSvc,
}: EmployeeFormProps) => {
  const defaultEmployeeData: EmployeeData = {
    id: undefined,
    first_name: "",
    last_name: "",
    birth_date: "",
    email: "",
    phone: "",
    addresses: [],
    employee_status: "Inquiry",
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({ defaultValues: employeeData ?? defaultEmployeeData });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses",
  });

  const createOrUpdateEmployeeData = async (data: EmployeeData, event: any) => {
    event.preventDefault();
    if (!employeeData) {
      employeeSvc.createNewEmployee(data).then(onSuccess).catch((error) => {
        console.log(error);
        onFail();
      });
    } else {
      employeeSvc.updateEmployeeData(data).then(onSuccess).catch(onFail);
    }
    onClose();
  };


  return (
    <Dialog open={open}>
      <DialogTitle className="font-semibold p-1">
        <div className="flex justify-between w-[100%]">
          <div className="py-1 pl-4">
            {employeeData
              ? `Update ${employeeData.first_name} ${employeeData.last_name}`
              : "Add new employee"}
          </div>
          <IconButton size="medium" onClick={onClose}>
            <HiX className="h-6 w-6 text-slate-900" />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <div className="flex justify-center p-4">
          <form
            className="flex flex-col gap-4 max-w-96"
            onSubmit={handleSubmit((data, event) =>
              createOrUpdateEmployeeData(data, event)
            )}
          >
            <TextField label="Email" {...register("email")} />
            <div className="flex gap-4">
              <div>
                <TextField
                  label="First Name"
                  {...register("first_name", { required: true })}
                />
                {errors.first_name && (
                  <p className="text-[red] font-light text-sm">
                    First name is required.
                  </p>
                )}
              </div>

              <div>
                <TextField
                  label="Last Name"
                  {...register("last_name", { required: true })}
                />
                {errors.last_name && (
                  <p className="text-[red] font-light text-sm">
                    Last name is required.
                  </p>
                )}
              </div>
            </div>

            <Controller
              name="birth_date"
              control={control}
              rules={{ required: "Date is required" }}
              render={({ field }) => (
                <DatePicker
                  className="w-60"
                  label="Birth Date"
                  //@ts-ignore
                  value={dayjs(field.value)}
                  onChange={(newValue: Date | null) => {
                    return field.onChange(dayjs(newValue).format("MM/DD/YYYY"));
                  }}
                />
              )}
            />
            {errors.birth_date && (
              <p className="text-[red] font-light text-sm">
                Birth date is required.
              </p>
            )}
            <TextField
              label="Phone"
              {...register("phone", { required: true })}
            />
            <FormControl fullWidth>
              <InputLabel id="category-label">Status</InputLabel>
              <Controller
                name="employee_status"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select {...field} labelId="category-label" label="Category">
                    <MenuItem value="Inquiry">Inquiry</MenuItem>
                    <MenuItem value="Onboarding">Onboarding</MenuItem>
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Churned">Churned</MenuItem>
                  </Select>
                )}
              />
            </FormControl>

            <span className="font-bold">Addresses</span>
            {fields.map((field, index) => (
              <Box key={field.id} sx={{ mb: 2 }}>
                {index === 0 && (
                  <div className="flex w-[100%] justify-end">
                    <Chip label="Primary" className="bg-slate-200 text-xs" />
                  </div>
                )}
                <Controller
                  //@ts-ignore
                  name={`addresses[${index}].street`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Street"
                      fullWidth
                      margin="normal"
                    />
                  )}
                />
                <Controller
                  //@ts-ignore
                  name={`addresses[${index}].city`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="City"
                      fullWidth
                      margin="normal"
                    />
                  )}
                />
                <Controller
                  //@ts-ignore
                  name={`addresses[${index}].state`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="State"
                      fullWidth
                      margin="normal"
                    />
                  )}
                />
                <Controller
                  //@ts-ignore
                  name={`addresses[${index}].zip`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Zip"
                      fullWidth
                      margin="normal"
                    />
                  )}
                />
                <Button
                  type="button"
                  onClick={() => remove(index)}
                  variant="outlined"
                  color="error"
                  sx={{ mt: 1 }}
                >
                  Remove Address
                </Button>
              </Box>
            ))}
            <Button
              type="button"
              onClick={() =>
                append({ street: "", city: "", state: "", zip: "" })
              }
              variant="contained"
            >
              Add Address
            </Button>
            <div className="flex flex-row justify-around pt-8 pb-4">
              <Button
                onClick={() => onClose()}
                variant="outlined"
                className="px-4"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                className="px-4"
                disabled={!isValid}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
