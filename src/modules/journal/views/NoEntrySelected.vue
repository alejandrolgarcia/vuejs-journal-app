<template>
  <div class="d-flex justify-content-center">
      <h3>¡No hay elementos seleccionados!</h3>
  </div>
  <Fab
    @click="createNewEntry"
  />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    name: 'NoEntrySelected',
    components: {
        Fab: defineAsyncComponent( () => import('../components/Fab.vue'))
    },
    methods: {
        createNewEntry() {
            this.$router.push({ name: 'entry', params: { id: 'new' } })
        }
    }
}
</script>

<style lang="scss" scoped>
    div {
        align-items: center;
        height: 100%;
    }
</style>