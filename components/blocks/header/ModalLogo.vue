<template>
    <router-link title="Logo" class="logo logo-secondary transform-scale-h" to="/">
        <img @click="closeModal"  :src="logo" alt="Logo">
    </router-link>
</template>

<script>
    export default {
        name: 'Modal-Logo',
                computed: {
            currentPage() {
                return this.$route.path;
            },
            showMenuModal () {
                return this.$store.state.showMenuModal
            },
            logo() {
               return this.$imageUrl(this.$store.state.layout.items.logo, 'tb');
            },
        },
        methods: {
            closeModal: function() {
                if (this.currentPage === '/') {
                    if (this.showMenuModal) {
                        this.$store.commit( 'closeMenuModal' );
                    }
                } else {
                    return;
                }
            }
        }
    }
</script>