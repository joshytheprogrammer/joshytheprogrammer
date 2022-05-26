<template>
  <div class="content">
    <Card v-for="item in data" :key="item.id" :data="item" />
  </div>
</template>

<script>
import Card from "../Helpers/B-Card.vue"

export default {
  components: {
    Card
  },
  data(){
    return {
      data: [
        {
          id: 0,
          imgLink: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2",
          title: "Why I still use PHP",
          link: "why-I-still-use-php"
        },
        {
          id: 0,
          imgLink: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2",
          title: "Why I still use PHP",
          link: "why-I-still-use-php"
        },
        {
          id: 0,
          imgLink: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2",
          title: "Why I still use PHP",
          link: "why-I-still-use-php"
        },
        {
          id: 0,
          imgLink: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2",
          title: "Why I still use PHP",
          link: "why-I-still-use-php"
        },
        {
          id: 0,
          imgLink: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2",
          title: "Why I still use PHP",
          link: "why-I-still-use-php"
        },
        {
          id: 0,
          imgLink: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2",
          title: "Why I still use PHP",
          link: "why-I-still-use-php"
        },
        {
          id: 0,
          imgLink: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2",
          title: "Why I still use PHP",
          link: "why-I-still-use-php"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 90%;
  margin: 0 auto;

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4,1fr);

  @media screen and (max-width: $mediumDesktop) {
    grid-template-columns: repeat(3,1fr);
  }

  @media screen and (max-width: $small) {
    grid-template-columns: repeat(1,1fr);
  }
}
</style>