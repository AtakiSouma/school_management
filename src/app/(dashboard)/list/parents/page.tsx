import { CustomIconButton } from "@/components/Common/Button";
import { TableSearch } from "@/components/Common/Input";
import { Pagination } from "@/components/Pagination";
import { CustomTable } from "@/components/Table";
import { IconData } from "@/data";
import { parentsData, role } from "@/lib/data";

type Parent = {
    id: number;
    name: string;
    email?: string;
    students: string[];
    phone: string;
    address: string;
  };

  const columns = [
    {
      header: "Info",
      accessor: "info",
    },
    {
      header: "Student Names",
      accessor: "students",
      className: "hidden md:table-cell",
    },
    {
      header: "Phone",
      accessor: "phone",
      className: "hidden lg:table-cell",
    },
    {
      header: "Address",
      accessor: "address",
      className: "hidden lg:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];


  const ParentListPage = () => {
    const renderRow = (item: Parent) => (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
          <td className="flex items-center gap-4 p-4">
            <div className="flex flex-col">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-xs text-gray-500">{item?.email}</p>
            </div>
          </td>
          <td className="hidden md:table-cell">{item.students.join(",")}</td>
          <td className="hidden md:table-cell">{item.phone}</td>
          <td className="hidden md:table-cell">{item.address}</td>
          <td>
            <div className="flex items-center gap-2">
              {role === "admin" && (
                <>
                  {/* <FormModal table="parent" type="update" data={item} />
                  <FormModal table="parent" type="delete" id={item.id} /> */}
                </>
              )}
            </div>
          </td>
        </tr>
      );

      return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
          {/* TOP */}
          <div className="flex items-center justify-between">
            <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
            <div
              className="flex flex-col md:flex-row items-center gap-4
            w-full  md:w-auto"
            >
              <TableSearch />
              <div className="flex items-center gap-4 self-end">
                {IconData.map((icon) => (
                  <CustomIconButton
                    key={icon.id}
                    altText={icon.url}
                    iconSrc={icon.url}
                  />
                ))}
              </div>
            </div>
          </div>
    
          {/* List */}
    
          <div className="">
            <CustomTable
              columns={columns}
              renderRow={renderRow}
              data={parentsData}
            />
          </div>
          {/* Pagination */}
    
          <div className="">
            <Pagination />
          </div>
        </div>
      );
    

  }

  export default ParentListPage