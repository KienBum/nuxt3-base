import CommonService from "./common.service";
import API_PATH from "~~/enums/API_PATH";

export const initCommonService = function (path: API_PATH) {
  return new CommonService(path);
};
