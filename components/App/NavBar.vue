<template>
  <nav>
    <div class="logo" @click="$router.push('/')"  title="joshytheprogrammer">joshytheprogrammer</div>
    <div class="_navigation">
      <NuxtLink class="link" to="/">About</NuxtLink>
      <NuxtLink class="link" to="/work">Work</NuxtLink>
      <NuxtLink class="link" to="/projects">Projects</NuxtLink>
      <NuxtLink class="link" to="/challenges">Challenges</NuxtLink>
      <NuxtLink class="link" to="/blog">Blog</NuxtLink>
    </div>
    <div class="social">
      <Icon class="icon" icon="akar-icons:github-fill" /><!-- https://github.com/joshytheprogrammer -->
      <Icon class="icon" icon="akar-icons:twitter-fill" />  
    </div>
  </nav>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
  components: {
		Icon,
	},
}
</script>

<style lang="scss" scoped>
nav {
  padding: 1rem;
  height: 68px;
  display: inline-flex;
  align-content: stretch;
  justify-content: space-between;
  align-items: baseline;

  .logo {
    @include header;
    cursor: pointer;
  }

  ._navigation {
    .link {
      @include nav-link;
      margin: 0 0.4rem;
    }
  }

  .social {
    margin: 12px 0 0 0;

    .icon {
      cursor: pointer;
      margin: 0 0.4rem;
    }
  }
}
</style>