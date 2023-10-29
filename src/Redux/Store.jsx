import {configureStore} from '@reduxjs/toolkit'
import itemsReducer from './ItemSlice'


// this is the global store that state of every component
const Store = configureStore({
    reducer : {
        items : itemsReducer
    }
})

export default Store;