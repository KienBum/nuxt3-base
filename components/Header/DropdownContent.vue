<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "NaN",
  },
  items: {
    type: Array,
    default: () => []
  }
});
</script>
<template>
  <div class="dropdown-content">
    <div class="header">
      <h2>{{ props.name }}</h2>
    </div>
    <div class="item-list">
      <div class="dropdown-item" v-for="(item, index) in items" :key=index style="font-size:18px">{{item.text}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$background_item_list: #f1f8e7;
.dropdown-content {
  display: none;
  position: absolute;
  background-color: $background_item_list;
  width: 100%;
  left: 0;
  box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
  .item-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    .dropdown-item {
    width: 33%;
    height: 45px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    & + .dropdown-item  {
      margin-left: 10px;
    }
    &:hover {
      background-color: rgb(243, 230, 220);
      border-radius: 10px;
      cursor: pointer;
    }
  }
  }
}

.dropdown-content .header {
  background: $background_item_list;
  padding: 16px;
  color: white;
  text-align: center;
  text-transform: uppercase;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  background-color: #f2f2f2;
  height: 250px;
}

.column a {
  float: none;
  color: black;
  padding: 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.column a:hover {
  background-color: #ddd;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
