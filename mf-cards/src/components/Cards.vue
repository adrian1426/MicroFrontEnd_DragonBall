<template>
  <div>
    <h1 class="text-center font-bold text-3xl">Rick and Morty</h1>

    <div v-for="personaje in personajes" :key="personaje.id">
      <img loading="lazy" width="150" height="150" :src="personaje.image" :alt="personaje.name"/>
      {{personaje.name}}
    </div>
  </div>
</template>

<script setup>
  import {onMounted,ref} from "vue";

  const personajes = ref([]);

  const getPersonajes = async()=>{
    const respuesta = await fetch("https://rickandmortyapi.com/api/character");
    const data = await respuesta.json();

    console.log(data.results)
    personajes.value = data.results;
  }

  onMounted(()=>{
    getPersonajes();
  });
</script>