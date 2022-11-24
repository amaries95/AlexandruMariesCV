import {createSlice} from "@reduxjs/toolkit";

const initialReferencesState = {referenceList: [], isFormVisible: false};

const referenceSlice = createSlice({
    name: "reference",
    initialState: initialReferencesState,
    reducers: {
        saveReferences(state, actions){
            state.referenceList = actions.payload;
        },
        setReferenceFormToVissible(state) {
            state.isFormVisible = true;
        },
        setReferenceFormToHidden(state) {
            state.isFormVisible = false;
        }
    }
});

export default referenceSlice.reducer;
export const referenceActions = referenceSlice.actions;