<template>
  <!-- <ul> -->
    <NTreeItem
      class="item"
      :item="item"
      :is-line="isLine"
      @db-click="dbClick"
      @add-item="addItem"
      @check-item="checkItem"
    ></NTreeItem>
  <!-- </ul> -->
</template>

<script lang="ts" setup>
const props = defineProps({
  item: {
    type: [Object],
    default: () => ({}),
  },
  isLine: {
    type: Boolean,
    default: false,
  }
});

const emits = defineEmits(["checkItem", "makeFolder"]);

const checkItem = (item: any) => {
  emits('checkItem', item)
};

const dbClick = (item: any) => {
  emits('makeFolder', item)
};

const addItem = (item: any) => {
  item.children.push({
    name: "new stuff"
  });
};

</script>

