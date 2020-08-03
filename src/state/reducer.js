export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQDLnOxYoC7N6C6ly4bDw_6vB9IeMzIoJuWw7jCAPYziuoHygvP6VE-acypeBzIw4Gwwi5G_5v5jSUrZGOBFPxL2CgDxQeE8Rg7QRvMzCZnfoGdbK5p6NWlPaMvuGm8Lu18eXoIMdYIK18Pvgs_b0Cor0j5mYdpNeMmk-Y0",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
