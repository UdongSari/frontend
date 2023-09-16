import { createSlice } from "@reduxjs/toolkit";

export const ResponseSlice = createSlice({
    name: "response-slice",

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

export const ResponseFetchThunk = () => {
    return async (dispatch) => {
        dispatch(
            ResponseAction.setState({
                status: "fetching",
                data: null,
            })
        );

        const request = async () => {
            const response = await fetch(`${process.env.REACT_APP_HOST}/api/v1/user/grapher/search`, {
                method: "POST",
                body: JSON.stringify({
                    si: null,
                    gu: null,
                    dong: null,
                }),
            });
            if (!response.ok) throw new Error("");
            return response.json();
        };

        try {
            const data = await request();
            ResponseAction.setState({
                status: "success",
                data: data,
            });
        } catch (err) {
            ResponseAction.setState({
                status: "failed",
                data: null,
            });
        }
    };
};

export const ResponseAction = ResponseSlice.actions;
