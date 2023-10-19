<template>
  <div class="coming-soon">
    <div class="overlay">
      <div class="content">
        <h1>Coming Soon</h1>
        <p>We're working on something exciting! Stay tuned for the updates.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.coming-soon {
  background: url('https://res.cloudinary.com/dsgvwxygr/image/upload/v1697740414/joshytheprogrammer/jeremy-bishop-QHZn3-0bbEM-unsplash_lue70f.jpg') center/cover no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    padding: 20px;
    text-align: center;

    .content {
      color: $light;

      h1 {
        font-size: 36px;
        padding-bottom: 0.8rem;
        margin: 0;
      }

      p {
        font-size: 18px;
        margin: 0;
      }
    }
  }

  @media screen and (max-width: $medium) {

    .overlay {
      width: 90%;

      .content {
        h1 {
          font-size: 24px;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
