import journalApi from '@/api/journalApi'
// export const myAction = async ({ commit }) => {
// }


export const loadEntries = async ({ commit }) => {

    const { data } = await journalApi.get('/entries.json')
    const entries = []

    if ( !data ) {
        commit('setEntries', [] )
        return
    }

    for ( let id of Object.keys( data )) {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries )

}

export const updateEntry = async ( { commit }, entry ) => {  // entry debe ser un parametro

    // Desestructurar unicamente lo que necesitamos
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }

    // Peticion a firebase
    const resp = await journalApi.put(`/entries/${ entry.id }.json`, dataToSave)
    console.log( resp )

    // Commit de la mutacion -> updateEntry
    commit('updateEntry', { ...entry })
   
}

export const createEntry = async ( { commit }, entry ) => {

    console.log({ commit, entry})

    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }

    const { data } = await journalApi.post('entries.json', dataToSave)

    commit('addEntry', { id: data.name, ...dataToSave })
    return data.name

}

export const deleteEntry = async ({ commit }, id ) => {
    
    await journalApi.delete(`/entries/${ id }.json`)

    commit('deleteEntry', id)
}
