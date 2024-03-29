<template>
  <div class="ext">
    <div class="container-fluid det">
      <img :src="extension.thumbnail" :alt="'JTP Extensions - '+extension.name">
      <div class="info">
        <h1>{{ extension.name }} <sup> v{{ extension.version }}</sup></h1>
        <p>{{ extension.description }}</p>
        <div class="how_to_link">
          <a href="#installation">How to install extensions in Chromium Browsers (Brave, Chrome, Edge) and Firefox</a>
        </div>
        <div class="downloads" v-if="extension.downloads">
          <a v-show="extension.downloads.firefox.extLink" :href="extension.downloads.firefox.extLink" :download="extension.slug+'.xpi'">Download for Firefox</a>

          <a v-show="extension.downloads.chrome.extLink" :href="extension.downloads.chrome.extLink" :download="extension.slug">Download for Chromium</a>
        </div>
      </div>
    </div>

    <div class="container-fluid official" id="official">
      <div class="header">
        <h2>External Sources - Browser Web Stores</h2>
        <span @click="toggleOfficial">Click to {{ showOfficial ? 'hide' : 'show' }}</span>
      </div>
      <div v-show="showOfficial" class="content">
        <p>Please keep in mind that official browser extension store have their own policies and guidelines which may prevent genuinely great extensions from being listed with them. However they may also accept those extensions. In such cases, You will find the official links listed here...</p>
        <p>
          <b>Chrome/Brave/Edge: </b>
          <span>
            <a v-if="extension.downloads.chrome.offLink" :href="extension.downloads.chrome.offLink" target="_blank">CU Course Evaluator</a>
            <span v-else>Unavailable</span>
          </span>
        </p>
        <p>
          <b>Firefox: </b>
          <span>
            <a v-if="extension.downloads.firefox.offLink" :href="extension.downloads.firefox.offLink">Cu Course Evaluator</a>
            <span v-else>Unavailable</span>
          </span>
        </p>
      </div>
    </div>

    <div class="container-fluid promos">
      <div class="header">
        <h2>Screenshots & Promos</h2>
        <span @click="togglePromos">Click to  {{ showPromos ? 'hide' : 'show' }}</span>
      </div>
      <div class="content" v-if="extension.promos" v-show="showPromos">
        <p v-show="!extension.promos.images.length && !extension.promos.images.length">No promotional material available...</p>
      </div>
    </div>

    <div class="container-fluid about" >
      <div class="header">
        <h2>About this extension</h2>
        <span @click="toggleAbout">Click to {{ showAbout ? 'hide' : 'show' }} </span>
      </div>
      <div v-html="extension.about" class="styles" v-show="showAbout"></div>
    </div>


    <div class="container-fluid chrome" id="installation">
      <div class="header">
        <h2>How to Install</h2>
        <span @click="toggleInstall">Click to {{ showInstall ? 'hide' : 'show' }}</span>
      </div>
      <div v-html="how_to_install" class="styles" v-show="showInstall"></div>
    </div>

  </div>
</template>

<script>
  export default {
    head(){
      return {
        title: this.extension.name + ' - JTP extension store',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.extension.description
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.extension.name + ' - JTP extension store'
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.extension.description
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.extension.thumbnail
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: 'https://www.joshytheprogrammer.com/extensions/'+this.extension.slug
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: this.extension.name + ' -  JTP extension store'
          },
          { hid: 'twitter:description',
            name: "twitter:description",
            content: this.extension.description
          },
          {
            hid: 'twitter:image',
            name: "twitter:image",
            content: this.extension.thumbnail
          },
          {
            hid: "twitter:card",
            name: "twitter:card",
            content: "summary_large_image"
          },
        ],
        link: [
          {
            hid: 'canonical',
            rel: 'canonical',
            href: 'https://www.joshytheprogrammer.com/extensions/'+this.extension.slug
          },
        ]
      }
    },
    data() {
      return {
        showPromos: false,
        showAbout: false,
        showInstall: false,
        showOfficial: false,
        extension: {},
        how_to_install: `
          <p>Installing extensions from a .crx file on Chromium-based browsers like Brave, Chrome, and Edge, and from a .xpi file on Firefox is straightforward. Here's a step-by-step guide:</p>

          <ol>
            <li><strong>Download the Extension:</strong>
              <ul>
                <li>For <strong>Chromium-based Browsers (Brave, Chrome, Edge)</strong>:</li>
                <ul>
                  <li>Obtain the extension file you want to install in .crx format.</li>
                </ul>
                <li>For <strong>Firefox</strong>:</li>
                <ul>
                  <li>Obtain the extension file you want to install in .xpi format.</li>
                </ul>
              </ul>
            </li>

            <li><strong>Open the Extension Management Page:</strong>
              <ul>
                <li>For <strong>Chromium-based Browsers (Chrome and Edge)</strong>, you can open the extensions page by typing the following in the address bar and pressing Enter:
                  <code>chrome://extensions/</code></li>
                <li>For <strong>Brave</strong>, use:
                  <code>brave://extensions/</code></li>
                <li>For <strong>Firefox</strong>, open the Add-ons page by typing the following in the address bar:
                  <code>about:addons</code></li>
              </ul>
            </li>

            <li><strong>Enable Developer Mode (Chromium only):</strong>
              <p>In the top right corner of the Extensions (Chromium-based Browsers), there's a toggle for "Developer mode." Turn it on.</p></li>

            <li><strong>Load the Extension:</strong>
              <ul>
                <li>For <strong>Chromium-based Browsers</strong>:</li>
                <p>Once Developer mode is enabled, you will see three buttons: "Load unpacked," "Pack extension," and "Update." Click on "Load unpacked."</p>
                <li>For <strong>Firefox</strong>:</li>
                <p>Click on the gear icon on the Add-ons page, select "Install Add-on From File," and choose the .xpi file.</p>
              </ul>
            </li>

            <li><strong>Select the Extension Folder:</strong>
              <ul>
                <li>For <strong>Chromium-based Browsers</strong>:</li>
                <p>A file dialog will appear. Navigate to the folder where you extracted the extension or where the .crx file is located. Select the folder or the .crx file and click "Select Folder" or "Open."</p>
                <p><mark>In some chromium browsers, you may need to drag and drop the extension into the center of the extensions page.</mark></p>
                <li>For <strong>Firefox</strong>:</li>
                <p>After clicking "Install Add-on From File," choose the .xpi file and click "Open."</p>
              </ul>
            </li>

            <li><strong>Confirm Installation:</strong>
              <p>The extension should now appear in the list of installed extensions on the Extensions (Chromium-based Browsers) or Add-ons (Firefox) page.</p></li>

            <li><strong>Verify the Extension:</strong>
              <p>Check that the extension icon appears in your browser toolbar.</p></li>

            <li><strong>Configure if Needed:</strong>
              <p>Some extensions may require additional configuration. Check the extension's options or settings page if needed.</p></li>

            <li><strong>Done:</strong>
              <p>Your extension should now be installed and active.</p></li>
          </ol>
        `
      }
    },
    async fetch() {
      this.extension = await this.$content('extensions', this.$route.params.slug).fetch()
    },
    methods: {
      togglePromos() {
        this.showPromos = !this.showPromos;
      },
      toggleAbout() {
        this.showAbout = !this.showAbout;
      },
      toggleInstall() {
        this.showInstall = !this.showInstall;
      },
      toggleOfficial() {
        this.showOfficial = !this.showOfficial
      }
    },


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
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;

      h2 {
        font-size: 26px;
        font-weight: 500;
      }

      span {
        font-size: 12px;
        font-weight: 400;
        text-decoration: underline;
        cursor: pointer;
      }
    }

    &.promos {
      .content {
        padding: 1rem 0;
      }
    }

    &.official {
      font-size: 14px;

      p {
        color: #777;
        margin-bottom: 15px;
      }

      a {
        color: #007bff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      .content {
        margin: 1rem 0;
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
            margin: 12px 12px 0 0;
          }
        }

        .how_to_link {
          a {
            display: block;
            padding: 12px 0;
            color: $dark;
          }
        }
      }
    }
  }

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

  @media screen and (max-width: $medium) {
    .container-fluid {
      &.det {
        display: block;

        img {
          width: 100%;
          max-height: 24rem;
          object-fit: contain;
        }

        .info {
          padding: 1rem 0;
        }
      }
    }
  }

  @media screen and (max-width: $s-medium) {
    .container-fluid {
      margin: 1rem;

      .header {
        display: block;

        span {
          text-decoration: none;
          padding: 0.8rem 0;
        }
      }
    }
  }
}
</style>
