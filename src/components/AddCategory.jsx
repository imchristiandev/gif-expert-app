import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState('')
  const onInputChange = ( { target } ) => {
    setInputValue( target.value )
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1 ) return;
    setInputValue( '' );
    onAddCategory( inputValue.trim() );
  }
  
  return (
    <form aria-label="form" onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired
}
