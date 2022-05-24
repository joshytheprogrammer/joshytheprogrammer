<template>
  <div class="work">
    <Heading title="Work" />
    <div class="content">
      <Card v-for="item in data" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
import Heading from "../Helpers/Headers.vue"
import Card from "../Helpers/Card.vue"
export default {
  components: {
    Heading,
    Card
  },
  data(){
    return {
      data: [
        {
          id: 0,
          imgLink: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2",
          title: "Full Gospel Official Website",
          desc: "The official FGBMFI website repo. Built with the Nuxtjs Framework.",
          preview: "",
          github: {
            exists: false,
            link: null
          }
        },
        {
          id: 1,
          imgLink: "https://trackit.com.ng/img/Track%20IT%20Logo%20official1.jpg",
          title: "TRACK I.T.",
          desc: "The official TRACKIT website and repo. ",
          preview: "https://track-it-ng.netlify.app",
          github: {
            exists: true,
            link: "https://github.com/joshytheprogrammer/trackit-website"
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.work {
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  
  .content {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3,1fr);

    @media screen and (max-width: $mediumDesktop) {
      grid-template-columns: repeat(2,1fr);
    }

    @media screen and (max-width: $small) {
      grid-template-columns: repeat(1,1fr);
    }
  }
}
</style>