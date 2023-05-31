<template>
  <div>
    <h1 class="text-center font-bold text-3xl">Rick and Morty</h1>

    <div class="bg-white">

      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            <div v-for="personaje in personajes" :key="personaje.id">
              <div class="group relative">

                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img loading="lazy" width="150" height="150" :src="personaje.image" :alt="personaje.name" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>

                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a :href="`/personajes/${personaje.id}`">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        {{personaje.name}}
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">{{personaje.species}}</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
      </div>

    </div>

  </div>
</template>

<script setup>
  import {onMounted,ref} from "vue";

  const personajes = ref([]);

  const getPersonajes = async()=>{
    const respuesta = await fetch("https://rickandmortyapi.com/api/character");
    const data = await respuesta.json();
    personajes.value = data.results;
  }

  onMounted(()=>{
    getPersonajes();
  });
</script>