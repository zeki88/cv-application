import React, { useState, useEffect } from 'react';
import NewForm from './NewForm';
import Button from '../common/Button';

export default function CreateForm({ object, title, onChange, onDelete, onClick, onEdit, onClose }) {
  const [activeEditId, setActiveEditId] = useState(null);

  /*useEffect(() => {
    if (object.length > 0) {
      handleEdit(object[object.length - 1].id);
    }
  }, [object]);*/

  function handleEdit(id) {
    setActiveEditId(id);
  }

  return (
    <div className="formContainer">
      <h1>{title}</h1>
      {object.map(item => (
        <NewForm
          key={item.id}
          item={item}
          isEditing={activeEditId === item.id}
          onEdit={() => {handleEdit(item.id); onEdit(item.id)}}
          onChange={(e) => onChange(e, item.id)}
          onDelete={() => onDelete(item.id)}
          onClose={() => {setActiveEditId(null); onClose(item.id)}}
        />
      ))}
      <Button
        label="Add"
        className="add"
        type="button"
        onClick={onClick}
      />
    </div>
  );
}