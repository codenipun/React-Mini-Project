import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit'
import {addItems} from '../Redux/ItemSlice'

const ItemForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    
    const handleSubmit= ()=>{
        if(name && description){
            dispatch(addItems({
                id : nanoid(),
                name,
                description
            }));

            setName("");
            setDescription("");
        }else{
            alert("Please Add Both the Fields");
        }
    }
    return (
        <div>
            <input 
                type='text' 
                value={name} 
                onChange={(e)=>setName(e.target.name)} 
                placeholder='Name'
            />
            <input 
                type='text' 
                value={description} 
                onChange={(e)=>setName(e.target.description)} 
                placeholder='Description'
            />
            <button type='button' onChange={handleSubmit}>ADD</button>
        </div>

    )
}

export default ItemForm