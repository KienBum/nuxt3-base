import { FormConfig } from "~~/types/index";
import API_PATH from "~~/enums/API_PATH";

const AreaFormConfig: FormConfig = {
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
      fields: [{ key: "description", label: "Mô tả" }],
    },
  ],
  api: API_PATH.AREA,
  title: "Khu vực"
}

export default AreaFormConfig;