<template>
  <div class="ext">
    <div class="container-fluid det">
      <img src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1700490861/joshytheprogrammer/cu-course-evaluator_qzuuez.png" alt="">
      <div class="info">
        <h1>CU Course Evaluator <sup>v1.3.0</sup></h1>
        <p>The CU Course Evaluator browser extension simplifies course evaluations for Covenant University students. Instead of completing a lengthy form, users express feedback by selecting a mood (Positive or Negative). The extension automates form-filling based on the mood, saving students time and effort.</p>
        <div class="downloads">
          <a href="#" download="cu-course-evaluator">Download for Firefox</a>
          <a href="#">Download for Chrome</a>
        </div>
      </div>
    </div>
    <div class="container-fluid promos">
      <div class="header">
        <h2>Screenshots & Promos</h2>
      </div>
      <div class="content">
        <p>No promotional material available...</p>
      </div>
    </div>
    <div class="container-fluid about">
      <div class="header">
        <h2>About this extension</h2>
      </div>
      <div v-html="about" class="styles"></div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        about:`
        <h1>CU Course Evaluator</h1>

        <h2>Purpose</h2>
        <p>The CU Course Evaluator is a browser extension designed to simplify the course evaluation process for students at Covenant University. Instead of manually filling out a lengthy form with numerous items, students can now express their evaluation by selecting a mood (Positive or Negative). The extension automates the form-filling process based on the chosen mood, saving time and effort for the students.</p>

        <h2>Features</h2>
        <ul>
          <li><strong>Rating Selection:</strong> Students can choose between Positive and Negative ratings to indicate their overall evaluation sentiment.</li>
          <li><strong>Automated Form Filling:</strong> The extension automatically populates the course evaluation form with predefined responses based on the selected mood.</li>
          <li><strong>User-Friendly Interface:</strong> The extension integrates seamlessly into the browser, providing a user-friendly interface for a more efficient evaluation process.</li>
        </ul>

        <h2>How to Use</h2>
        <ol>
          <li>Install the extension on your browser.</li>
          <li>Navigate to the course evaluation page on the Covenant University portal.</li>
          <li>Click on the extension icon to open the interface.</li>
          <li>Select your rating (Positive or Negative).</li>
          <li>Click the "Fill Course Evaluation Form" button.</li>
        </ol>

        <p>This ensures that you can enjoy the convenience of the extension on both Chrome and Firefox browsers.</p>

        <h2>Version History</h2>
        <ul>
          <li><strong>1.0.0 (Initial Release):</strong> Basic functionality with mood-based form filling.</li>
          <li><strong>1.1.0 (Added Random):</strong> Introduces randomization for a more varied rating experience. The extension now randomly selects between extreme and normal ratings, enhancing user interaction (e.g., Very good or good).</li>
          <li><strong>1.2.0 (Auto-Submit Option):</strong> Added an auto-submit option. Users can now choose to automatically submit the form after rating, providing a seamless experience.</li>
          <li><strong>1.3.0 (Customized for Chrome):</strong> I made a bunch of changes to the extension essentially to get it ready to be deployed to the Chrome Web Store.</li>
        </ul>

        <h2>Contributing</h2>
        <p>If you want to contribute to the project or report issues, feel free to create a pull request or open an issue on the GitHub repository.</p>

        <h2>Credits</h2>
        <p>Built by Joshua. Visit <a href="https://joshytheprogrammer.com" target="_blank">joshytheprogrammer.com</a> for more projects.</p>
        <p>Logo by Toluwani. You can contact him on <a href="https://instagram.com/canvasvisuals" target="_blank" rel="noopener noreferrer">Instagram</a> or <a href="wa.me/+2348140298447" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>

        <h2>License</h2>
        <p>This project is licensed under the MIT License</p>
        `
      }
    }
  }
</script>
<style lang="scss">

.ext {
  width: 100%;
  display: block;
  background: $rGrey;

  .container-fluid {
    background: $white;
    border-radius: 12px;
    margin: 1rem 2rem;
    padding: 1rem;

    .header {
      border-bottom: 2px solid $rGrey;

      h2 {
        padding: 1rem 0;
        font-size: 26px;
        font-weight: 500;
      }
    }


    &.promos {
      .content {
        padding: 1rem 0;
      }
    }

    &.about {
      .styles {
        margin: 1rem 0.4rem;
        font-size: 14px;
        line-height: 1.7777778;

        h1 {
          color: #333;
          font-size: 20px;
          margin-bottom: 20px;
        }

        h2 {
          color: #555;
          font-size: 18px;
          margin-top: 30px;
          margin-bottom: 15px;
        }

        h3 {
          color: #555;
          font-size: 16px;
          margin-top: 20px;
          margin-bottom: 10px;
        }

        p {
          color: #777;
          margin-bottom: 15px;
        }

        ul {
          list-style-type: disc;
          margin-left: 20px;
          color: #777;

          li {
            margin-bottom: 10px;
          }
        }

        ol {
          list-style-type: decimal;
          margin-left: 20px;
          color: #777;

          li {
            margin-bottom: 10px;
          }
        }

        a {
          color: #007bff;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    &.det {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;

      img {
        max-width: 310px;
      }

      .info {
        h1 {
          font-size: 28px;

          sup {
            font-size: 14px;
            font-weight: 400;
          }
        }

        p {
          font-size: 16px;
          padding: 1.1rem 0;
          line-height: 1.7777778;
        }

        .downloads {
          a {
            display: inline-block;
            text-decoration: none;
            background: $dark;
            color: $white;
            border-radius: 4px;
            padding: 12px 16px;
            margin-right: 12px;
          }
        }
      }
    }
  }
}
</style>
