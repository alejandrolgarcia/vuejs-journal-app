<template>
    <Navbar />

    <div v-if="isLoading" 
        class="m-0 vh-100 row justify-content-center align-items-center"
    >
        <div class="col-auto text-center mt-5">
            Espere por favor...
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>
    </div>

    <div v-else
        class="d-flex"
    >
        <div class="col-4">
            <EntryList />
        </div>
        <div class="col">
            <router-view />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapActions, mapState } from 'vuex'

export default {

    components: {
        Navbar: defineAsyncComponent( () => import('../components/Navbar')),
        EntryList: defineAsyncComponent( () => import('../components/EntryList'))
    },
    methods: {
        ...mapActions('journal', ['loadEntries'])
    },
    created() {
        this.loadEntries()
    },
    computed: {
        ...mapState('journal', ['isLoading'])
    }
}
</script>

<style scoped>
</style>