import React from 'react'
import {createSlice} from '@reduxjs/toolkit'

const ItemSlice = createSlice({
    name : 'items',
    initialState : [],
    reducers : {
        addItems : (state, action)=>{
            state.push(action.payload);
        },
        deleteItems : (state, action)=>{
            return state.filter((item)=>item.id!==action.payload)
        },
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