import { Companies, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

async function getData(): Promise<Companies[]> {
    // TODO: Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            companyName: "Elite Property Solutions",
            region: "Lazio",
            province: "Roma",
            numberOfShareholders: 4,
            ebitda: 400000,
            revenue: 1,
            numberOfEmployees: 14,
            scoring: 4.7 //TODO: Adapt scoring based on logic
        },
        // ...
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
