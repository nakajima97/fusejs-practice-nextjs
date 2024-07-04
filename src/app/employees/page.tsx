import { faker } from "@/utils/faker";

import { EmployeesPage } from "@/features/Employee/components/EmployeesPage";

const Page = () => {
  // 100名の従業員を生成
  const employees = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    name: faker.person.fullName(),
    age: faker.number.int({ min: 20, max: 60 }),
  }));

  return (
    <EmployeesPage employees={employees}/>
  );
};

export default Page;
