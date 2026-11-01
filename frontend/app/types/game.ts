import type { PlayStatus } from '~/types/playStatus.ts'

export type Game = {
  id: number
  name: string
  img: string
  status: PlayStatus
  playTime: number
}
