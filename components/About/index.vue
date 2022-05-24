<template>
  <div class="about">
    <div v-if="mobile">
      <MJumbotron />
    </div>
    <div v-else>
      <DJumbotron />
    </div>
    <Work />
    <Blog />
  </div>
</template>

<script>
import DJumbotron from "./Jumbotron.vue"
import MJumbotron  from "./MJumbotron.vue"
import Work from "./Work.vue"
import Blog from "./Blog.vue"

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
    Work,
    Blog
  }
}
</script>

<style>

</style>