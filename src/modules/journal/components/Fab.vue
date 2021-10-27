<template>
    <button class="btn btn-primary">
        <i :class="changeIcon"></i>
    </button>
</template>

<script>
export default {

    props: {
        icon: {
            type: String,
            default: 'fa-plus'
        }
    },
    computed: {
        changeIcon() {
            return ( this.icon ) ? `fa fa-2x ${ this.icon }` : 'fa fa-2x fa-plus'
        }
    }

}
</script>

<style lang="scss" scoped>
    button {
        border-radius: 100%;
        bottom: 20px;
        height: 60px;
        position: fixed;
        right: 20px;
        width: 60px;
    }
</style>