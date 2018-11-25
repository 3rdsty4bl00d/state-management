/* 
    Vues is a state-management system
    in order to utilize this system
    we nee to import the system

    and to import the system
    we first need to download it
    npm install --save vuex
*/

/* 
    state-management is the system
    where,
    when a child's child data is to be shared with 
    another child, then,
    we make an event bus
    or another storage
    where both can change the data and use it
*/

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* 
    so we create a new storage
    which will be stored in a constant
    and exported, because this constant will not be used by this file
*/

/* 
    here, state and getters are fixed, 
    there is no other words for them
    doubleCounter and stringCounter 
    are the names of the getters
*/

/* 
    getters are another function
    where,
    all the data are computed
    and all the child components can acces it
*/

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' clicks';
        }
    }
});