<template>
  <div>
      <div class="col-sm-8 col-xs-12 col-md-6 col-sm-offset-2 col-md-offset-3 text-center">
          <h1>Vuex</h1>
          <hr>
          <!-- 
              app-counter is a component
              we registered below.
              by enclosing it in the tag
              we are able to render it in the DOM
              now, if we render it in the DOM
              the facility that are provided in the
              Counter.vue
              will be visible to the user

              it is better to use kebab-case
              in this section
              looks a bit standard
           -->
          <app-counter></app-counter>
          <br>
          <hr>
          <app-another-counter></app-another-counter>
          <br>
          <hr>

            <!-- 
                app-result is another component
                same as before
             -->

          <app-result></app-result>
          <br>
          <hr>
          <!-- 
              same as before
           -->
          <app-another-result></app-another-result>
          <!-- 
              to use v-model here
              we have to use get and set
              in the computed properties

              look below
           -->
          <input type="text" v-model="value">
      </div>
  </div>
</template>

<script>

/* 
    importing components
    Counter, Result, AnotherResult
    are the component name given randomly
    this will import all the facility 
    present in the
    Counter.vue
    Result.vue
    AnotherResult.vue
 */

 /* 
    it is better to use pascal-case
    in this section
    looks a bit standard
  */

import Counter from './components/Counter.vue';
import AnotherCounter from './components/AnotherCounter.vue';
import Result from './components/Result.vue'
import AnotherResult from './components/AnotherResult.vue'


export default {

    computed: {
        /* 
            we use value, not as a function here
            but we use get and set function inside 
            value
            this is a very important property to use
            if we want to only get data
            in this case we want the data of value
            so from get() we return the value
            and from set() we dispatch the updated value
            from updateValue
        */
       /* 
            be very caution about using
            getter and setter,
            might be harmful in the big application
       */
        value: {
            get() {
                return this.$store.getters.value;
            },
            set() {
                this.$store.dispatch('updateValue', value);
            }
        }
    },
    methods: {
        updateValue(event) {
            this.$store.dispatch('updateValue', event.target.value);
        }
    },

/* 
    to use components
    we have to register it
    and to register it
    we give a name to the imported version

    it is better to use camel-case 
    in this section
    looks a bit standard
 */

  components: {
      appCounter: Counter,
      appAnotherCounter: AnotherCounter,
      appResult: Result,
      appAnotherResult: AnotherResult
  }
}
</script>

<style>

</style>
