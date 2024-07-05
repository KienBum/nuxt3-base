import API_PATH from "~~/enums/API_PATH";

export default class CommonService {
  public path: string;
  constructor(path: string) {
    this.path = path;
  }

  public async getByPage(params = {}) {
    const { data, error, pending } = await useAPI({
      path: `${this.path}/getList` as API_PATH,
    })._get(params);
    return data;
  }

  public async finById(id: string) {
    const { data, error, pending } = await useAPI({
      path: `${this.path}/get/${id}` as API_PATH,
    })._get();
    return data;
  }

  public async create(body: {}) {
    const { data, error, pending } = await useAPI({
      path: `${this.path}/create` as API_PATH,
    })._post(body);
    return data;
  }

  public async update(body: {}) {
    const { data, error, pending } = await useAPI({
      path: `${this.path}/update` as API_PATH,
    })._put(body);
    return data;
  }

  public async delete(id: string) {
    const { data, error, pending } = await useAPI({
      path: `${this.path}/delete/${id}` as API_PATH,
    })._delete();
    return data;
  }
}
