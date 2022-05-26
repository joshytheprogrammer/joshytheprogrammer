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
import DJumbotron from "~/components/About/Jumbotron.vue"
import MJumbotron  from "~/components/About/MJumbotron.vue"
import Work from "~/components/About/Work.vue"
import Blog from "~/components/About/Blog.vue"

export default {
  name: 'about',
  components: {
    DJumbotron,
    MJumbotron,
    Work,
    Blog
  }
}
</script>
