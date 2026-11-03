import { searchBar } from '~/composables/searchBar.ts'
import { games } from '~/data/testGames.ts'

export const gamesFilter = () => {
  const { searchQuery } = searchBar()

  const filteredGames = computed(() => {
    const query = searchQuery.value.toLowerCase()

    console.log(searchQuery.value)

    return games.filter((item) => {
      if ((searchQuery.value.length) > 0) {
        return item.name.toLowerCase().includes(query)
      } else {
        return true
      }
    })
  })

  return { filteredGames }
}
