<template>
    <div>
      <div class="col-sm-8 col-xs-12 col-md-6 col-sm-offset-2 col-md-offset-3">
          <button class="btn btn-primary" @click="increment">Increment</button>
          <button class="btn btn-primary" @click="decrement">Decrement</button>

      </div>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                this.$store.state.counter++;
            },
            decrement() {
                this.$store.state.counter--;
            }
        }
    }
</script>