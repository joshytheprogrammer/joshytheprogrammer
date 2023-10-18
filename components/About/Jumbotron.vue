<template>
  <div>
    <div class="jumbotron">
      <div class="_me">
        <img src="../../assets/cartoon_me.png" alt="Nsofor Joshua, black and white, joshytheprogrammer">
      </div>
      <div class="_desc">
        <h1>Welcome to the Joshytheprogrammer Programming Agency</h1>
        <p>Unlock the power of innovation with cutting-edge solutions and expert programming services. Our team of dedicated programmers is here to bring your digital dreams to life. Whether it's web development, software solutions, or custom applications, we've got you covered. Join us on this exciting journey to turn your ideas into reality. Let's create something extraordinary together.</p>
        <a href="https://forms.gle/3oM7tpLvsn1nKpby6">Contact us</a>
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
    height: 100%;

    img {
      max-height: 420px;
    }
  }

  ._desc {
    padding: 0 2rem;

    h1 {
      @include header;
      color: $dark;
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

  @media screen and (max-width: $medium) {
    width: 100%;
    padding: 1rem;

    ._me {
      height: 16rem;

      img {
        height: 100%;
      }
    }
  }

  @media screen and (max-width: $s-medium) {
    flex-direction: column;

    ._me {
      height: 16rem;

      img {
        height: 100%;
      }
    }

    ._desc {
      text-align: center;
    }
  }
}
</style>
