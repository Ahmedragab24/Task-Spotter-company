import dataTable from "@/interface/data";
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<dataTable[]> {
  // Fetch data directly in this function
  const response = await fetch(
    "https://script.googleusercontent.com/macros/echo?user_content_key=5EYc8b1MrjzP-LRy_8Qknhczq4UAUex2fo1EmjD5ZM9xjhy2OGmpy_1vR0elImebDzaqZBSLDuU_q_K696M-r06V0O3ac9ySm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnI4yep8Ci4cVWauHgrrAkERPvvLJhpjtbYVa1lMmDWeoJGuostmukz_85jLwY6K-M-CdzZUhAYV8x9ibU0Ggchl6O_uyhiEwsdz9Jw9Md8uu&lib=M3BVKZOyFiKSYjXlaRFMEVrMY7SJhzXCF"
  );
  const data = await response.json();

  return data.map((item: dataTable) => {
    return {
      id: item.id,
      created_dt: item.created_dt,
      data_source_modified_dt: item.data_source_modified_dt,
      entity_type: item.entity_type,
      operating_status: item.operating_status,
      legal_name: item.legal_name,
      dba_name: item.dba_name,
      physical_address: item.physical_address,
      phone: item.phone,
      usdot_number: item.usdot_number,
      mc_mx_ff_number: item.mc_mx_ff_number,
      power_units: item.power_units,
      out_of_service_date: item.out_of_service_date,
    };
  });
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
