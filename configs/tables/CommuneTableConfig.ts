import { TableConfig } from "~~/types/index";
import API_PATH from "~~/enums/API_PATH";

const CommuneTableConfig: TableConfig = {
  columns: [
    { data: "name", heading: "Tên", sortable: true},
    { data: "code", heading: "Mã", sortable: true},
    { data: "description", heading: "Mô tả", sortable: false},
  ],
  searchOptions: [
    {
      key: "name",
      label: "Tên",
      layout: 4
    },
    {
      key: "code",
      label: "Mã",
      layout: 4
    },
    {
      key: "descrip",
      label: "Mô tả",
      layout: 4
    }
  ],
  url: API_PATH.COMMUNE
};

export default CommuneTableConfig;
