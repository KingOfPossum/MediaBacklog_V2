import { makeHTTPGETRequest } from '~/utils/http.ts'
import { convertToPlayStatus } from '~/types/playStatus.ts'

export const useGames = () => {
  const games = useState('games', () => { return [] })

  const loadGames = async () => {
    let requestSuccessful = true
    const gamesResponse = await makeHTTPGETRequest('getLibrary').catch(() => requestSuccessful = false)

    if (!requestSuccessful) {
      return
    }

    const newGames: Game[] = []

    for (const game of gamesResponse) {
      const newGame: Game = {
        id: game['library_id'] ? game['library_id'] : 1,
        name: game['game_infos']['name'],
        img: game['igdb_infos']['cover_url'],
        status: convertToPlayStatus(game['status']),
        playTime: game['game_infos']['main_story_length'] > 0 ? Math.trunc(game['game_infos']['main_story_length'] / 3600) : -1,
        consoles: game['consoles'],
        rating: game['rating'],
        date: game['add_date']
      }
      newGames.push(newGame)
    }

    games.value = newGames
  }

  return { games, loadGames }
}
