<template>
  <section class="bg-gray-300">
    <div class="flex flex-col md:flex-row justify-evenly md:max-w-7xl mx-auto">
      <a
        v-for="social of socials"
        :key="social.name"
        :href="social.link"
        target="_blank"
        :title="social.name"
        class="px-4 py-16 transition duration-1000 filter grayscale hover:grayscale-0"
      >
        <img v-if="social.logo" :src="social.logo" :alt="social.name" />
        <span v-else>{{ social.name }}</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          name: 'LinkedIn',
          link: 'https://linkedin.com/guillaume-lefrant',
          logo: 'https://www.lefrantguillaume.com/logo_linkedin.png'
        },
        {
          name: 'Malt',
          link: 'https://www.malt.fr/profile/guillaumelefrant',
          logo: 'https://www.lefrantguillaume.com/logo_malt.png'
        },
        {
          name: 'Github',
          link: 'https://github.com/LeNiglo',
          logo: 'https://www.lefrantguillaume.com/logo_github.png'
        },
      ]
    }
  }
}
</script>

<style>

</style>
