import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components'

describe('Pruebas en <AddCategory />', () => {
    
    test('Debe de cambiar el valor de la caja de texto', () => {
        render( <AddCategory onAddCategory={ () => {} } /> )
        const input = screen.getByRole('textbox')
        fireEvent.input( input, { target: { value: 'Saitama' } } )
        expect( input.value ).toBe( 'Saitama' )
        //screen.debug()
    })

    test('Debe de llamar onAddCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama'
        render( <AddCategory onAddCategory={ () => {} } /> )
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue } } )
        fireEvent.submit( form )
        expect( input.value ).toBe ( '' )
    })

})