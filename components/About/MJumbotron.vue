<template>
  <div class="jumbotron">
    <img src="../../assets/me.png" alt="me">
    <div class="_desc">
      <span>Welcome to the Joshytheprogrammer Programming Agency</span>
      <p>Unlock the power of innovation with cutting-edge solutions and expert programming services. Our team of dedicated programmers is here to bring your digital dreams to life. Whether it's web development, software solutions, or custom applications, we've got you covered. Join us on this exciting journey to turn your ideas into reality. Let's create something extraordinary together.</p>
      <a href="https://forms.gle/3oM7tpLvsn1nKpby6">Contact us</a>
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
