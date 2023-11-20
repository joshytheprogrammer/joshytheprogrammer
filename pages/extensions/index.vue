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
import Headers from "~/components/App/Headers.vue"
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
  grid-template-columns: repeat(2,1fr);

  @media screen and (max-width: $medium) {
    width: 100%;
    margin: 1rem;
    display: block;
  }
}
h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.page-description {
  color: #555;
}

.extension-card {
  max-width: 100%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 20px 0;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.extension-link {
  display: flex;
  text-decoration: none;
  color: inherit;
}

.extension-thumbnail {
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;

  img {
    max-width: 200px;
  }
}

.extension-info {
  flex: 2;
  padding: 20px;
  text-align: left;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
}
</style>
