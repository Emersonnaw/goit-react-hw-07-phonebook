import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from 'nanoid';
import { fetchContacts } from "./operation";
const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    },
    filter: ""
};

export const contactsSlice = createSlice({
    name: 'form',
    // initialState: {contacts:[]},
       initialState: initialState,
    // reducers:{
    //     // addFormValue(state, action) {
    //     //     state.contacts.push({...action.payload, id: nanoid() })  
    //     // },
    //     deleteContacts (state, action){
    //          state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    //     },
    // },

     extraReducers: {
         [fetchContacts.pending](state) {
             state.contacts.isLoading = true;
         },
         [fetchContacts.fulfilled](state, action) {
             state.contacts.isLoading = false;
             state.contacts.error = null;
             state.contacts.items = action.payload;
        },
         [fetchContacts.rejected](state, action) {
             state.contacts.isLoading = false;
             state.contacts.errror = action.payload;
       },
     },

});

export const { addFormValue, deleteContacts } = contactsSlice.actions;

