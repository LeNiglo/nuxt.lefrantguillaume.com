<template>
  <header class="min-h-screen flex flex-col justify-center items-center font-extralight text-2xl relative overflow-hidden">
    <h1 class="text-3xl md:text-6xl">Guillaume Lefrant</h1>
    <p class="">Web Developer</p>

    <div class="absolute -top-4 left-0 right-0 z-10 transform origin-top duration-100 transition-transform" :style="`transform: scale(1, ${effectScale})`">
      <header-clouds></header-clouds>
    </div>
    <div class="absolute -bottom-4 left-0 right-0 z-10 transform origin-bottom duration-100 transition-transform" :style="`transform: scale(1, ${effectScale})`">
      <header-waves></header-waves>
    </div>
    <button class="absolute bottom-4 animate-pulse z-20" @click.prevent="handleScrollDownClick">
      <font-awesome-layers class="fa-2x">
        <font-awesome-icon icon="circle" />
        <font-awesome-icon icon="arrow-down" transform="shrink-6" class="text-white" />
      </font-awesome-layers>
    </button>
  </header>
</template>

<script>
import HeaderWaves from './Header/HeaderWaves.vue'
import HeaderClouds from './Header/HeaderClouds.vue'

export default {
  components: {
    HeaderWaves,
    HeaderClouds,
  },
  data() {
    return {
      debounceTimeout: null,
      effectScale: 1,
    }
  },
  methods: {
    handleScrollDownClick: function () {
      document.getElementsByTagName('section')?.[0]?.scrollIntoView({ behavior: 'smooth' })
    },
    handleScrollInWindow: function () {
      if (this.debounceTimeout) return false
      this.debounceTimeout = setTimeout(() => this.debounceTimeout = null, 50)

      const { scrollY, screen: { height } } = window
      this.effectScale = 1 + (scrollY / height * 5)
    }
  },
  mounted() {
    document.addEventListener('scroll', this.handleScrollInWindow)
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScrollInWindow)
  }
}
</script>

<style>

</style>
