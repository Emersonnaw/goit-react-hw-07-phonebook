import { createSelector } from "@reduxjs/toolkit";

export const selectedContacts = state => state.contacts.contacts.items; 

export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectError = state => state.contacts.contacts.error;

export const selectFilter = state => state.filter;


export const selectContacts = createSelector([selectedContacts], (contacts) => {
    return contacts;
});