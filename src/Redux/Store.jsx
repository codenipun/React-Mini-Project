import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import itemsReducer from './ItemSlice'


const Store = configureStore({
    reducer : {
        items : itemsReducer
    }
})

export default Store;