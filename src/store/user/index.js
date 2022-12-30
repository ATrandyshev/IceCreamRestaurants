import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: {},
    ids: [],
    status: "notStarted",
  },
  reducers: {
    startLoading: (state) => {
      state.status = "loading";
    },
    failLoading: (state) => {
      state.status = "failed";
    },
    successLoading: (state, { payload }) => {
      state.entities = (payload || []).reduce(
        (acc, user) => {
          acc[user.id] = user;
          return acc;
        },
        { ...state.entities }
      );

      state.ids = [...state.ids, ...(payload || []).map(({ id }) => id)];

      state.status = "success";
    },

    addUser: (state, { payload }) => {
      const { id, name } = payload;
      const users = {
        ...state.entities,
        [id]: {
          id: id,
          name: name,
        },
      };

      state.entities = users;
      state.ids = [...state.ids, id];
    },
  },
});

export default userSlice;
