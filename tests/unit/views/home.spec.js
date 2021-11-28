import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home'

describe('Pruebas en el Home View', () => {

    test('debe de renderizar el componente correctamente', () => {
        const wrapper = shallowMount( Home )
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('al hacer clic en el boton debe redireccionar a no-entry', () => {
        
        // crear nuestro mock
        const mockRouter = {
            push: jest.fn()
        }

        const wrapper = shallowMount( Home, {
            global: {
                mocks: {
                    $router: mockRouter
                }
            }
        })

        // estimulo
        wrapper.find('button').trigger('click')

        expect( mockRouter.push ).toHaveBeenCalled()
        expect( mockRouter.push ).toHaveBeenCalledWith({ name: 'no-entry'})

    })

});
