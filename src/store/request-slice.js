import { createSlice } from "@reduxjs/toolkit";

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

export const RequestFetchThunk = () => {
    return async (dispatch) => {
        dispatch(
            RequestActions.setState({
                status: "fetching",
                data: null,
            })
        );

        const request = async () => {
            const response = await fetch();
            if (!response.ok) throw new Error("");
            return response.json();
        };

        try {
            const data = await request(`${process.env.REACT_APP_HOST}/api/v1/user/post/search`);
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
