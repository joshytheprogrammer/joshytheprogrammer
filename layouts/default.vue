<template>
  <div class="app">
    <MNavigation v-if="mobile" />
    <DNavigation v-else />
    <Nuxt />
    <Footer />
    <!-- <Newsletter /> -->
  </div>
</template>

<script>
import DNavigation from "../components/App/NavBar.vue" // Desktop Navbar
import MNavigation from "../components/App/MobileNav.vue" // Mobile Navbar
import Newsletter from "../components/App/Newsletter.vue"
import Footer from "../components/App/Footer.vue"

import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      mobile: 'mobile/mobile',
    }),
  },
  components: {
    DNavigation,
    MNavigation,
    Newsletter,
    Footer
  },
  mounted() {
    this.isMobile()

    // Watch for window size change
    window.addEventListener("resize", this.isMobile);
  },
  unmounted() {
    window.removeEventListener("resize", this.isMobile);
  },
  methods: {
    ...mapMutations({
      isMobile: 'mobile/checkWidth',
    }),
  },

}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
}
</style>
