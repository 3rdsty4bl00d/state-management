<template>
    <div>
      <div class="col-sm-8 col-xs-12 col-md-6 col-sm-offset-2 col-md-offset-3">
          <button class="btn btn-primary" @click="increment(100)">Increment</button>
          <button class="btn btn-primary" @click="decrement(50)">Decrement</button>

      </div>
    </div>
</template>

<script>

    import { mapActions } from 'vuex';

    export default {
        methods: {

            ...mapActions([
                'increment',
                'decrement'
            ])
        }
    }
</script>