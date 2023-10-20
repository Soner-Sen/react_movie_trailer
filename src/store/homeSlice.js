import { createSlice } from "@reduxjs/toolkit";

/*const initialState = {
    url: {},
    genres: {},
}*/
//Redux benutzt die Immer Libary: Erkennt änderungen zum Draft State und 
//erstellt einen neuen immutable State 
export const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        genres: {},
    },
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;