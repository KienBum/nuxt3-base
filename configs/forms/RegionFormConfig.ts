import { FormConfig } from "~~/types/index";
import API_PATH from "~~/enums/API_PATH";

const ProvinceTableConfig: FormConfig = {
  columns: [
    {
      layout: "6",
      fields: [{ key: "name", label: "Tên", rules: { required } }],
    },
    {
      layout: "6",
      fields: [{ key: "code", label: "Mã", rules: { required } }],
    },
    {
      layout: "6",
      fields: [{ key: "description", label: "Mô tả", rules: {} }],
    }
  ],
  api: API_PATH.REGION,
  title: "Địa phương"
};

export default ProvinceTableConfig;
