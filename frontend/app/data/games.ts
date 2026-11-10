import { makeHTTPGETRequest } from '~/utils/http.ts'
import { convertToPlayStatus } from '~/types/playStatus.ts'

export const useGames = () => {
  const games = useState('games', () => { return [] })

  const loadGames = async () => {
    const gamesResponse = await makeHTTPGETRequest('getLibrary')
    const newGames: Game[] = []

    for (const game of gamesResponse) {
      const newGame: Game = {
        id: game['library_id'] ? game['library_id'] : 1,
        name: game['game_infos']['name'],
        img: game['igdb_infos']['cover_url'],
        status: convertToPlayStatus(game['status']),
        playTime: game['game_infos']['main_story_length'] > 0 ? game['game_infos']['main_story_length'] / 3600 : 1,
        consoles: game['consoles'],
        rating: 23
      }
      newGames.push(newGame)
    }

    games.value = newGames
  }

  return { games, loadGames }
}
