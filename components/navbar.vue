<template>
  <div class="tw-flex tw-text-white tw-w-full tw-absolute tw-z-50 tw-px-5 tw-py-3">
    <div class="tw-mr-auto">
      <b class="tw-cursor-pointer" @click="$router.push('/')">KHTODOD</b>
    </div>
    <div class="tw-ml-auto">
      <ul class="tw-flex tw-text-xs">
        <li class="tw-ml-8 tw-cursor-pointer" :class="this.$ksvuefp.currentIndex == 0 ? 'tw-font-bold' : 'font-hairline'" @click="goToPage(0)">HOME</li>
        <li class="tw-ml-8 tw-cursor-pointer" :class="this.$ksvuefp.currentIndex == 1 ? 'tw-font-bold' : 'font-hairline'" @click="goToPage(1)">ABOUT ME</li>
        <li class="tw-ml-8 tw-cursor-pointer" :class="this.$ksvuefp.currentIndex == 2 ? 'tw-font-bold' : 'font-hairline'" @click="goToPage(2)">TIMELINE</li>
        <li class="tw-ml-8 tw-cursor-pointer" :class="this.$ksvuefp.currentIndex == 3 ? 'tw-font-bold' : 'font-hairline'" @click="goToPage(3)">PORTFOLIO</li>
        <li class="tw-ml-8 tw-cursor-pointer" :class="this.$ksvuefp.currentIndex == 4 ? 'tw-font-bold' : 'font-hairline'" @click="goToPage(4)">SKILLS</li>
        <li class="tw-ml-8 tw-cursor-pointer" :class="this.$ksvuefp.currentIndex == 5 ? 'tw-font-bold' : 'font-hairline'" @click="goToPage(5)">CONTACT ME</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  methods: {
    goToPage(index) {
      this.$ksvuefp.$emit("ksvuefp-nav-click", {
        nextIndex: index
      });
    }
  }
};
</script>