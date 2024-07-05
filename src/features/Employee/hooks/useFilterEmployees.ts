import { useEffect, useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import { Employees } from '../types';

type Arguments = {
  employees: Employees;
  searchKeyword: string;
}

type ReturnValue = {
  filteredEmployees: Employees;
}

export const useFilterEmployees = ({ employees, searchKeyword }: Arguments): ReturnValue => {
  const [filteredEmployees, setFilteredEmployees] = useState<Employees>(employees)

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

  return {
    filteredEmployees
  }
}