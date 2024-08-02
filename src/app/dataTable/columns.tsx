"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import dataTable from "@/interface/data";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<dataTable>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "created_dt",
    header: "Created_DT",
  },
  {
    accessorKey: "data_source_modified_dt",
    header: "Modifed_DT",
  },
  {
    accessorKey: "entity_type",
    header: "Entity",
  },
  {
    accessorKey: "operating_status",
    header: "Operating status",
  },
  {
    accessorKey: "legal_name",
    header: "Legal name",
  },
  {
    accessorKey: "dba_name",
    header: "DBA name",
  },
  {
    accessorKey: "physical_address",
    header: "Physical address",
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
  {
    accessorKey: "usdot_number",
    header: "DOT",
  },
  {
    accessorKey: "mc_mx_ff_number",
    header: "MC/MX/FF",
  },
  {
    accessorKey: "power_units",
    header: "Power units",
  },
  {
    accessorKey: "out_of_service_date",
    header: "Out of service date",
  },
];
