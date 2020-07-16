import * as types from "./actionType";

export const createResource = (resource) => {
  return {
    type: types.CREATE_RESOURCE,
    resource: resource,
  };
};

export const deleteResouce = (id) => {
  return {
    type: types.DELETE_RESOURCE,
    id: id
  }
};

export const editResource = (id) => {
  return {
    type: types.EDIT_RESOURCE,
    id
  }
};

export const updateResource = (resource) => {
  return {
    type: types.UPDATE_RESOURCE,
    resource
  }
}