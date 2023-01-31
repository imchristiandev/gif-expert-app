import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Pruebas en <GifItemApp />', () => { 

    const title="Saitama";
    const url="https://media3.giphy.com/media/QAU5Bd0Js9w3arZ4UD/giphy.gif?cid=1d513e8bwzcndfxg5fqct1awzft9zw5rp0ghydyobrdyfj5s&rid=giphy.gif&ct=g"

    test('Debe de hacer match con el snapshot', () => { 
        const { container } = render( <GifItem title={title} url={url}/> )
        expect( container ).toMatchSnapshot()
    })

    test('Debe de mostrar con el url y el alt indicado', () => { 
        render( <GifItem title={title} url={url}/> )
        //screen.debug()
        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url )
        expect( alt ).toBe( title )
    })

    test('Debe de mostrar el título en el componente', () => { 
        render( <GifItem title={ title } url={ url }/> )
        expect( screen.getByText( title ) ).toBeTruthy()   
    })
})