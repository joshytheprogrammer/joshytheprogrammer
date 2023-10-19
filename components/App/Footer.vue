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

      </div>
    </div>
    <div class="copyright">
      &copy; {{ new Date().getFullYear() }} <a target="_blank" href="https://mayworkslimited.com">Mayworks Integrated Limited</a>. All Rights Reserved
    </div>
  </footer>
</template>

<script>
  export default {

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
