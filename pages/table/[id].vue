<script lang="ts" setup>
const FormConfig = ref<any>({
  columns: [
    {
      layout: "3",
      fields: [
        {
          key: "name",
          label: "Tên",
          rules: { required },
        },
      ],
    },
    {
      layout: "3",
      fields: [
        {
          key: "code",
          label: "Mã",
        },
      ],
    },
    {
      layout: "3",
      fields: [
        {
          key: "username",
          label: "Tài khoản",
          type: "select",
          options: {
            value: "id", // trường phân biệt các bản ghi khi chọn
            label: ["id", "name", "email"], // string || string[] -> hiển thị label
            api: "/user/getList",
            searchKey: "name", // param tìm kiếm khi nhập input text
            // notLoad: true, // không call api
            // multiple: true, // chọn nhiều
            // taggable: true, // chuyển sang type tag (phải có đk multiple = true)
            // search: "" // string || string[] - tìm kiếm theo field khác
            // params: {} // truyền param default khi lấy d.s
            // filter: true, // có thể nhập thông tin vào input không (default true)
            // disabled: false // như tên =]]]
          },
        },
      ],
    },
    {
      layout: "3",
      fields: [
        {
          key: "hasAdd",
          label: "Tạo tài khoản",
          type: "checkbox",
        },
      ],
    },
    {
      layout: "2",
      fields: [
        {
          key: "numberHuman",
          label: "Số người",
          type: "number",
          maxLength: 10,
        },
      ],
    },
    {
      layout: "2",
      fields: [
        {
          key: "money",
          label: "Số tiền",
          type: "number-int",
        },
      ],
    },
    {
      layout: "8",
      fields: [
        {
          key: "type",
          label: "Chọn loại",
          type: "radios",
          options: [
            {
              key: 1,
              label: "Loại 1",
            },
            {
              key: 2,
              label: "Loại 2",
              disabled: true,
            },
            {
              key: 3,
              label: "Loại 3",
            },
          ],
          defaultValue: 3,
        },
      ],
    },
    {
      layout: "4",
      fields: [
        {
          key: "datetime",
          label: "Thời gian chính xác",
          type: "datetime",
        },
      ],
    },
    {
      layout: "4",
      fields: [
        {
          key: "date",
          label: "Chọn ngày",
          type: "date",
        },
      ],
    },
    {
      layout: "4",
      fields: [
        {
          key: "time",
          label: "Chọn giờ",
          type: "time",
          rules: { required },
        },
      ],
    },
    {
      layout: "12",
      fields: [
        {
          key: "description",
          label: "Ghi chú",
          type: "textarea",
        },
      ],
    },

    {
      layout: "6",
      fields: [
        {
          key: "provinceId",
          label: "Tỉnh/Thành phố",
          type: "select",
          options: {
            value: "id",
            label: ["id", "name"],
            api: "/province/getList",
            searchKey: "name",
            search: "",
          },
        },
      ],
    },

    {
      layout: "6",
      fields: [
        {
          key: "districtId",
          label: "Quận/Huyện",
          type: "select",
          options: {
            value: "id",
            label: ["id", "name"],
            api: "/district/getList",
            searchKey: "name",
            search: "provinceId",
          },
        },
      ],
    },
  ],
  api: "",
  title: "người dùng",
});
</script>

<template>
  <div class="post fs-6 d-flex flex-column-fluid">
    <div class="container-xxl">
      <NForm :configs="FormConfig"></NForm>
    </div>
  </div>
</template>
