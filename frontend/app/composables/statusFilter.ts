import { PlayStatus } from '~/types/playStatus.ts'

export const useStatusFilter = () => {
  const allStatus = ref(Object.values(PlayStatus).filter(item => typeof item === 'number').map((item) => { return PlayStatus[item] }))
  const activatedStatus = useState('activatedStatus', () => { return allStatus.value })

  return { allStatus, activatedStatus }
}
