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

    <div class="body">
      <input v-model="searchQuery" type="text" placeholder="Search links" class="search-input" />

      <div class="links">
        <a class="link" :href="item.url" v-for="item in filteredData" :key="item.title">
          {{ item.title }}
        </a>
      </div>
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
  data() {
    return {
      data: [],
      searchQuery: '',
    }
  },
  async fetch() {
    let data = await this.$content('links').fetch()
    this.data.push(...data)
  },
  computed: {
    filteredData() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter(item => item.title.toLowerCase().includes(query));
    },
  },
};
</script>


<style lang="scss" scoped>
.linktree {

  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;

    .search-input {
      width: 400px;
      padding: 12px 8px;
      outline: none;
      border: 1px solid $grey;
      transition: all 0.5s ease;

      &:focus {
        border-color: $dark;
      }
    }

    .links {
      margin: 1rem;

      .link {
        display: block;
        margin-bottom: 1rem;
        min-width: 400px;
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

        @media screen and (max-width: $medium) {
          width: 100%;
          // margin: 1rem;
        }

      }
    }
  }
}

</style>
