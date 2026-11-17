export enum PlayStatus {
  NotPlayed = 0,
  Started = 1,
  Completed = 2,
  Aborted = 3
}

export const getStatusNames = () => {
  return Object.values(PlayStatus).filter(
    (item) => { return typeof item === 'number' }
  ).map(
    (item) => { return PlayStatus[item] }
  )
}

export const convertToPlayStatus = (txt: string) => {
  if (txt === 'Not Played') {
    return PlayStatus.NotPlayed
  } else if (txt === 'Started') {
    return PlayStatus.Started
  } else if (txt === 'Completed') {
    return PlayStatus.Completed
  } else if (txt === 'Aborted') {
    return PlayStatus.Aborted
  }
  return PlayStatus.NotPlayed
}
