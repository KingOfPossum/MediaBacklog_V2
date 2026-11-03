import { searchBar } from '~/composables/searchBar.ts'
import { games } from '~/data/testGames.ts'
import { useConsoleFilter } from '~/composables/consoleFilter.ts'

export const gamesFilter = () => {
  const { searchQuery } = searchBar()
  const { activatedConsoles } = useConsoleFilter()

  const filteredGames = computed(() => {
    return games.filter((item) => {
      const searchFilter = (searchQuery.value.length > 0 && item.name.toLowerCase().includes(searchQuery.value.toLowerCase())) || searchQuery.value.length === 0
      const consoleFilter = item.consoles.some(console => activatedConsoles.value.includes(console))

      return searchFilter && consoleFilter
    })
  })

  return { filteredGames }
}
