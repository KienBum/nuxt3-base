import { TableConfig } from "~~/types/index";
import API_PATH from "~~/enums/API_PATH";

const ProvinceTableConfig: TableConfig = {
  columns: [
    { data: "code", heading: "Mã", sortable: true },
    { data: "name", heading: "Tên", sortable: true },
    { data: "descrip", heading: "Mô tả", sortable: true },
  ],
  searchOptions: [
    {
      key: "code",
      label: "Mã",
      layout: 3,
    },
    {
      key: "name",
      label: "Tên",
      layout: 3,
    },
  ],
  url: API_PATH.PROVINCE,
};

export default ProvinceTableConfig;
