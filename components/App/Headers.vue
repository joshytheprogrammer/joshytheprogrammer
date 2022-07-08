<template>
  <div class="header">
    <h1>
      <slot name="heading" />
    </h1>
    <p> <slot name="desc" /> </p>
  </div>  
</template>

<style lang="scss" scoped>
.header {
  padding: 72px 1rem;
  height: 700px;
  background: inherit;
  background-image: url("../../assets/bubbles.svg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  object-fit: fill;
  border-bottom: 1px solid $dark;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  h1, p {
    padding: 0.9rem 0;
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
}
</style>