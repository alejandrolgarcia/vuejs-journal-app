import journalRouter from '@/modules/journal/router' 

describe('Pruebas en el Router Module de Journal', () => {
    
    test('el router debe tener la configuración predeterminada', async () => {
        
        expect( journalRouter ).toMatchObject({
            name: 'journal',
            component: expect.any( Function ),
            children: [
                {
                    path: '',
                    name: 'no-entry',
                    component: expect.any( Function ),
                },
                {
                    path: ':id',
                    name: 'entry',
                    component: expect.any( Function ),
                    props: expect.any( Function ),
                }
            ]
        })

        // expect( (await journalRouter.children[0].component()).default.name ).toBe('NoEntrySelected')
        // expect( (await journalRouter.children[1].component()).default.name ).toBe('EntryView')

        const promiseRoutes = []

        journalRouter.children.forEach( child => promiseRoutes.push( child.component ()) )
        const routes = ( await Promise.all( promiseRoutes)).map( r => r.default.name )

        expect( routes ).toContain( 'NoEntrySelected' )
        expect( routes ).toContain( 'EntryView' )

    });

    test('debe de retornar el Id de la ruta', () => {

        const route = {
            params: {
                id: 'ABC-123'
            }
        }

        // expect( journalRouter.children[1].props( route ) ).toEqual( { id: 'ABC-123' } )
        const entryRoute = journalRouter.children.find( route => route.name === 'entry' )
        expect( entryRoute.props( route ) ).toEqual({ id: 'ABC-123' })

    })    
});


