export const INITIAL_STATE = {
  isLoading: false,
  movies: [],
  error: false,
};

export const movieReducer = (state, action) => {
  if (action.type === "FETCH_START") {
    return {
      isLoading: true,
      error: false,
      movies: [],
    };
  } else if (action.type === "FETCH_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      movies: action.payload,
    };
  } else if (action.type === "FETCH_ERROR") {
    return {
      ...state,
      error: true,
      movies: [],
    };
  }
};
