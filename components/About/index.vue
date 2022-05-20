<template>
  <div class="about">
    <div v-if="mobile">
      <MJumbotron />
    </div>
    <div v-else>
      <DJumbotron />
    </div>
    <Work />
  </div>
</template>

<script>
import DJumbotron from "./Jumbotron.vue"
import MJumbotron  from "./MJumbotron.vue"
import Work from "./Work.vue"

import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      mobile: 'mobile/mobile',
    }),
  },
  components: {
    DJumbotron,
    MJumbotron,
    Work
  }
}
</script>

<style>

</style>