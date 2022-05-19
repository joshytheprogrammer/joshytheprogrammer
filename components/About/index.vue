<template>
  <div class="about">
    <div v-if="mobile">
      <MJumbotron />
    </div>
    <div v-else>
      <DJumbotron />
    </div>
  </div>
</template>

<script>
import DJumbotron from "./Jumbotron.vue"
import MJumbotron  from "./MJumbotron.vue"

import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      mobile: 'mobile/mobile',
    }),
  },
  components: {
    DJumbotron,
    MJumbotron
  }
}
</script>

<style>

</style>