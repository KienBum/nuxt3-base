import API_PATH from "~~/enums/API_PATH";
import type { FormConfig } from "~~/types";

const DepartmentFormConfig: FormConfig = {
    columns: [
    {
      layout: "6",
      fields: [
        { key: "name", label: "Tên", rules: { required } },
        { key: "description", label: "Mô tả", rules: {} },
      ],
    },
    {
      layout: "6",
      fields: [{ key: "code", label: "Mã", rules: { required } }],
    },
  ],
    api: API_PATH.DEPARTMENT,
    title: "Phòng ban",
}

export default DepartmentFormConfig;