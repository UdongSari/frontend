import { createSlice } from "@reduxjs/toolkit";
import { HOST } from "../utils/host";

export const RequestSlice = createSlice({
  name: "request-slice",

  initialState: {
    status: null,
    data: null,
  },

  reducers: {
    setState: (state, action) => {
      state.status = action.payload.status;
      state.data = action.payload.data;
    },
  },
});

export const RequestFetchThunk = (si, gu, token) => {
  return async (dispatch) => {
    dispatch(
      RequestActions.setState({
        status: "fetching",
        data: null,
      })
    );

    const request = async () => {
      const response = await fetch(`${HOST}/api/v1/user/post/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          si: si,
          gu: gu,
        }),
      });
      if (!response.ok) throw new Error("");
      return response.json();
    };

    try {
      const data = await request();
      dispatch(
        RequestActions.setState({
          status: "success",
          data: data,
        })
      );
    } catch (err) {
      dispatch(
        RequestActions.setState({
          status: "failed",
          data: null,
        })
      );
    }
  };
};

export const RequestActions = RequestSlice.actions;
