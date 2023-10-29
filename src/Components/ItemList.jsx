import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItems, editItems } from '../Redux/ItemSlice';

const ItemList = () => {
  const items = useSelector((state) => state.items);
// const items = [{id : 1, name : "Nipun jain", description : 'Aspiring software developer'}]
  const dispatch = useDispatch();

  const [editingItemId, setEditingItemId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const handleEditStart = (id, name, description) => {
    setEditingItemId(id);
    setEditedName(name);
    setEditedDescription(description);
  };

  const handleEditCancel = () => {
    setEditingItemId(null);
  };

  const handleEditSave = (id) => {
    if (editedName && editedDescription) {
      dispatch(editItems({ id, name: editedName, description: editedDescription }));
      setEditingItemId(null);
    }
  };

  return (
    <div className='items-List'>
      <ul className='list-container'>
        {items.length!==0 ? items.map((item) => (
          <li className='list-item' key={item.id}>
            {editingItemId === item.id ? (
            <div className='edit-item'>
                <div>
                    <input
                        className='edit-input'
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                    />
                    <input
                        className='edit-input'
                    type="text"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    />
                </div>
                <div>
                    <button className='save-btn' onClick={() => handleEditSave(item.id)}>Save</button>
                    <button className='cancle-btn' onClick={handleEditCancel}>Cancel</button>
                </div>
            </div>
            ) : (
              <div className='result-container'>
                <div className='result'><strong>{item.name}</strong> - {item.description}</div>
                <div>
                    <button className='edit-btn' onClick={() => handleEditStart(item.id, item.name, item.description)}>Edit</button>
                    <button className='delete-btn' onClick={()=>dispatch(deleteItems(item.id))}>Delete</button>
                </div>
              </div>
            )}
          </li>
        )) : <div style={{textAlign:'center', color:'gray'}}>No Items to Show in the List !!</div>}
      </ul>
    </div>
  );
};

export default ItemList;