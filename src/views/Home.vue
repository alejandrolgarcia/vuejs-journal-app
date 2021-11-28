<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="goToJournal" class="btn btn-primary">Primary</button>
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
