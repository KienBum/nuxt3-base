import { FormConfig } from "~~/types/index";
import API_PATH from "~~/enums/API_PATH";

const DistrictFormConfig: FormConfig = {
  columns: [
    {
      layout: '6',
      fields: [
        { key: 'name', label: 'Tên', rules: { required } },
        {
          key: "provinceId",
          label: "Province",
          type: "select",
          options: {
            value: "id",
            label: "name",
            api: "/province/getList",
            searchKey: "name",
          },
        },
      ]
    },
    {
      layout: '6',
      fields: [
        { key: 'code', label: 'Mã', rules: { required } },
        { key: 'description', label: 'Mô tả', rules: {} }
      ]
    }
  ],
  api: API_PATH.DISTRICT,
  title: "Quận/Huyện"
};

export default DistrictFormConfig;
