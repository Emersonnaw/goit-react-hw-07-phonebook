// const initialState = {
//     contacts: {
//         items: [],
//         isLoading: false,
//         error: null
//     },
//     filter: ""
// };
export const getContacts = state => state.contacts.contacts.items; 

export const getIsLoading = state => state.contacts.contacts.isLoading;

export const getError = state => state.contacts.contacts.error;