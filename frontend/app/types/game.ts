import type { PlayStatus } from '~/types/playStatus.ts'

export type Game = {
  id: number
  name: string
  img: string
  status: PlayStatus
  mainStoryLength: number
  mainExtraLength: number
  completionistLength: number
  consoles: string[]
  rating: number
  date: string
  summary: string
  platforms: string[]
  genres: string[]
}
