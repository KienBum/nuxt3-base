<template>
  <div class="base-table table-responsive">
    <div class="d-flex align-items-center pb-5 pe-2">
      <div v-if="hasFilter" class="filter" @click="openFilter = !openFilter">
        <NIcon
          name="fe:filter"
          size="20"
          :color="openFilter ? '#00a3ff' : '#6c757d'"
        ></NIcon>
      </div>
      <div class="flex-grow-1"></div>
      <NButton
        prepend-icon="material-symbols:add-sharp"
        color-icon="white"
        @click="goToPage('add')"
      >
        Thêm mới
      </NButton>
    </div>

    <Transition name="slide-fade">
      <NFilter
        v-show="openFilter"
        :options="props.options.searchOptions"
        @filter="onSearch"
      ></NFilter>
    </Transition>

    <div class="table-fixed-head">
      <table class="table table-hover">
        <thead>
          <tr>
            <th v-if="props.hasSelect" class="w-th">
              <NCheck
                v-model="checkedAll"
                class="m-0"
                @update:modelValue="onAllSelected"
              ></NCheck>
            </th>
            <th class="w-th">STT</th>
            <template
              v-for="(item, index) in options.columns"
              :key="`table-th-${index}`"
            >
              <th :style="item.style">
                {{ item.heading }}

                <span v-if="item.sortable" class="table-sort cp">
                  <NIcon
                    v-if="item.sortable === 'asc'"
                    name="material-symbols:keyboard-arrow-up-rounded"
                    size="22"
                    @click="onSort(item, 'desc')"
                  ></NIcon>
                  <NIcon
                    v-if="item.sortable === 'desc'"
                    name="material-symbols:keyboard-arrow-down-rounded"
                    size="22"
                    @click="onSort(item, true)"
                  ></NIcon>
                  <NIcon
                    v-if="item.sortable === true"
                    class="default-sort"
                    name="material-symbols:keyboard-arrow-up-rounded"
                    size="22"
                    color="#6c757d"
                    @click="onSort(item, 'asc')"
                  ></NIcon>
                </span>
              </th>
            </template>
            <th v-if="!props.hasHidden.actions" class="actions">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in options.data" :key="index">
            <td v-if="props.hasSelect" class="text-center">
              <NCheck
                v-model="row.checked"
                class="m-0"
                @update:modelValue="onSelected(row, $event)"
              ></NCheck>
            </td>
            <td>{{ currentPage * numPerPage + index + 1 }}</td>
            <template v-for="(col, ind) in options.columns" :key="ind">
              <td
                :style="col.style"
                class="text-content"
                :class="{ [`text-${col.align}`]: col.align }"
              >
                <slot :name="col.data" :message="row[col.data]" :entity="row">
                  {{ row[col.data] }}
                </slot>
              </td>
            </template>

            <td v-if="!props.hasHidden.actions">
              <div class="actions">
                <div
                  v-if="props.hasHidden.view"
                  class="button"
                  @click="goToPage('view', row)"
                >
                  <NIcon name="feather:eye" size="16"></NIcon>
                </div>
                <div
                  v-if="props.hasHidden.repeat"
                  class="button"
                  @click="goToPage('repeat', row)"
                >
                  <NIcon name="feather:repeat" size="16"></NIcon>
                </div>
                <div
                  v-if="!props.hasHidden.delete"
                  class="button"
                  @click="goToPage('delete', row)"
                >
                  <NIcon
                    name="feather:trash-2"
                    size="16"
                    color="#d21953"
                  ></NIcon>
                </div>
                <div
                  v-if="!props.hasHidden.edit"
                  class="button"
                  @click="goToPage('edit', row)"
                >
                  <NIcon
                    name="pajamas:pencil"
                    size="16"
                    color="#008BD9"
                  ></NIcon>
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="!(options.data || []).length">
            <th :colspan="(options.columns || []).length + 3">
              <div class="no-data">
                <div>
                  <div>
                    <img
                      alt="Logo"
                      src="@/assets/icons/svg/table-document.svg"
                    />
                  </div>
                  Hiện chưa có dữ liệu. Vui lòng thêm mới hoặc tải tài liệu
                </div>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      v-if="props.isPagination && (options.data || []).length"
      class="d-flex pt-10"
    >
      <nav aria-label="...">
        <ul class="pagination">
          <li
            :class="{ nonEvent: !isPrevious }"
            class="page-icon"
            @click="previous()"
          >
            <NIcon name="ic:baseline-keyboard-arrow-left" size="22"></NIcon>
          </li>
          <li
            v-for="i in listPage"
            :key="i"
            :class="{ active: currentPage == i - 1, nonEvent: i == '...' }"
            class="page-item"
            @click="changePage(i)"
          >
            <a class="page-link" href="#">
              {{ i }}
            </a>
          </li>
          <li :class="{ nonEvent: !isNext }" class="page-icon" @click="next()">
            <NIcon name="ic:baseline-keyboard-arrow-right" size="22"></NIcon>
          </li>
        </ul>
      </nav>
      <div class="flex-grow-1"></div>
      <div class="d-flex align-items-center">
        <div class="fs-12 me-5">
          Bản ghi
          {{
            totalPages >= 1
              ? (currentPage + 1) * numPerPage - numPerPage + 1
              : 0
          }}
          -
          {{
            options.totalData > (currentPage + 1) * numPerPage
              ? (currentPage + 1) * numPerPage
              : options.totalData
          }}, Tổng {{ options.totalData }}
        </div>
        <div>
          <select
            v-model="numPerPage"
            class="form-select form-select-sm"
            @change="changePerPage"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { initCommonService } from "~~/services/initCommon.service";
import API_PATH from "~~/enums/API_PATH";

const props = defineProps({
  isLoad: {
    type: Boolean,
    default: true,
  },
  options: {
    type: Object,
    default: () => ({}),
  },
  data: {
    type: Array,
    default: [],
  },
  hasHidden: {
    type: Object,
    default: () => ({}),
  },
  hasSelect: {
    type: Boolean,
    default: false,
  },
  hasFilter: {
    type: Boolean,
    default: true,
  },
  selectKey: {
    type: String,
    default: "id",
  },
  reload: {
    type: Number,
    default: 0,
  },
  numPerPage: {
    type: Number,
    default: 20,
  },
  isPagination: {
    type: Boolean,
    default: true,
  },
  router: {
    type: String,
  },
});

const emits = defineEmits(["selected"]);

let options = ref<any>({});

const service = initCommonService(props.options.url);

let selected = ref<any>([]);
const entity = ref<any>({});
let checkedAll = ref<any>(false);

const openFilter = ref<boolean>(false);

const currentPage = ref<number>(0);
const numPerPage = ref<number>(props.numPerPage);
let totalPages = ref<number>(1);
let listPage = ref<any>([]);
let isPrevious = ref(false);
let isNext = ref(true);

let sortParam = ref<any>({});
let searchParam = ref<any>({});

options.value = Object.assign(deepCopy(props.options));

const onSearch = (params: any) => {
  searchParam.value = params || {};
  changePerPage();
};

const loadData = async () => {
  let textSort: any = [];

  if (sortParam.value) {
    let array = Object.keys(sortParam.value);

    array.forEach((element) => {
      if (sortParam.value[element] !== true)
        textSort.push(`${element}@${sortParam.value[element]}`);
    });
  }

  if (!textSort.length) textSort = undefined;

  const params = {
    page: Number(currentPage.value),
    size: Number(numPerPage.value),
    textSort,
    ...searchParam.value,
  };

  service.getByPage(params).then((data) => {
    const response: any = data.value;

    options.value.data = response.data;
    options.value.totalData = response.totalItems;
    currentPage.value = response.currentPage;
    totalPages.value = response.totalPages;

    if (currentPage.value == totalPages.value - 1) {
      isNext.value = false;
    }
    listPage.value = generatePageRange(currentPage.value, totalPages.value);
    onLoadChecked();
  });
};

const page = ref<any>({
  add: "/them-moi",
  edit: "/",
});

const router = useRouter();

const goToPage = (action: string, item?: any) => {
  entity.value = item;
  if (action == "delete") {
    useConfirm(onConfirmDelete).show();
    return;
  }

  let path = props.router ? props.router : router.currentRoute.value.path;

  if (action == "add") {
    path += page.value[action];
  } else if (action == "edit") {
    path += `${page.value[action]}${item.id}`;
  }
  router.push({ path });
};

const onConfirmDelete = async () => {
  service.delete(entity.value.id).then((data) => {
    const response: any = data.value;
    if (response.statusCode == 200) {
      // useNotify("success", "Xóa bản ghi thành công!").show();
      loadData();
    }
  });
};

const onAllSelected = (value: boolean) => {
  if (!(options.value.data || []).length) return;

  options.value.data.forEach((element: any) => {
    onSelected(element, value);
  });
  selected.value = renewArray(selected.value);
};

const onSelected = (entity: any, value: any) => {
  if (value) {
    selected.value.push(entity[props.selectKey]);
  } else {
    selected.value = selected.value.filter((id: any) => {
      return id != entity[props.selectKey];
    });
  }

  onLoadChecked();
  emits("selected", selected.value);
};

const onLoadChecked = () => {
  if (!(options.value.data || []).length) return;
  let array = [...options.value.data];
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (selected.value.find((item: any) => item === element[props.selectKey])) {
      element.checked = true;
      count += 1;
    } else element.checked = false;
  }

  options.value.data = [...array];
  checkedAll.value = count === array.length;
};

const renewArray = (arr: any) => {
  return arr.filter((item: any, index: any) => arr.indexOf(item) === index);
};

const changePerPage = async () => {
  currentPage.value = 0;
  await loadData();

  if (1 == totalPages.value) {
    isNext.value = false;
    isPrevious.value = false;
  } else isNext.value = true;
};

const changePage = (page: number) => {
  if (page > 1) {
    isPrevious.value = true;
  } else {
    isPrevious.value = false;
  }
  if (page == totalPages.value) {
    isNext.value = false;
  } else {
    isNext.value = true;
  }
  currentPage.value = page - 1;
  loadData();
};

const previous = () => {
  currentPage.value = currentPage.value - 1;
  if (currentPage.value == 0) {
    isPrevious.value = false;
  }
  isNext.value = true;
  loadData();
};

const next = () => {
  currentPage.value += 1;
  if (currentPage.value == totalPages.value - 1) {
    isNext.value = false;
  }
  isPrevious.value = true;
  loadData();
};

const generatePageRange = (
  currentPage: number,
  lastPage: number,
  delta = 2
) => {
  // creates array with base 1 index
  const range = Array(lastPage)
    .fill(1)
    .map((_, index) => index + 1);

  return range.reduce((pages: any[], page) => {
    // allow adding of first and last pages
    if (page === 1 || page === lastPage) {
      return [...pages, page];
    }

    // if within delta range add page
    if (page - delta <= currentPage && page + delta >= currentPage) {
      return [...pages, page];
    }

    // otherwise add 'gap if gap was not the last item added.
    if (pages[pages.length - 1] !== "...") {
      return [...pages, "..."];
    }

    return pages;
  }, []);
};

const onSort = (entity: any, value: any) => {
  entity.sortable = value;
  sortParam.value[entity.data] = value;
  loadData();
};

const init = () => {
  if (props.isLoad) {
    loadData();
  }
};

watch(
  () => props.reload,
  (newVal) => {
    loadData();
  }
);

watch(
  () => props.data,
  (newVal) => {
    options.value.data = newVal;
  }
);

onMounted(init);
</script>

<style lang="scss">
.base-table {
  margin: 1rem;

  .table > :not(caption) > * > * {
    border-bottom: 1px dashed #f4f4f4;
    padding: 0.5rem 1.2rem;
  }

  thead {
    tr {
      border-bottom: 1px dashed #f4f4f4;

      th {
        height: 48px;
        text-align: center;
        vertical-align: middle;
        color: #6c757d;
        border-bottom: 1px dashed #f4f4f4;
        background-color: white;
      }

      .default-sort {
        visibility: hidden;
      }

      th:hover {
        .default-sort {
          visibility: unset;
        }
      }

      .actions {
        width: 12rem;
      }
    }
  }

  td {
    height: 48px;
    vertical-align: middle;

    .actions {
      display: flex;
      justify-content: center;
      align-items: center;

      .button {
        width: 30px;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        cursor: pointer;
      }
    }
  }

  .w-th {
    width: 50px !important;
  }

  .no-data {
    height: 20rem;
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .text-start {
    text-align: start;
  }
  .text-center {
    text-align: center;
  }
  .text-end {
    text-align: end;
  }

  .table-fixed-head {
    overflow: auto;
    height: 36rem;
  }
  .table-fixed-head thead th {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .page-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6c757d;
    margin-bottom: 2px;
    height: 2.5rem;
    width: 2.5rem;
  }

  .page-icon:hover {
    cursor: pointer;
    color: white;
    border-radius: 0.475rem;
    background-color: #00a3ff;
  }

  .nonEvent {
    pointer-events: none !important;

    svg {
      color: #ccc;
    }
  }

  .filter {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .filter:hover {
    color: #00a3ff;
    border-radius: 4px;
  }

  .cp {
    cursor: pointer;
  }

  .fs-12 {
    font-size: 12px;
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
}
</style>
