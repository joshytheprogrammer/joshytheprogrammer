<template>
  <div class="newsletter" id="newsletter">
    <div id="revue-embed">
      <form action="https://www.getrevue.co/profile/joshytheprog/add_subscriber" method="post" id="revue-form" name="revue-form">
        <div class="revue-form-header">
          Join the squad
        </div>
        <div class="revue-form-group">
          <input class="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email" required>
          <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.newsletter {
  width: 100%;
  padding: 2rem 1rem;

  #revue-embed {
    width: 100%;
    margin: 0 auto;

    .revue-form-header {
      display: $grey;
      padding: 8px 0;
      font-size: 16px;
      font-weight: 500;
      line-height: 22px;
    }

    .revue-form-group {
      width: 100%;
      display: inline-flex;
      justify-content: space-evenly;

      input {
        font-size: 16px;
        font-weight: 500;
        height: 48px;
        border-radius: 12px;
      }

      input[type="email"] {
        width: 100%;
        
        border: 1px solid $dark;
        outline: none;
        padding: 0 8px;
        
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      input[type="submit"] {
        background: $dark;
        color: $light;
        cursor: pointer;
        padding: 0 8px;
        border: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }

  @media screen and (max-width: $medium){
    #revue-embed {
      .revue-form-group {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: $s-medium){
    #revue-embed {

      .revue-form-header {
        padding: auto 8px;
      }

      .revue-form-group {
        width: 100%;
        display: block;

        input {
          border-radius: 4px;
        }

        input[type="email"] {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
        
        input[type="submit"] {
          margin: 0.5rem 0;
          @include button;
        }
      }
    }
  }
}
</style>