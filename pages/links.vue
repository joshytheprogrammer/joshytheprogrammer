<template>
  <div class="linktree">
    <Headers>
      <template #heading>
        Shortcuts
      </template>
      <template #desc>
        Find our most important links.
      </template>
    </Headers>
    <div class="links">
      <a class="link" :href="item.url" v-for="item in data" :key="item.title">
        {{ item.title }}
      </a>
    </div>
  </div>
</template>

<script>
import Headers from "~/components/App/Headers.vue"
export default {
  components: {
    Headers
  },
  head: {
    title: 'JTP - Important Locations'
  },
  data(){
    return {
      data: []
    }
  },
  async fetch(){
    let data = await this.$content('links').fetch()

    this.data.push(...data)
  }
};
</script>

<style lang="scss" scoped>
.linktree {

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;


    .link {
      display: block;
      margin-bottom: 1rem;
      width: 400px;
      padding: 2rem 1rem;
      background: $dark;
      color: $light;
      text-decoration: none;
      border: 1px solid $dark;
      text-align: center;
      cursor: pointer;
      transition: all 0.7s ease;

      &:hover {
        background: $light;
        color: $dark;
      }

    }
  }
}

</style>
