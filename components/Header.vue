<template>
  <header class="min-h-screen flex flex-col justify-center items-center font-extralight text-2xl">
    <h1 class="text-6xl">Guillaume Lefrant</h1>
    <p class="">Web Developer</p>

    <button class="absolute bottom-4 animate-pulse" @click.prevent="handleScrollDownClick">
      <font-awesome-layers class="fa-2x">
        <font-awesome-icon icon="circle" />
        <font-awesome-icon icon="arrow-down" transform="shrink-6" class="text-white" />
      </font-awesome-layers>
    </button>
  </header>
</template>

<script>

export default {
  methods: {
    handleScrollDownClick: function () {
      document.getElementsByTagName('section')?.[0]?.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style>

</style>
