import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Companies, columns } from "../companies/columns"
import { DataTable } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button";
import { Icon } from "lucide-react";

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

export default async function DashboardPage() {
  const data = await getData()

  return (
    <ContentLayout title="Dashboard">
      <div id="container" className="container rounded-lg flex flex-col gap-6 px-6 py-7 bg-card border shadow-sm">
        <div id="title-wrapper" className="flex flex-col gap-1">
          <div id="title" className="text-2xl font-bold">
            Followed Companies
          </div>
          <div id="subtitle" className="text-md text-subtle font-normal">
            Manage your followed companies and view their related analytics.
          </div>
        </div>
        <DataTable columns={columns} data={data} />
        <div id="button-group" className="flex gap-4">
          <Button variant="default">Enrich with Apollo</Button>
          <Button variant="destructive">Archive</Button>
        </div>
      </div>

    </ContentLayout>
  );
}
