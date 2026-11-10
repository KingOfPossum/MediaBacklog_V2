import { searchBar } from '~/composables/searchBar.ts'
import { useGames } from '~/data/games.ts'
import { useConsoleFilter } from '~/composables/consoleFilter.ts'
import { useStatusFilter } from '~/composables/statusFilter.ts'
import { useTimeFilter } from '~/composables/timeFilter.ts'
import { useTimeSort } from '~/composables/timeSort.ts'
import { useRatingFilter } from '~/composables/ratingFilter.ts'
import { useRatingSort } from '~/composables/ratingSort.ts'

export const useGamesFilter = () => {
  const { searchQuery } = searchBar()
  const { activatedConsoles } = useConsoleFilter()
  const { activatedStatus } = useStatusFilter()
  const { timeRange } = useTimeFilter()
  const { sortTimeAscending } = useTimeSort()
  const { minRating, maxRating } = useRatingFilter()
  const { sortRatingAscending } = useRatingSort()
  const { games } = useGames()

  const filterType = useState('filterType', () => { return 'rating' })

  const filteredGames = computed(() => {
    console.log(games.value)
    return games.value
  })

  /**
  const filteredGames = computed(() => {
    return games.value.filter((item) => {
      const searchFilter = (searchQuery.value.length > 0 && item.name.toLowerCase().includes(searchQuery.value.toLowerCase())) || searchQuery.value.length === 0
      const consoleFilter = item.consoles.some(console => activatedConsoles.value.includes(console))
      const statusFilter = activatedStatus.value.includes(PlayStatus[item.status])
      const timeFilter = item.playTime > timeRange.value[0] && item.playTime < timeRange.value[1]
      const ratingFilter = item.rating >= minRating.value && item.rating <= maxRating.value

      return searchFilter && consoleFilter && statusFilter && timeFilter && ratingFilter
    }).sort((a: Game, b: Game) => {
      if (filterType.value === 'rating') {
        if (sortRatingAscending.value) {
          return a.rating - b.rating
        }
        return b.rating - a.rating
      } else {
        if (sortTimeAscending.value) {
          return a.playTime - b.playTime
        }
        return b.playTime - a.playTime
      }
    })
  })
  **/

  return { filteredGames, filterType }
}
