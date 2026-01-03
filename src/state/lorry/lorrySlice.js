import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAllLorries,
    deleteLorry,
    updateLorryStatus,
} from "../../api/lorry.api";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

/**
 * Fetch all lorries
 */
export const fetchAllLorries = createAsyncThunk(
    "lorries/fetchAllLorries",
    async (_, { rejectWithValue }) => {
        try {
            return await getAllLorries();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

/**
 * Delete lorry by ID
 */
export const deleteLorryById = createAsyncThunk(
    "lorries/deleteLorryById",
    async (lorryId, { rejectWithValue }) => {
        try {
            await deleteLorry(lorryId);
            return lorryId;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

/**
 * Update lorry status
 */
export const updateLorryStatusById = createAsyncThunk(
    "lorries/updateLorryStatusById",
    async (
        { lorryId, status, userId, comment },
        { rejectWithValue }
    ) => {
        try {
            const updatedLorry = await updateLorryStatus({
                lorryId,
                status,
                userId,
                comment,
            });

            // 🔥 backend already returns full updated lorry
            return updatedLorry;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const lorriesSlice = createSlice({
    name: "lorries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            /* ---------------- Fetch all ---------------- */
            .addCase(fetchAllLorries.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllLorries.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchAllLorries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to load lorries";
            })

            /* ---------------- Delete ---------------- */
            .addCase(deleteLorryById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteLorryById.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(
                    (lorry) => lorry.lorryId !== action.payload
                );
            })
            .addCase(deleteLorryById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to delete lorry";
            })

            /* ---------------- Update status ---------------- */
            .addCase(updateLorryStatusById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateLorryStatusById.fulfilled, (state, action) => {
                state.loading = false;

                const updatedLorry = action.payload;

                const index = state.items.findIndex(
                    (l) => l.lorryId === updatedLorry.lorryId
                );

                if (index !== -1) {
                    // 🔥 Replace entire object
                    state.items[index] = updatedLorry;
                }
            })
            .addCase(updateLorryStatusById.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.payload || "Failed to update lorry status";
            });
    },
});

export default lorriesSlice.reducer;
