"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { IconCheck, IconUserOff } from "@tabler/icons-react";

const users = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    isAvailable: true,
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    isAvailable: false,
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    isAvailable: true,
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    isAvailable: false,
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "JOB",
  },
  //   {
  //     key: "status",
  //     label: "STATUS",
  //   },
];

export default function UsersListTable() {
  return (
    <Table
      classNames={{
        table: " bg-slate-800",
        th: " bg-slate-600",
        wrapper: "bg-slate-800",
      }}
      aria-label="Example table with dynamic content"
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>
                {columnKey === "name" ? (
                  <span
                    className="flex items-center"
                    style={{
                      color: item.isAvailable ? "white" : "red",
                    }}
                  >
                    {item.isAvailable ? <IconCheck /> : <IconUserOff />}
                    {getKeyValue(item, columnKey)}
                  </span>
                ) : (
                  getKeyValue(item, columnKey)
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
