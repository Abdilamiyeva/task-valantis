import { instance } from "./api";

export const getIds = (offset, limit, callBack) => {
  instance
    .post("", { action: "get_ids", params: { offset, limit } })
    .then((response) => {
      callBack(response.data.result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getItems = (ids, callBack) => {
  instance
    .post("", {
      action: "get_items",
      params: { ids },
    })
    .then((response) => {
      callBack(response.data.result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getFilteredData = (field, fieldValue, callBack) => {
  instance
    .post("", {
      action: "filter",
      params: { [field]: fieldValue },
    })
    .then((response) => {
      callBack(response.data.result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getFields = (fieldName, offset, limit, callback) => {
  return instance
    .post("", {
      action: "get_fields",
      params: { field: fieldName, offset, limit },
    })
    .then((response) => callback(response.data.result))
    .catch((error) => {
      console.error("Error:", error);
    });
};



