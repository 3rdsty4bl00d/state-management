<template>
    <div>
      <div class="col-sm-8 col-xs-12 col-md-6 col-sm-offset-2 col-md-offset-3">
          <p>counter: {{ doubleCounter }}</p>
          <p>clicks: {{ stringCounter }}</p>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters([
            'doubleCounter',
            'stringCounter'
        ])
        }
        
    }
</script>