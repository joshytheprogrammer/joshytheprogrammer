<template>
  <div class="extensions-page">
    <Headers>
      <template #heading>
        All Extensions
      </template>
      <template #desc>
        Discover our collection of amazing extensions.
      </template>
    </Headers>

    <div class="extensions">
      <div class="extension-card" v-for="item in data" :key="item.slug">
        <NuxtLink :to="'/extensions/' + item.slug" class="extension-link">
          <div class="extension-thumbnail">
            <img :src="item.thumbnail" alt="">
          </div>
          <div class="extension-info">
            <h2>{{ item.name }}</h2>
            <!-- You can add more details about the extension here if available in your data -->
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from "~/components/App/Headers.vue";

export default {
  components: {
    Headers,
  },
  data() {
    return {
      data: [],
    };
  },
  async fetch() {
    let data = await this.$content('extensions').fetch();
    this.data.push(...data);
  },
};
</script>

<style lang="scss" scoped>
.extensions {
  width: 90%;
  margin: 1rem auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  @media screen and (max-width: $medium) {
    width: 100%;
    margin: 1rem;
    display: block;
  }
}
</style>
