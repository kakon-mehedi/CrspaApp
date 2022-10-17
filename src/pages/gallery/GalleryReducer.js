export const INITIAL_STATE = {
  isLoading: false,
  images: {},
  error: false,
};

export const imagesReducer = (state, action) => {
  if (action.type === "FETCH_START") {
    return {
      isLoading: true,
      error: false,
      images: {},
    };
  } else if (action.type === "FETCH_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      images: action.payload,
    };
  } else if (action.type === "FETCH_ERROR") {
    return {
      ...state,
      isLoading: false,
      error: true,
      images: {},
    };
  }
};
