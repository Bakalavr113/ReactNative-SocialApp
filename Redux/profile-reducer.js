export const SET_USERS = "SET_USERS";
export const IS_FETCH = "IS_FETCH";
const DELETE_USERS =" DELETE_USERS"
const initialState = {
  Posts: [
  ],
  fetch: true,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, Posts: action.users };
    case IS_FETCH:
      return { ...state, fetch: action.fetch }; 
      case DELETE_USERS:
        return { ...state, Posts:[...state.Posts.filter((post) => post.id !== action.id)] };
    default:
      return state;
  }
};
export const getUsers = () => (dispatch) => {
  dispatch(setIsFetchAction(true));
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=66a5795a47aa4d6747afca2de4294f86&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate").then((response) => response.json()).then((data) => {
    // console.log(data)
    dispatch(setUsersAction(data.results));
    dispatch(setIsFetchAction(false));
  });
};
export const setIsFetchAction = (fetch) => ({ type: IS_FETCH, fetch });
export const deleteUsersAction = (id) => ({ type: DELETE_USERS, id });
export const setUsersAction = (users) => ({ type: SET_USERS, users });
export default profileReducer;
