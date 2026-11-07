import { searchBar } from '~/composables/searchBar.ts'
import { games } from '~/data/testGames.ts'
import { useConsoleFilter } from '~/composables/consoleFilter.ts'
import { useStatusFilter } from '~/composables/statusFilter.ts'
import { useTimeFilter } from '~/composables/timeFilter.ts'

export const gamesFilter = () => {
  const { searchQuery } = searchBar()
  const { activatedConsoles } = useConsoleFilter()
  const { activatedStatus } = useStatusFilter()
  const { timeRange } = useTimeFilter()

  const filteredGames = computed(() => {
    return games.filter((item) => {
      const searchFilter = (searchQuery.value.length > 0 && item.name.toLowerCase().includes(searchQuery.value.toLowerCase())) || searchQuery.value.length === 0
      const consoleFilter = item.consoles.some(console => activatedConsoles.value.includes(console))
      const statusFilter = activatedStatus.value.includes(PlayStatus[item.status])
      const timeFilter = item.playTime > timeRange.value[0] && item.playTime < timeRange.value[1]

      return searchFilter && consoleFilter && statusFilter && timeFilter
    })
  })

  return { filteredGames }
}
