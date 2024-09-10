"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Companies = {
    id: string
    companyName: string,
    region: string,
    province: string,
    numberOfShareholders: number,
    ebitda: number,
    revenue: number,
    numberOfEmployees: number,
    scoring: number,
}

export const columns: ColumnDef<Companies>[] = [
    {
        accessorKey: "companyName",
        header: "Company name",
    },
    {
        accessorKey: "region",
        header: "Region",
    },
    {
        accessorKey: "province",
        header: "Province",
    },
    {
        accessorKey: "numberOfShareholders",
        header: "Number of shareholders",
    },
    {
        accessorKey: "ebitda",
        header: "EBITDA",
    },
    {
        accessorKey: "revenue",
        header: "Revenue",
        // cell: ({ row }) => {
        //     const amount = parseFloat(row.getValue("revenue"))
        //     const formatted = new Intl.NumberFormat("en-US", {
        //         style: "currency",
        //         currency: "USD",
        //     }).format(amount)

        //     return <div className="text-sm font-normal">{formatted}</div>
        // },

    },
    {
        accessorKey: "numberOfEmployees",
        header: "Number of employees",
    },
    {
        accessorKey: "scoring",
        header: "Scoring",
    },
]
