import React from 'react'

export const CategoryTag = ({name, onDeleteCategory}) => {

  const handleDeleteCategory = () => {
    onDeleteCategory(name);
  }
  
  return (
    <span>
        {name}
        <button onClick={handleDeleteCategory}>✕</button>
    </span>
  )
}
