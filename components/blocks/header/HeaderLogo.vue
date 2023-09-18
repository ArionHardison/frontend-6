<template>
    <router-link title="Logo" class="logo primary-logo transform-scale-h" to="/">
        <img :src="logo" alt="Logo">
    </router-link>
</template>

<script>
    export default {
        name: 'Header-Logo',
        computed: {
          logo() {
            return this.$imageUrl(this.$store.state.layout.items.logo, 'tb');
          },
        }
    }
</script>
