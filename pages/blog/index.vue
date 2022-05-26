<template>
  <div class="blog">
    <MJumbotron v-if="mobile" />
    <DJumbotron v-else />
    <!-- All other components involved -->
    <Content />
  </div>
</template>

<script>
import {mapGetters} from "vuex"

import DJumbotron from "~/components/Blog/Jumbotron.vue"
import MJumbotron  from "~/components/Blog/MJumbotron.vue"
import Content from "~/components/Blog/Content.vue"

export default {
  name: 'blog',
  computed: {
    ...mapGetters({
      mobile: 'mobile/mobile',
    }),
  },
  components: {
    DJumbotron,
    MJumbotron,
    Content
  }
}
</script>