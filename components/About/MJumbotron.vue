<template>
  <div class="jumbotron">
    <div class="_desc">
      <span>Hi, I’m Nsofor Joshua and I am a Fullstack Developer</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus habitant cras nisi sit. Risus adipiscing nisi porta scelerisque ultricies gravida neque viverra sed.</p>
      <button>Email Me</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.jumbotron {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/me.png");

  color: $light;
  height: 60%;


  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;

  ._desc {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    span {
      @include header;
      padding: 1rem 0;
    }

    p {
      @include important-text;
    }

    button {
      background: $light;
      color: $dark;
      @include jumbotron-button;
    }
  }
}
</style>