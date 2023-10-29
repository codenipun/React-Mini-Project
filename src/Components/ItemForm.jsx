import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit'
import {addItems} from '../Redux/ItemSlice'

const ItemForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    
    const handleSubmit = ()=>{
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
        <div className='itemsForm'>
            <input 
                className='form-input'
                type='text' 
                value={name} 
                onChange={(e)=>setName(e.target.value)} 
                placeholder='Name'
            />
            <input 
                className='form-input'
                type='text' 
                value={description} 
                onChange={(e)=>setDescription(e.target.value)} 
                placeholder='Description'
            />
            <button className='form-Add-btn' onClick={handleSubmit}>ADD</button>
        </div>
    )
}

export default ItemForm