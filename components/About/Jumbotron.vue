<template>
  <div>
    <div class="jumbotron">
      <div class="_me">
        <img src="../../assets/me.png" alt="Nsofor Joshua, black and white, joshytheprogrammer">
      </div>
      <div class="_desc">
        <span>Hi, I’m Nsofor Joshua and I am a Fullstack Developer</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus habitant cras nisi sit. Risus adipiscing nisi porta scelerisque ultricies gravida neque viverra sed.</p>
        <a href="mailto:jurassicjoshua@protonmail.com">Email Me</a>
      </div>
    </div>
    <img src="../../assets/waves.svg" alt="cool wave effect">
  </div>
</template>


<style lang="scss" scoped>
.jumbotron {
  width: 90%;
  margin: 2.5rem auto;

  display: flex;
  justify-content: center;
  align-items: center;

  ._me {
    max-width: 100%;
    height: auto;

    img {
      border-radius: 100%;
    }
  }

  ._desc {
    padding: 0 2rem;

    span {
      @include header;
      margin: 1rem 0;
    }

    p {
      @include important-text;
      margin: 1rem 0;
    }

    a {
      background: $dark;
      color: $light;
      text-decoration: none;
      @include jumbotron-button;
    }
  }
}
</style>