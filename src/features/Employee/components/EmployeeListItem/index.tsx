import { ListItem, ListItemText } from "@mui/material";

import { Employee } from "../../types/index";

export const EmployeeListItem = ({ id, name, age }: Employee) => {
  return (
    <ListItem>
      <ListItemText primary={name} secondary={`${age}歳`} />
    </ListItem>
  );
};
