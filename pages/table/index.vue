<script lang="ts" setup>
const TableConfig = ref<any>({
  columns: [
    { data: "name", heading: "Tên", sortable: true, align: "end" },
    { data: "email", heading: "Email", sortable: true },
    { data: "avatar", heading: "Ảnh đại diện", sortable: true },
  ],
  url: "/user",
  searchOptions: [
    {
      key: "name",
      label: "Tên",
      layout: 3,
    },
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
      layout: 3,
    },
    {
      key: "datetime",
      label: "Thời gian chính xác",
      type: "datetime",
      layout: 3,
    },
    {
      key: "hasAdd",
      label: "Tạo tài khoản",
      type: "checkbox",
      layout: 3,
    },
  ],
});
</script>

<template>
  <div class="container-xxl">
    <div class="card">
      <NTable :options="TableConfig" :has-select="true">
        <template #avatar="props">
          <NChip :label="props.entity.email"></NChip>
        </template>
      </NTable>
    </div>
  </div>
</template>
