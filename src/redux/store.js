import { configureStore } from "@reduxjs/toolkit";
import { ContactReducer } from "./contactsSlice";
import { filterSlice } from "./filterSlice";

export const store = configureStore({
    reducer: {
        contacts: ContactReducer,
        filter: filterSlice.reducer,    
    } 
}); 

