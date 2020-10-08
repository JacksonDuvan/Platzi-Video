const INITIAL_STATE = {
  category: [],
  suggestion: [],
  selectedMovie: false,
};

const videos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SUGGESTION_LIST':
      return {
        ...state,
        suggestion: action.payload,
      };
    case 'SET_CATEGORY_LIST':
      return {
        ...state,
        category: action.payload,
      };
    case 'SET_SELECTED_MOVIE':
      return {
        ...state,
        selectedMovie: action.payload.movie,
      };
    default:
      return state;
  }
};

export default videos;