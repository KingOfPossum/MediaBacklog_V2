<script setup lang="ts">
const games = ref([
  {
    id: 1,
    name: 'Metroid Prime',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3w4w.webp'
  },
  {
    id: 2,
    name: 'Mario Odyssey',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1mxf.webp'
  },
  {
    id: 3,
    name: 'Donkey Kong Country',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co70qn.webp'
  },
  {
    id: 4,
    name: 'Doom Eternal',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3p5n.webp'
  },
  {
    id: 5,
    name: 'Ocarina of Time',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3nnx.webp'
  },
  {
    id: 6,
    name: 'Mario Kart World',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/cob9s9.webp'
  },
  {
    id: 7,
    name: 'Killer7',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/cobw10.webp'
  },
  {
    id: 8,
    name: 'Okami',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3mpk.webp'
  },
  {
    id: 9,
    name: 'Katamari Damacy',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co67mq.webp'
  }
])
</script>

<template>
  <UContainer class="flex flex-col bg-accented rounded-lg p-5">
    <div class="grid grid-cols-4 gap-x-5 gap-y-5 overflow-y-auto flex-1 p-6">
      <div
        v-for="game in games"
        :key="game.id"
      >
        <UCard
          :title="game.name"
          class="hover:scale-110 transition-transform duration-400 h-full"
        >
          <img
            :src="game.img"
            :alt="game.name"
            width="50%"
            class="rounded-lg"
          >
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
