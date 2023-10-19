<template>
  <div class="header">
    <h1>
      <slot name="heading" />
    </h1>
    <p> <slot name="desc" /> </p>
    <!-- <a href="#newsletter">Join our squad</a> -->
  </div>
</template>

<style lang="scss" scoped>
.header {
  padding: 72px 1rem;
  height: 400px;
  background: inherit;
  // background-image: url("../../assets/bubbles.svg");
  // background-image: url("https://res.cloudinary.com/dsgvwxygr/image/upload/v1697656402/blog/shubham-dhage-VDyf4yVc6fE-unsplash_iawleb.jpg");
  background-image: url("https://res.cloudinary.com/dsgvwxygr/image/upload/v1697740410/joshytheprogrammer/javier-miranda-SYRNx7SLHCk-unsplash_zafpff.jpg");
  color: $light;
  background-attachment: fixed;
  background-repeat: no-repeat;
  object-fit: fill;
  // border-bottom: 1px solid $dark;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  h1, p {
    padding: 0.4rem 0;
  }

  h1 {
    font-size: 48px;
    font-weight: 500;
    line-height: 1.35;
  }

  p {
    font-size: 20px;
    line-height: 1.95;
  }

  a {
    @include jumbotron-button;
    font-size: inherit;
    margin: 1rem auto;
  }

  @media screen and (max-width: $medium){
    height: 700px;
  }
}
</style>
