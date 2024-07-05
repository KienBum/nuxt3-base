import { FormConfig } from "~~/types/index";
import API_PATH from "~~/enums/API_PATH";

const CommuneFormConfig: FormConfig = {
  columns: [
    {
      layout: "6",
      fields: [
        { key: "name", label: "Tên", rules: { required } },
        {
          key: "districtId",
          label: "District",
          rules: { required },
          type: "select",
          options: {
            value: "id",
            label: "name",
            api: "/district/getList",
            searchKey: "name",
          },
        },
      ],
    },
    {
      layout: "6",
      fields: [
        { key: "code", label: "Mã", rules: { required } },
        { key: "description", label: "Mô tả", rules: {} }
      ],
    },
    {
      layout: "6",
      fields: [],
    },
  ],
  api: API_PATH.COMMUNE,
  title: "Xã/Phường",
};

export default CommuneFormConfig;
