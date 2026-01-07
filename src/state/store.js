import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "./collection/collectionSlice";

export const store = configureStore({
    reducer: {
        collections: collectionReducer,
    },
});
