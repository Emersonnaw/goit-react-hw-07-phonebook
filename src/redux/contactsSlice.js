import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./operations";
const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null,
    },
};

const handlePending = state => {
    state.contacts.isLoading = true;
    
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};



export const contactsSlice = createSlice({
    name: 'form',
    initialState,
 
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,

        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items.push(action.payload);
        },
        [addContact.rejected]: handleRejected,
        
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            const index = state.contacts.items.findIndex(
            contact => contact.id === action.payload.id
        );
            state.contacts.items.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,
    },
});

export const ContactReducer = contactsSlice.reducer;


