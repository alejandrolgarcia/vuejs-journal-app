<template>
  <div class="d-flex justify-content-center">
      <h3>¡No hay elementos seleccionados!</h3>
  </div>
  <Fab />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Fab: defineAsyncComponent( () => import('../components/Fab.vue'))
    }
}
</script>

<style lang="scss" scoped>
    div {
        align-items: center;
        height: 100%;
    }
</style>