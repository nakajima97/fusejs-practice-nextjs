import { faker } from '@/utils/faker';

import type { Employee } from '@/features/Employee/types';
import { EmployeeList } from '@/features/Employee/components/EmployeeList';
import { Box, Typography } from '@mui/material';

const Page = () => {
  // 100名の従業員を生成
  const employees = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    name: faker.person.fullName(),
    age: faker.number.int({min: 20, max: 60})
  }));

  return (
    <Box>
      <Typography variant='h4'>従業員一覧</Typography>
      <EmployeeList employees={employees} />
    </Box>
  )
};

export default Page;
