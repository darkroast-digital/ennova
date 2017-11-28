<template>
  <div class="grid" :class="classes">
    <slot></slot>
  </div>
</template>

<script>

export default {
  data () {

    return {

    }
  },

  props: {
    classes: String
  }
}

</script>