import API_PATH from "~~/enums/API_PATH";
import type { TableConfig } from "~~/types";

const DepartmentTableConfig: TableConfig = {
  columns: [
    { data: "name", heading: "Tên", sortable: true },
    { data: "code", heading: "Mã", sortable: true },
    { data: "description", heading: "Mô tả", sortable: false },
  ],
  searchOptions: [
    {
      key: "name",
      label: "Tên",
      layout: 4,
    },
    {
      key: "code",
      label: "Mã",
      layout: 4,
    },
    {
      key: "descrip",
      label: "Mô tả",
      layout: 4,
    },
  ],
  url: API_PATH.DEPARTMENT,
}

export default DepartmentTableConfig;