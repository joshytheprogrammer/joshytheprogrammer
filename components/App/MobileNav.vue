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
        <!-- <NuxtLink class="link" to="/challenges">Challenges</NuxtLink> -->
        <NuxtLink class="link" to="/blog">Blog</NuxtLink>
        <div class="social">
          <a href="https://github.com/joshytheprogrammer" title="Visit my GitHub profile"><Icon class="icon" icon="akar-icons:github-fill" /></a>
          <a href="https://gitlab.com/joshytheprogrammer" title="Visit my GitLab profile"><Icon class="icon" icon="cib:gitlab" /></a>
          <a href="https://twitter.com/jtpNigeria" title="Follow me on Twitter"><Icon class="icon" icon="akar-icons:twitter-fill" /></a>
          <a href="https://instagram.com/joshytheprogrammer" title="Follow us on Instagram"><Icon class="icon" icon="ph:instagram-logo-bold" /></a>
          <a href="https://youtube.com/@joshytheprogrammer" title="Subscribe to our Youtube Channel"><Icon class="icon" icon="uil:youtube" /></a>
          <a href="https://t.me/joshytheprogrammer" title="Support from telegram."><Icon class="icon" icon="mdi:telegram" /></a>
          <a href="https://hashnode.com/@joshytheprogrammer" title="Support on hashnode"><Icon class="icon" icon="simple-icons:hashnode" /></a>
        </div>
      </div>
    </div>
    <div class="_nav-closed" v-else>
      <NuxtLink to="/" class="logo">JTP</NuxtLink>
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
  background: $dark;
  color: $light;

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
