import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export default new Vuex.Store( {
    state: {
        showMenuModal: false,
        showSearchModal: false,
    },
    mutations: {
        toggleMenuModal( state ) {
            state.showMenuModal = ! state.showMenuModal;
        },
        closeMenuModal( state ) {
            state.showMenuModal = false;
        },
        toggleSearchModal( state ) {
            state.showSearchModal = ! state.showSearchModal;
        },
        closeSearchModal( state ) {
            state.showSearchModal = false;
        },
        variablesNull( state ) {
            state.showMenuModal   = false;
            state.showSearchModal = false;
        }
    },
    getters: {
        showMenuModal: state => state.showMenuModal,
        showSearchModal: state => state.showSearchModal,
    }
} );
