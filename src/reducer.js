export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   remove after finish debugging
  // token:
  //   "BQDN5OjzAUBhnaCZbH4kwuTir1lhRR3oPbBQgYuMC9emq_KZT2wT5jQixrgbB6swJU0guR635DnDbnO9rkrPJQGZP0l3nsPt37koSCKYEHrknW7GpAGlDj8MK7yJvz3SM9VoqIWWSWa2qlH9Hp73yARJ2B9zczN9IZpyaAfk-Siqo4lC3EmdsWQBnkACM-9tL8Rb5XUypOuThGQtKUzo",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAYLISTS":
      return { ...state, playlists: action.playlists };
    default:
      return state;
  }
};
export default reducer;
