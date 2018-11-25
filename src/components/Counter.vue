<template>
    <div>
      <div class="col-sm-8 col-xs-12 col-md-6 col-sm-offset-2 col-md-offset-3">
          <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Increment</button>
          <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrement</button>

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

import * as types from '../store/types';

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

            ...mapGetters(/* [
            'doubleCounter',
            
        ] */{
            Counter: types.DOUBLE_COUNTER
            
        })
        }
        
    }
</script>