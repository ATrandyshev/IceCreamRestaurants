import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    entities: {},
    ids: [],
    status: "notStarted",
  },
  reducers: {
    startLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = "loading";
    },
    failLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = "failed";
    },
    successLoading: (state, { payload }) => {
      state.entities = (payload || []).reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;
        return acc;
      }, {});

      state.ids = (payload || []).map(({ id }) => id);

      state.status = "success";
    },

    addReview: (state, { payload }) => {
      const { id, idreview } = payload;

      state.entities[id].reviews = [...state.entities[id].reviews, idreview];
    },
  },
});

export default restaurantSlice;
