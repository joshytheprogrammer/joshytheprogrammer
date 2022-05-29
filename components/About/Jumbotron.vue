<template>
  <div>
    <div class="jumbotron">
      <div class="_me">
        <img src="../../assets/me.png" alt="Nsofor Joshua, black and white, joshytheprogrammer">
      </div>
      <div class="_desc">
        <h1>Hi, I’m Nsofor Joshua and I am a Fullstack Developer</h1>
        <p>My preferred technologies are <bold>Nuxtjs</bold> and <bold>Laravel</bold> but I am also familiar with <bold>Nodejs </bold> and <bold> Python</bold>. I have worked with several clients and I would be happy to assist with your next project.</p>
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

    h1 {
      @include header;
      margin: 1rem 0;
    }

    p {
      @include important-text;
      margin: 1rem 0;
    }

    a {
      @include jumbotron-button;
      font-size: 14px;
    }
  }
}
</style>