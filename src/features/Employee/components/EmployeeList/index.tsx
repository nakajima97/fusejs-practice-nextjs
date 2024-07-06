import React from "react";
import { List, Typography } from "@mui/material";

import { EmployeeListItem } from "../EmployeeListItem";
import { Employees } from "../../types";

type Props = {
  employees: Employees;
};

export const EmployeeList = ({ employees }: Props) => {
  return (
    <List>
      {employees.map((employee) => (
        <EmployeeListItem key={employee.id} {...employee} />
      ))}
      {employees.length === 0 && <Typography>従業員が見つかりませんでした</Typography>}
    </List>
  );
};
