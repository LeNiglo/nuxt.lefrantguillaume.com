<template>
  <section>
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-evenly py-16 text-lg">
      <div class="flex flex-col justify-center space-y-4 text-left">
        <a href="https://google.com/maps?q=Bordeaux,France" target="_blank" class="hover:underline hover:text-blue-500">
          <font-awesome-icon icon="map-pin" />
          Bordeaux, France
        </a>
        <a href="mailto:lefrantguillaume@gmail.com" class="hover:underline hover:text-blue-500">
          <font-awesome-icon icon="envelope" />
          lefrantguillaume@gmail.com
        </a>
        <a href="tel:+33659698601" class="hover:underline hover:text-blue-500">
          <font-awesome-icon icon="phone-alt" />
          (+33) 6.59.69.86.01
        </a>
      </div>
      <div class="flex flex-col justify-center space-y-4 text-right">
        <div v-for="edu of educations" :key="edu.school.name">
          <h3>
            <a :href="edu.school.link" target="_blank" class="text-blue-500 hover:underline font-bold">{{ edu.school.name }}</a>
             - {{ edu.diploma }}.
          </h3>
          <p v-if="edu.description">{{ edu.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      educations: [
        {
          school: {
            name: 'EPITECH',
            link: 'https://epitech.eu/',
          },
          diploma: 'Expert in Information Technologies',
          description: '',
        },
        {
          school: {
            name: 'Univeristy of Kent',
            link: 'https://www.kent.ac.uk/',
          },
          diploma: 'Computing and Entrepreneurship MSc',
          description: '',
        },
      ]
    }
  }
}
</script>

<style>

</style>
