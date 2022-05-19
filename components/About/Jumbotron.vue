<template>
  <div>
    <div class="jumbotron">
      <div class="_me">
        <img src="../../assets/me.png" alt="Nsofor Joshua, black and white, joshytheprogrammer">
      </div>
      <div class="_desc">
        <span>Hi, I’m Nsofor Joshua and I am a Fullstack Developer</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus habitant cras nisi sit. Risus adipiscing nisi porta scelerisque ultricies gravida neque viverra sed.</p>
        <button>Email Me</button>
      </div>
    </div>
    <img src="../../assets/waves.svg" alt="cool wave effect">
  </div>
</template>

<script>
export default {

}
</script>

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
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
    }

    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
    }

    button {
      background: $dark;
      color: $light;
      border: none;
      font-size: 16px;
      font-weight: 500;
      border-radius: 4px;
      height: fit-content;
      width: fit-content;
      padding: 8px 12px;
      margin: 1rem 0;
      cursor: pointer;
      transition: box-shadow .2s ease-in-out, padding .2s linear;

      &:hover {
        box-shadow: 0px 8px 8px $dark;
      }
    }
  }
}
</style>