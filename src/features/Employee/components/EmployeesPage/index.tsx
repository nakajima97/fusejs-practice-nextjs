'use client'

import React, { useEffect, useMemo, useState } from "react";
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

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword)
  }

  const fuse = useMemo(() => {
    const fuseOption = {
      keys: ['name'],
    }
    return new Fuse(employees, fuseOption)
  }, [employees])

  useEffect(() => {
    // 検索キーワードが空だったら全従業員を表示
    const result = searchKeyword ? fuse.search(searchKeyword).map(r => r.item) : employees;
    setFilteredEmployees(result);
  }, [searchKeyword, employees, fuse]);

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