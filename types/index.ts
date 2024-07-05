export type FormConfig = {
  columns: ColumnForm[]; // config form
  api: string; // path api form
  title: string; // tiêu đề form
};

export type TableConfig = {
  columns: ColumnTable[]; // cáu hình render bảng
  url: string; // path api
  searchOptions?: Field[]; // cấu hình render tìm kiếm nâng cao
  data?: any[]; // truyền giá trị ban đầu cho table
};

export type ColumnForm = {
  layout: string | number; // chia grid (12) cho field trong form config
  fields: Field[]; // cấu hình render các trường trong form
};

type ColumnTable = {
  data: string; // key lấy giá trị cho cột
  heading: string; // tên cột
  sortable?: boolean; // bật|tắt sắp xếp field theo api
  align?: string; // 'start' | 'center' | 'end'
};

type Field = {
  key?: string; // key giá trị trường thông tin
  label?: string; // tiêu đề trường thông tin
  type?: string; // loại trường thông tin
  // text | number | number-int | password | textarea | select | date | checkbox | switch | radios | datetime | date | time
  // slot .(ko truyền hoặc rỗng là text, slot: custom field ưith template)
  maxLength?: number; // giới hạn ký tự khi nhập - input text
  defaultValue?: any; // set giá trị ban đầu cho trường
  disabled?: boolean; // field có tương tác được không?
  rules?: object; // validate lấy từ /~~/utils/i18n-validators
  // select box:
  options?: {
    value?: string; // trường phân biệt các bản ghi khi chọn
    label?: string | string[]; // string || string[] -> hiển thị nội dung. nếu là mảng -> nội dung cách nhau dấu "-"
    api?: string; // path call api
    searchKey?: string; // param tìm kiếm khi nhập input text
    data?: any[]; // d/s select box lấy từ dữ liệu fix cứng (đk notLoad = true)
    notLoad?: boolean; // không call api
    multiple?: boolean; // chọn nhiều
    taggable?: boolean; // chuyển sang type tag (phải có đk multiple = true)
    search?: string | string[]; // string || string[] - tìm kiếm theo một hay nhiều field khác
    params?: object; // truyền param default khi lấy d.s
    filter?: boolean; // có thể nhập thông tin vào input không (default true)
    disabled?: boolean; // bật | tắt tương tác với select
    noClear?: boolean; // ẩn | hiện icon xóa value
  };
  layout?: string | number; // chia grid (12) cho tìm kiếm table config
};
