import { searchBar } from '~/composables/searchBar.ts'
import { games } from '~/data/testGames.ts'
import { useConsoleFilter } from '~/composables/consoleFilter.ts'
import { useStatusFilter } from '~/composables/statusFilter.ts'
import { useTimeFilter } from '~/composables/timeFilter.ts'
import { useRatingFilter } from '~/composables/ratingFilter.ts'
import { useRatingSort } from '~/composables/ratingSort.ts'

export const gamesFilter = () => {
  const { searchQuery } = searchBar()
  const { activatedConsoles } = useConsoleFilter()
  const { activatedStatus } = useStatusFilter()
  const { timeRange } = useTimeFilter()
  const { minRating, maxRating } = useRatingFilter()
  const { sortAscending } = useRatingSort()

  const filteredGames = computed(() => {
    return games.filter((item) => {
      const searchFilter = (searchQuery.value.length > 0 && item.name.toLowerCase().includes(searchQuery.value.toLowerCase())) || searchQuery.value.length === 0
      const consoleFilter = item.consoles.some(console => activatedConsoles.value.includes(console))
      const statusFilter = activatedStatus.value.includes(PlayStatus[item.status])
      const timeFilter = item.playTime > timeRange.value[0] && item.playTime < timeRange.value[1]
      const ratingFilter = item.rating >= minRating.value && item.rating <= maxRating.value

      return searchFilter && consoleFilter && statusFilter && timeFilter && ratingFilter
    }).sort((a: Game, b: Game) => {
      if (sortAscending.value) {
        return a.rating - b.rating
      }
      return b.rating - a.rating
    })
  })

  return { filteredGames }
}
