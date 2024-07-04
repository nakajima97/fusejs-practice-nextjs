'use client'

import React, { useEffect, useState } from "react";
import { Box, FormControl, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Fuse from 'fuse.js'

import { EmployeeList } from "@/features/Employee/components/EmployeeList";
import type { Employees } from "@/features/Employee/types";

type Props = {
  employees: Employees;
};


export const EmployeesPage: React.FC<Props> = ({employees}) => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [filteredEmployees, setFilteredEmployees] = useState<Employees>(employees)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
  }

  useEffect(() => {
    if (!searchKeyword) {
      setFilteredEmployees(employees)
      return
    }

    const fuseOption = {
      keys: ['name'],
    }
    const fuse = new Fuse(employees, fuseOption)

    const result = fuse.search(searchKeyword)
    setFilteredEmployees(result.map((r) => r.item))
  }, [searchKeyword, employees])

  return (
    <Box>
      <Typography variant="h4">従業員一覧</Typography>
      <FormControl>
        <TextField value={searchKeyword} onInput={handleSearch} InputProps={{startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )}}/>
      </FormControl>
      <EmployeeList employees={filteredEmployees} />
    </Box>
  );
}