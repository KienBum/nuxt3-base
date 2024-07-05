<script lang="ts" setup>

let treeInfo = ref<any>({});
const checkItem = (item: any) => {
  console.log("item checked: ", item);
};
const dbclick = (item: any) => {
  console.log("db click item: ", item);
};

function addData() {
  console.time("Execution Time");
  const data = {
    name: "My Zoo",
    icon: "mdi:database-arrow-down",
    children: [
      {
        name: "dogggg",
        icon: "",
      },
      {
        name: "catt",
      },
      {
        name: "cow folder",
        icon: "",
        children: [
          {
            name: "buffalo",
            icon: "",
            children: [{ name: "buffalo 1" }, { name: "buffalo 2" }],
          },
          { name: "goat" },
          { name: "bird" },
          {
            name: "carrot",
            children: [{ name: "hello" }, { name: "wat" }],
          },
        ],
      },
    ],
  };
  treeInfo.value = data;

};

</script>
<template>
  <div class="post fs-6 d-flex flex-column-fluid">
    <!-- <div class="container-xxl">
      <div class="mt-5">
        <NButton :loading="true">yoyoyoyo</NButton>
      </div>
      <div class="mt-5">
        <button @click="addData()">add data</button>
        <NTree class="item" :item="treeInfo" :is-line="true" @check-item="checkItem" @make-folder="dbclick"></NTree>
      </div>
    </div> -->
  </div>
</template>
