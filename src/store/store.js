import { configureStore } from "@reduxjs/toolkit";

import { AuthSlice } from "./auth-slice";
import { RequestSlice } from "./request-slice";
import { ResponseSlice } from "./response-slice";
import { ImageSlice } from "./image-slice";

export const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,

        request: RequestSlice.reducer,

        response: ResponseSlice.reducer,

        image: ImageSlice.reducer,
    },
});
