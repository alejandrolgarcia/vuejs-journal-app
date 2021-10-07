<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div @click="goToJournal" class="btn btn-primary">Primary</div>
  </div>
</template>

<script>
  export default {
    methods: {
      goToJournal() {
        this.$router.push({ name: 'no-entry'})
      }
    },
  }
</script>
