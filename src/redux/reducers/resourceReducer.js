import * as types from "../actions/actionType";

const resourceReducer = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_RESOURCE:
      return [...state, { ...action.resource }];

    case types.DELETE_RESOURCE:
      return state.filter((resource) => resource.id !== action.id);

    case types.UPDATE_RESOURCE:
      return state.map((resource) => {
        console.log("action: ", action.resource);
        if (resource.id === action.resource.id) {
          return {
            ...resource,
            name: action.resource.name,
          };
        } else {
          return resource;
        }
      });

    default:
      return state;
  }
};

export default resourceReducer;
