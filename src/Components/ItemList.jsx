import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItems, editItems } from '../Redux/ItemSlice';

const ItemList = () => {
  const items = useSelector((state) => state.items);
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
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editingItemId === item.id ? (
              <div>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <input
                  type="text"
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
                <button onClick={() => handleEditSave(item.id)}>Save</button>
                <button onClick={handleEditCancel}>Cancel</button>
              </div>
            ) : (
              <div>
                <span>{item.name} - {item.description}</span>
                <button onClick={() => handleEditStart(item.id, item.name, item.description)}>Edit</button>
                <button onClick={()=>dispatch(deleteItems(item.id))}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;