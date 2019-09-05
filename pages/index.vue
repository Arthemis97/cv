<template>
  <div class="container">
    <vue-particles
      color="#ffffff"
      :particleOpacity="0.5"
      linesColor="#eee"
      :particlesNumber="15"
      shapeType="circle"
      :particleSize="3"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    />
    <ksvuefp :options="options" :sections="sections" class="custom-full-page">
      <ksvuefp-section
        v-for="(section,index) in sections"
        :section="section"
        :key="index"
        :section-index="index"
        :background-color="'transparent'"
      >
        <transition name="fade" v-show="$ksvuefp.canAnimContent(index, true)">
          <div class="content tw-flex tw-mx-auto">
            <div class="tw-text-white tw-w-full tw-text-center" v-if="index == 0">
              <vue-typer :repeat="0" text="Welcome to my personal webpage :))"></vue-typer>
            </div>
            <div class="tw-text-white tw-w-full tw-text-center" v-if="index == 1">
              <div class="tw-flex">
                <div class="tw-mx-3 tw-w-1/2">
                  <h4
                    class="content-title tw-cursor-pointer tw-text-2xl tw-text-shadow-lg tw-mb-10"
                  >Боловсрол</h4>
                  <light-timeline class="tw-text-left tw-mx-auto" :items="edu"></light-timeline>
                </div>
                <div class="tw-mx-3 tw-w-1/2">
                  <h4
                    class="content-title tw-cursor-pointer tw-text-2xl tw-text-shadow-lg tw-mb-10"
                  >Ажлын туршлага</h4>
                  <light-timeline class="tw-text-left tw-mx-auto" :items="exp"></light-timeline>
                </div>
              </div>
            </div>
            <div class="tw-text-white tw-w-full" v-if="index == 2">
              <h4
                class="content-title tw-cursor-pointer tw-text-2xl tw-text-shadow-lg tw-mb-10"
              >Бүтээлүүд</h4>
              <ul class="tw-flex">
                <li
                  @click="goToProject('http://www.13school.edu.mn')"
                  class="tw-cursor-pointer tw-mr-5"
                >13school.edu.mn</li>•
                <li
                  @click="goToProject('http://baitogaijin.com')"
                  class="tw-cursor-pointer tw-mr-5 tw-ml-5"
                >BaitoGaijin</li>•
                <li
                  @click="goToProject('http://enabull.com')"
                  class="tw-cursor-pointer tw-mr-5 tw-ml-5"
                >Enabull</li>•
                <li
                  @click="goToProject('http://ship2mgl.com')"
                  class="tw-cursor-pointer tw-mr-5 tw-ml-5"
                >Ship2mgl</li>•
                <li
                  @click="goToProject('http://tabsolution.jp')"
                  class="tw-cursor-pointer tw-mr-5 tw-ml-5"
                >Tabsolution</li>•
                <li
                  @click="goToProject('http://studygaijin.com')"
                  class="tw-cursor-pointer tw-mr-5 tw-ml-5"
                >Studygaijin</li>
                <!-- <li @click="goToProject('http://www.incollex.com')" class="tw-cursor-pointer tw-ml-5">Incollex</li> -->
              </ul>
            </div>
            <div class="tw-text-white tw-w-full" v-if="index == 3">
              <h4
                class="content-title tw-cursor-pointer tw-text-2xl tw-text-shadow-lg tw-mb-10"
              >Чадвар & Технологи</h4>
              <ul class="skills tw-flex">
                <li
                  v-for="(skill,skill_index) in skills"
                  :key="skill_index"
                  @mouseover="skillShowByIndex = skill_index"
                  @mouseout="skillShowByIndex = null"
                >
                  <i :class="skill.icon" class="tw-pointer-events-none"></i>
                  {{skill.text}}
                  <span
                    v-if="skillShowByIndex == skill_index"
                    class="tw-ml-8 tw-pointer-events-none"
                    v-anime="{ easing: 'easeInOutQuad', innerHTML: `${90}%`, round: 1, duration: 500, delay: 200}"
                  ></span>
                </li>
              </ul>
              <h4
                class="content-title tw-cursor-pointer tw-text-2xl tw-text-shadow-lg tw-mb-10"
              >Бусад</h4>
              <ul class="skills tw-flex">
                <li
                  v-for="(item,item_index) in other"
                  :key="item_index"
                  @mouseover="otherShowByIndex = item_index"
                  @mouseout="otherShowByIndex = null"
                >
                  {{item.title}}
                  <span
                    v-if="otherShowByIndex == item_index"
                    class="tw-ml-8 tw-pointer-events-none"
                  >{{item.text}}</span>
                </li>
              </ul>
            </div>
            <div class="tw-text-white tw-w-full" v-if="index == 4">
              <h4
                class="content-title tw-cursor-pointer tw-text-2xl tw-text-shadow-lg tw-mb-10"
              >Холбогдох</h4>
            </div>
          </div>
        </transition>
      </ksvuefp-section>
      <v-icon
        @click.native="nextPage"
        v-anime="{ translateY: 20, direction: 'alternate', easing: 'linear', loop: true }"
        class="scroll-icon tw-inline tw-p-2 tw-border tw-rounded-full tw-text-white"
        :name="'chevrons-down'"
      ></v-icon>
    </ksvuefp>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Fuck.....   "
    };
  },
  computed: {
    isLast: function() {
      if (this.sections == this.$ksvuefp.currentIndex) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {},
  data() {
    return {
      skillShowByIndex: null,
      otherShowByIndex: null,
      projects: [
        
      ],
      other: [
        {
          title: "ReactJS",
          text: "Learning..."
        },
        {
          title: "PurgeCSS",
          text: "OK"
        },
        {
          title: "TailwindCSS",
          text: "OK"
        },
        {
          title: "NextJS",
          text: "Learning"
        },
        {
          title: "NuxtJS",
          text: "OK"
        }
      ],
      skills: [
        {
          icon: "devicon-html5-plain",
          percent: 90,
          text: "HTML"
        },
        {
          icon: "devicon-css3-plain",
          percent: 90,
          text: "CSS"
        },
        {
          icon: "devicon-bootstrap-plain",
          percent: 90,
          text: "Bootstrap"
        },
        {
          icon: "devicon-foundation-plain",
          percent: 90,
          text: "Foundation"
        },
        {
          icon: "devicon-sass-plain",
          percent: 90,
          text: "SASS"
        },
        {
          icon: "devicon-javascript-plain",
          percent: 90,
          text: "JS"
        },
        {
          icon: "devicon-jquery-plain",
          percent: 90,
          text: "jQuery"
        },
        {
          icon: "devicon-nodejs-plain",
          percent: 90,
          text: "NodeJS"
        },
        {
          icon: "devicon-nodewebkit-plain",
          percent: 90,
          text: "Webkit"
        },
        {
          icon: "devicon-vuejs-plain",
          percent: 90,
          text: "VueJS"
        },
        {
          icon: "devicon-express-original",
          percent: 90,
          text: "ExpressJS"
        },
        {
          icon: "devicon-php-plain",
          percent: 90,
          text: "PHP"
        },
        {
          icon: "devicon-wordpress-plain",
          percent: 90,
          text: "Wordpress"
        },
        {
          icon: "devicon-laravel-plain",
          percent: 90,
          text: "Laravel"
        },
        {
          icon: "devicon-codeigniter-plain",
          percent: 90,
          text: "Codeigniter"
        },
        {
          icon: "devicon-mysql-plain",
          percent: 90,
          text: "MySQL"
        },
        {
          icon: "devicon-linux-plain",
          percent: 90,
          text: "Linux"
        },
        {
          icon: "devicon-apache-plain",
          percent: 90,
          text: "Apache"
        },
        {
          icon: "devicon-nginx-plain",
          percent: 90,
          text: "NGINX"
        },
        {
          icon: "devicon-git-plain",
          percent: 90,
          text: "Git"
        },
        {
          icon: "devicon-ssh-plain",
          percent: 90,
          text: "SSH"
        },
        {
          icon: "devicon-photoshop-plain",
          percent: 90,
          text: "Photoshop"
        },
        {
          icon: "devicon-vim-plain",
          percent: 90,
          text: "Vim"
        }
      ],
      edu: [
        {
          tag: "2014-06-01",
          color: "#fff",
          content: "Орхон аймаг, Эрдэм ахлах сургууль төгссөн"
        },
        {
          tag: "2014-09-01",
          color: "#fff",
          content:
            "Орхон аймаг, Отгонбилэг-ийн нэрэмжит Технологийн Их Сургуульд элссэн"
        },
        {
          tag: "2018-05-01",
          color: "#fff",
          content:
            "Орхон аймаг, Отгонбилэг-ийн нэрэмжит Технологийн Их Сургуульд төгссөн"
        }
      ],
      exp: [
        {
          tag: "2016-06-01",
          color: "#fff",
          content: "Есүй Ковер ХХК - Програмист"
        },
        {
          tag: "2018-09-25",
          color: "#fff",
          content: "Tabsolution Co.,ltd - Програмист, Вэб хөгжүүлэгч"
        }
      ],
      sections: [1, 2, 3, 4, 5],
      options: {
        // Your custom options here
        duration: 800,
        overlay: false
      }
    };
  },
  methods: {
    nextPage() {
      if (!this.isLast) {
        console.log(this.isLast);
        this.$ksvuefp.$emit("ksvuefp-nav-click", {
          nextIndex: this.$ksvuefp.currentIndex + 1
        });
      }
    },
    goToProject(url) {
      window.open(url, "_blank");
    }
  },
  components: {}
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap");
@import "../node_modules/ks-vue-fullpage/dist/ks-vue-fullpage.min.css";
body {
  margin: 0;
  font-family: "Ubuntu", sans-serif;
  webkit-transition: 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  -o-transition: 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
}
.container {
  background: #000;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .ksvuefp-section {
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      text-align: center;
      color: white;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
    opacity: 1;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  .custom-full-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .content {
    width: 60rem;
    .content-title {
      position: relative;
      text-transform: uppercase;
      text-decoration: none;
      padding-bottom: 5px;
      display: inline-block;
      &:before,
      &:after {
        content: "";
        position: absolute;
        bottom: 2px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #fff;
      }
      &:before {
        opacity: 0;
        transform: translateY(-8px);
        transition: transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275),
          opacity 0s;
      }
      &:after {
        opacity: 0;
        transform: translateY(8px/2);
        transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
          opacity 0.2s;
      }
      &:hover,
      &:focus {
        &:before,
        &:after {
          opacity: 1;
          transform: translateY(0);
        }
        &:before {
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
            opacity 0.2s;
        }
        &:after {
          transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
            opacity 0s 0.2s;
        }
      }
    }
  }
  /* SCSS */
  .vue-typer {
    /* Styles for the vue-typer container
     e.g. font-family, font-size  */
    font-size: 36px;
    .custom.char {
      /* Styles for each character
       e.g. color, background-color */
      color: #fff;
      &.typed {
        /* Styles specific to typed characters
         i.e. characters to the left of the caret */
      }
      &.selected {
        /* Styles specific to selected characters
         i.e. characters to the right of the caret while VueTyper's
              'eraseStyle' is set to a selection-based style */
      }
      &.erased {
        /* Styles specific to erased characters
         i.e. characters to the right of the caret while VueTyper's
              'eraseStyle' is set to a non-selection-based style */
      }
    }

    .custom.caret {
      /* Styles for the caret
       e.g. background-color, animation, display */

      &.pre-type {
        /* Styles for the caret when it is idle before typing
         i.e. before a string starts being typed, during 'preTypeDelay' */
      }
      &.pre-erase {
        /* Styles for the caret when it is idle before erasing
         i.e. before a string starts being erased, during 'preEraseDelay' */
      }
      &.idle {
        /* Styles for the caret when it is idle, but VueTyper has not yet completed typing
         i.e. when 'pre-type' or 'pre-erase' is set, but not 'complete' */
      }
      &.typing {
        /* Styles for the caret while VueTyper is typing
         i.e. when the caret is moving forwards */
      }
      &.selecting {
        /* Styles for the caret while VueTyper is selecting
         i.e. when the caret is moving backwards and 'eraseStyle' is
         set to a selection-based style */
      }
      &.erasing {
        /* Styles for the caret while VueTyper is erasing
         i.e. when the caret is moving backwards and 'eraseStyle' is
         set to a non-selection-based style */
      }
      &.complete {
        /* Styles for the idle caret when VueTyper has finished all typing/erasing */
      }
    }
  }

  .icon {
    width: 36px;
  }

  .scroll-icon {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 5em;
    cursor: pointer;
  }

  .line-container {
    color: #aaa;
    font-family: Ubuntu;
    .line-item {
      padding: 1.5em;
    }
  }
  .skills {
    width: 100%;
    flex-wrap: wrap;
    li {
      font-size: 18px;
      font-weight: 400;
      text-shadow: #000;
      width: 12em;
      margin-bottom: 1.5em;
      flex-direction: row;
      display: flex;
      margin-right: 1em;
      cursor: pointer;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      padding: 0.5em 0.3em;
      &:hover {
        width: 13em;
        background: #fff;
        color: #000;
        outline-color: rgb(237, 237, 237);
      }
      i {
        margin-right: 0.8em;
        font-size: 28px;
      }
      span {
        margin-left: auto;
        margin-right: 0.5em;
        font-weight: 700;
      }
    }
  }
}
</style>
