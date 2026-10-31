import type { Game } from '~/types/game.ts'
import { PlayStatus } from '~/types/playStatus.ts'

export const games: Game[] = [
  {
    id: 1,
    name: 'Metroid Prime',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3w4w.webp',
    status: PlayStatus.Completed,
    playTime: 7
  },
  {
    id: 2,
    name: 'Mario Odyssey',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1mxf.webp',
    status: PlayStatus.Completed,
    playTime: 20
  },
  {
    id: 3,
    name: 'Donkey Kong Country',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co70qn.webp',
    status: PlayStatus.NotPlayed,
    playTime: 4
  },
  {
    id: 4,
    name: 'Doom Eternal',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3p5n.webp',
    status: PlayStatus.Completed,
    playTime: 6
  },
  {
    id: 5,
    name: 'Ocarina of Time',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3nnx.webp',
    status: PlayStatus.Completed,
    playTime: 15
  },
  {
    id: 6,
    name: 'Mario Kart World',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/cob9s9.webp',
    status: PlayStatus.Started,
    playTime: 40
  },
  {
    id: 7,
    name: 'Killer7',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/cobw10.webp',
    status: PlayStatus.Completed,
    playTime: 12
  },
  {
    id: 8,
    name: 'Okami',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3mpk.webp',
    status: PlayStatus.Completed,
    playTime: 30
  },
  {
    id: 9,
    name: 'Katamari Damacy',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co67mq.webp',
    status: PlayStatus.Completed,
    playTime: 5
  },
  {
    id: 10,
    name: 'Donkey Kong 64',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co289i.webp',
    status: PlayStatus.Aborted,
    playTime: 13
  },
  {
    id: 11,
    name: 'Star Fox Adventure',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1pek.webp',
    status: PlayStatus.Completed,
    playTime: 7
  },
  {
    id: 12,
    name: 'Mini Ninjas',
    img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co21i5.webp',
    status: PlayStatus.Completed,
    playTime: 6
  },
  {
    id: 13,
    name: 'Super Mario Galaxy',
    img: '://images.igdb.com/igdb/image/upload/t_cover_big/co9o9n.webp',
    status: PlayStatus.Completed,
    playTime: 15
  }
]
