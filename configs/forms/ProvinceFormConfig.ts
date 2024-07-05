import { FormConfig } from "~~/types/index";

const ProvinceFormConfig: FormConfig = {
  columns: [
    {
      layout: "6",
      fields: [
        {
          key: "name",
          label: "Tên",
          rules: { required },
        },
        {
          key: "countryId",
          label: "Đất nước",
          type: "select",
          options: {
            value: "id",
            label: "name",
            api: "/country/getList",
            searchKey: "name",
          },
          rules: { required },
        },
      ],
    },
    {
      layout: "6",
      fields: [
        {
          key: "code",
          label: "Mã",
          rules: { required },
        },
        {
          key: "areaId",
          label: "Khu vực",
          type: "select",
          options: {
            value: "id",
            label: "name",
            api: "/area/getList",
            searchKey: "name",
          },
          rules: { required },
        },
      ],
    },
  ],
  api: "/province",
  title: "tỉnh/ thành phố",
};

export default ProvinceFormConfig;
