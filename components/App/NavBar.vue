<template>
  <nav>
    <NuxtLink to="/" class="logo" title="Go back home">joshytheprogrammer</NuxtLink>
    <div class="_navigation">
      <NuxtLink class="link" to="/">About</NuxtLink>
      <NuxtLink class="link" to="/work">Work</NuxtLink>
      <NuxtLink class="link" to="/projects">Projects</NuxtLink>
      <a class="link" target="_blank" href="https://blog.joshytheprogrammer.com">Blog </a>
    </div>
    <div class="social">
      <a href="https://github.com/joshytheprogrammer" title="Visit my GitHub profile"><Icon class="icon" icon="akar-icons:github-fill" /></a>
      <a href="https://gitlab.com/joshytheprogrammer" title="Visit my GitLab profile"><Icon class="icon" icon="cib:gitlab" /></a>
      <a href="https://twitter.com/joshytheprog" title="Follow me on Twitter"><Icon class="icon" icon="akar-icons:twitter-fill" /></a>
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

    @media screen and (max-width: $medium) {
      font-size: 20px;
    }
  }

  ._navigation {
    .link {
      @include nav-link;
      margin: 0 0.4rem;
    }
  }

  .social {
    margin: 12px 0 0 0;

    a {
      color: inherit;
      text-decoration: none;
    }

    .icon {
      cursor: pointer;
      margin: 0 0.4rem;
    }
  }
}
</style>
