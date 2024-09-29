"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import { EyeIcon } from "../icons/EyeIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { EditIcon } from "../icons/EditIcon";
import Link from "next/link";
import { urlPath } from "@/utils/url-helpers";

const columns = [
  { name: "ID", uid: "id" },
  { name: "TITLE", uid: "title" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const statusColorMap = {
  Done: "success",
  In_Progress: "danger",
  vacation: "warning",
};

export default function TicketList({ dummyTickets, tenant }) {
  const renderCell = React.useCallback((ticket, columnKey) => {
    const cellValue = ticket[columnKey];

    switch (columnKey) {
      case "id":
        return <p className="text-bold text-sm capitalize">{ticket?.id}</p>;
      case "title":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{ticket.title}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {ticket.author}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize text-white"
            color={statusColorMap[ticket.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip color="primary" content="Details">
              <Link href={urlPath(`/tickets/details/${ticket?.id}`, tenant)}>
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon />
                </span>
              </Link>
            </Tooltip>
            <Tooltip color="secondary" content="Edit ticket">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete ticket">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table
      color="secondary"
      classNames={{
        table: " bg-slate-800",
        th: " bg-slate-600",
        wrapper: "bg-slate-800",
      }}
      aria-label="Example table with custom cells"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={dummyTickets}>
        {(item: any) => (
          <TableRow key={item?.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
