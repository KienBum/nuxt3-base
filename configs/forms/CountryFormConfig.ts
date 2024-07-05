import API_PATH from "~~/enums/API_PATH";
import { FormConfig } from "~~/types";

const CountryFormConfig: FormConfig = {
  columns: [
    {
      layout: "6",
      fields: [
        { key: "name", label: "Tên", rules: { required } },
        {
          key: "regionId",
          label: "Region",
          type: "select",
          options: {
            value: 'id',
            label: 'name',
            api: '/region/getList',
            searchKey: 'name'
          }
        },
      ],
    },
    {
      layout: "6",
      fields: [
        { key: "code", label: "Mã", rules: { required } },
        { key: "description", label: "Mô tả", rules: {} }
      ],
    }
  ],
  api: API_PATH.COUNTRY,
  title: "Quốc gia",
}

export default CountryFormConfig;