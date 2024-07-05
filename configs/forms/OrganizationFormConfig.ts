import API_PATH from "~~/enums/API_PATH";
import type { FormConfig } from "~~/types";

const OrganizationFormConfig: FormConfig = {
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
    api: API_PATH.ORGANIZATION,
    title: "Tổ chức",
}

export default OrganizationFormConfig;