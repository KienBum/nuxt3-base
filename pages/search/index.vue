<template>
  <div class="search">
    Ket qua tim kiem cho: {{ test }}
  </div>
</template>

<script lang='ts' setup>
import {ref} from 'vue';

///khai bao data
const data = ref({
    searchValue: ''
});
var test = ref<string>('')
const router = useRouter();
const {searchValue} = router.currentRoute.value.query;
data.value.searchValue = searchValue;


</script>

<style lang="scss" scoped>
.search {
    min-height: 100dvh;
}
</style>