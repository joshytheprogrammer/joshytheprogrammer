<template>
  <div class="videos">
    <Headers>
      <template #heading>
        My YouTube Channel
      </template>
      <template #desc>
        Stay up to date with our latest YouTube videos without leaving our domain.
      </template>
    </Headers>
    <div class="list">
      <Card v-for="video in videos" :key="video.id.videoId" :data="video" />
    </div>
  </div>
</template>

<script>
import Headers from "~/components/App/Headers.vue"
import Card from "~/components/Helpers/V-Card.vue"
export default {
  head(){
    return {
      title: 'joshytheprogrammer - My Videos',
      meta: [
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
      ]
    }
  },
  components: {
    Headers,
    Card
  },
  data(){
    return {
      videos: []
    }
  },
  async fetch() {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = 'UCS-TwxE3ym8cWyX7bH4O09Q';

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&key=${API_KEY}`;

    await this.$axios.get(url)
    .then(response => {
      this.videos = response.data.items.filter(item => item.id.kind === 'youtube#video');
    })
    .catch(error => {
      console.error(error);
    });
  }
}
</script>

<style lang="scss" scoped>
.videos {
  .list {
    width: 90%;
    margin: 1rem auto;

    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3,1fr);

    @media screen and (max-width: $medium) {
      width: 100%;
      padding: 0.9rem;
      grid-template-columns: repeat(2,1fr);
    }

    @media screen and (max-width: $s-medium) {
      display: block;
    }
  }
}
</style>
