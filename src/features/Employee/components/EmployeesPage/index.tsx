'use client'

import React, {  useState } from "react";
import { Box, FormControl, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { EmployeeList } from "@/features/Employee/components/EmployeeList";
import { useFilterEmployees } from "../../hooks/useFilterEmployees";
import type { Employees } from "@/features/Employee/types";

type Props = {
  employees: Employees;
};


export const EmployeesPage: React.FC<Props> = ({employees}) => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const { filteredEmployees } = useFilterEmployees({employees, searchKeyword})

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword)
  }

  return (
    <Box>
      <Typography variant="h4">従業員一覧</Typography>
      <FormControl>
        <TextField value={searchKeyword} onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)} InputProps={{startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )}}/>
      </FormControl>
      <EmployeeList employees={filteredEmployees} />
    </Box>
  );
}