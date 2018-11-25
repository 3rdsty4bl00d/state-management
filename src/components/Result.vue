<template>
    <div>
      <div class="col-sm-8 col-xs-12 col-md-6 col-sm-offset-2 col-md-offset-3">
          <p>counter: {{ counter }}</p>
      </div>
    </div>
</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.getters.doubleCounter;
            }
        }
    }
</script>