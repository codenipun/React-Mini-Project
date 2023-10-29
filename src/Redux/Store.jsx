import React from 'react'
import {configureStore} from 'redux'


const Store = configureStore({
    reducer : {
        items : itemsReducer
    }
})

export default Store