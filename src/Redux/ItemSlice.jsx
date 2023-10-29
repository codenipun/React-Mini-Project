import {createSlice} from '@reduxjs/toolkit'


// This is the slice which contains all the reducers with spection actions to perform and if we have more state to handle we can create other reducer accordingly
const ItemSlice = createSlice({
    name : 'items',
    initialState : [],
    reducers : {

        // Reducer to add items in the list
        addItems : (state, action)=>{
            state.push(action.payload);
        },

        // Reducer to delete items in the list 
        deleteItems : (state, action)=>{
            return state.filter((item)=>item.id!==action.payload)
        },

        // Reducer to edit the items in the list
        editItems : (state, action)=>{
            const {id, name, description} = action.payload;
            const itemToEdit = state.find((item)=>item.id===id);
            if(itemToEdit){
                itemToEdit.name = name;
                itemToEdit.description = description;
            }
        }
    }
})

export const {addItems, deleteItems, editItems} = ItemSlice.actions;
export default ItemSlice.reducer;