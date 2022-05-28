<template>
  <div class="blog">
    <!-- All other components involved -->
    <Content />
  </div>
</template>

<script>
import {mapGetters} from "vuex"

import Content from "~/components/Blog/Content.vue"

export default {
  name: 'blog',
  computed: {
    ...mapGetters({
      mobile: 'mobile/mobile',
    }),
  },
  components: {
    Content
  }
}
</script>