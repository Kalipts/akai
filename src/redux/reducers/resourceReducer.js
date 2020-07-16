import * as types from "../actions/actionType";

const resourceReducer = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_RESOURCE:
      return [...state, { ...action.resource }];
    case types.DELETE_RESOURCE:
      return state.filter((resource) => resource.id !== action.id);
    case types.UPDATE_RESOURCE:
      return state.map((resouce) => {
        if (resouce.id === action.id) {
          return {
            ...resouce,
            action,
          };
        } else return resouce;
      });
    default:
      return state;
  }
};

export default resourceReducer;
