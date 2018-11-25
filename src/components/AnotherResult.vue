<template>
    <div>
      <div class="col-sm-8 col-xs-12 col-md-6 col-sm-offset-2 col-md-offset-3">
          <!-- 
              here, counter and clicks values are displayed
              we use string interpolation for this
              and inside string interpolation
              we have the getters
              namely,
              doubleCounter
              stringCounter
           -->
          <p>counter: {{ doubleCounter }}</p>
          <p>clicks: {{ stringCounter }}</p>
      </div>
    </div>
</template>

<script>
/* 
    we need to import mapGetters to use mapGetters
    from vues
    mapGetters is a js file so
    we enclose it in curly braces
 */


import { mapGetters } from 'vuex';
    export default {
        computed: {

            /* 
                here, we can also use
                mapGetters([])
                but instead we use
                ...mapGetters([])
                because, there may be another computed function we need to execute
                so in order to execute other computed functions
                we need to use babel-preset-stage-3
                

                to install it we use
                npm install --save-dev babel-preset-stage-3
             */

            ...mapGetters([
            'doubleCounter',
            'stringCounter'
        ])
        }
        
    }
</script>