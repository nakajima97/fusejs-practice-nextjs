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
  const fuseOption = {
    keys: ['name'],
    threshold: 0.6, // 検索の厳しさを設定
  }
  const fuse = new Fuse(employees, fuseOption)

  // 検索キーワードが空だったら全従業員を表示
  const filteredEmployees = searchKeyword ? fuse.search(searchKeyword).map(r => r.item) : employees;

  return {
    filteredEmployees
  }
}