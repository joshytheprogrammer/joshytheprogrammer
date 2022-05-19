<template>
  <nav>
    <div class="_nav-open" v-if="menu">
      <div class="_nav">
        <div class="logo" @click="$router.push('/')" title="joshytheprogrammer">JTP</div>
        <div class="action" @click="toggleMenu">
          <!-- Icon to open menu -->
          <Icon class="icon" icon="ant-design:close-circle-filled" width="24" />
        </div>
      </div>
      <div class="_navigation">
        <NuxtLink class="link" to="/">About</NuxtLink>
        <NuxtLink class="link" to="/work">Work</NuxtLink>
        <NuxtLink class="link" to="/projects">Projects</NuxtLink>
        <NuxtLink class="link" to="/challenges">Challenges</NuxtLink>
        <NuxtLink class="link" to="/blog">Blog</NuxtLink>
        <div class="social">
          <a href="https://github.com/joshytheprogrammer" title="Visit my GitHub profile"><Icon icon="akar-icons:github-fill" /></a>
          <a href="https://twitter.com/joshytheprog" title="Follow me on Twitter"><Icon class="ml-1" icon="akar-icons:twitter-fill" /></a>
        </div>
      </div>
    </div>
    <div class="_nav-closed" v-else>
      <div class="logo" @click="$router.push('/')">JTP</div>
      <div class="action" @click="toggleMenu">
        <!-- Icon to open menu -->
        <Icon class="icon" icon="ep:menu" width="24" />
      </div>
    </div>
  </nav>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
  components: {
		Icon,
	},
  data(){
    return {
      menu: false, // true -> Open, false -> Closed
    }
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  padding: 1rem;
  height: fit-content;
  background: $light;

  ._nav-closed {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    .logo {
      @include header;
      cursor: pointer;
    }

    .action {
      width: fit-content;
      .icon {
        cursor: pointer;
      }
    }
  }

  ._nav-open {
    ._nav {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      

      .logo {
        @include header;
        cursor: pointer;
      }
    }

    ._navigation {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .link {
        @include nav-link;
        margin: 0.8rem 0;
      }

      .social {
        margin: 0.8rem 0;

        a {
          color: inherit;
          text-decoration: none;
        }

        .ml-1 {
          margin: 0 0.4rem;
        }
      }
    }
  }
}
</style>