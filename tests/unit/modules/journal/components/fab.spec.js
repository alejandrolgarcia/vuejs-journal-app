import { shallowMount } from '@vue/test-utils'
import Fab from '@/modules/journal/components/Fab'

describe('Pruebas en el FAB component', () => {
    
    test('debe de mostrar el ícono por defecto', () => {

        const wrapper = shallowMount( Fab )
        expect( wrapper.find('i').classes('fa-plus') ).toBe( true )
        
    })

    test('debe de mostrar el ícono por argumento: fab-circle', () => {

        const wrapper = shallowMount( Fab, {
            props: {
                icon: 'fab-circle'
            }
        })

        expect( wrapper.find('i').classes('fab-circle') ).toBe( true )

    })

    test('debe de emitir el evento on:click cuando se hace click', () => {

        const wrapper = shallowMount( Fab )

        wrapper.find('button').trigger('click')

        expect( wrapper.emitted('on:click') ).toHaveLength(1)
        
    })

});
