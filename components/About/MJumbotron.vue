<template>
  <div class="jumbotron">
    <img src="../../assets/me.png" alt="me">
    <div class="_desc">
      <span>Hi, I’m Nsofor Joshua and I am a Fullstack Developer</span>
      <p>My preferred technologies are <bold>Nuxtjs</bold> and <bold>Laravel</bold> but I am also familiar with <bold>Nodejs </bold> and <bold> Python</bold>. I have worked with several clients and I would be happy to assist with your next project.</p>
      <a href="mailto:jurassicjoshua@protonmail.com">Email Me</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.jumbotron {
  color: $light;
  position: relative;
  height: 300px;

  img {
    filter: brightness(50%);
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  ._desc {
    z-index: 99;
    position: absolute;
    top: 0;
    padding: 0 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    span {
      @include header;
      color: $light;
      padding: 1rem 0;
      font-size: 20px
    }

    p {
      @include important-text;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      margin-bottom: 8px;
    }

    a {
      @include jumbotron-button;
    }
  }
}
</style>