import { createSlice } from "@reduxjs/toolkit";
import { IMAGE_API } from "../utils/host";

export const ImageSlice = createSlice({
    name: "image-slice",

    initialState: {
        status: null,
        id: null,
        url: null,
    },

    reducers: {
        setState: (state, action) => {
            state.status = action.payload.status;
            state.id = action.payload.id;
            state.url = aciton.payload.url;
        },
    },
});

export const DirectUploadThunk = () => {
    return async (dispatch) => {
        dispatch(
            ImageActions.setDirectUploadURL({
                status: "fetching",
                id: null,
                url: null,
            })
        );

        const request = async () => {
            const response = await fetch(IMAGE_API);
            if (!response.ok) throw new Error("Direct Upload URL Fetch Failed");
            return response.json();
        };

        try {
            const data = await request();

            dispatch(
                ImageActions.setDirectUploadURL({
                    status: "success",
                    id: data.id,
                    url: data.url,
                })
            );
        } catch (err) {
            dispatch(
                ImageActions.setDirectUploadURL({
                    status: "failed",
                    id: null,
                    url: null,
                })
            );
        }
    };
};

export const ImageActions = ImageSlice.actions;
