<template>
  <footer>
    <div class="_links">
      <div class="phase">
        <h2>Page Links</h2>
        <div class="urls">
          <NuxtLink to="/links">Shortcuts</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/work">Work</NuxtLink>
          <NuxtLink to="/projects">Projects</NuxtLink>
          <NuxtLink to="/learn">Learn</NuxtLink>
          <NuxtLink to="/videos">Videos</NuxtLink>
          <NuxtLink to="/books">Books</NuxtLink>
        </div>
      </div>
      <div class="phase">
        <h2>External Links</h2>
        <div class="urls">
          <a target="_blank" href="https://blog.joshytheprogrammer.com">My Blog</a>
          <a @click.prevent="" target="_blank" href="https://academy.joshytheprogrammer.com">The Academy (Coming soon)</a>
        </div>

      </div>
      <div class="phase">
        <h2>Contact Links</h2>
        <div class="urls">
          <a href="https://forms.gle/3oM7tpLvsn1nKpby6">Contact Form</a>
          <a href="mailto:jtpsupport.dentist080@passfwd.com">Contact Mail</a>
          <a href="https://instagram.com/joshytheprogrammer">Instagram Support</a>
          <a href="https://t.me/joshytheprogrammer">Telegram Support</a>
        </div>
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
    <div class="copyright">
      &copy; {{ new Date().getFullYear() }} <a target="_blank" href="https://mayworkslimited.com">Mayworks Integrated Limited</a>. All Rights Reserved
    </div>
  </footer>
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
footer {
  width: 100%;
  display: block;
  padding: 2rem;

  ._links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    align-self: center;
    margin: auto;

    .phase{
      padding: 1rem 0;

      h2 {
        font-weight: 500;
        font-size: 24px;
      }

      .urls {
        // padding: 1rem 0.8rem;

        a {
          display: block;
          color: $dark;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }

          margin: 1.8rem 0;
        }
      }

      .social {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0.8rem 0;

        a {
          color: inherit;
          text-decoration: none;
        }


      }
    }

  }

  .copyright {
    text-align: center;
    font-size: 14px;

    a {
      color: $dark;
    }
  }

  @media screen and (max-width: $medium) {
    padding: 0.9rem;
  }
}
</style>
