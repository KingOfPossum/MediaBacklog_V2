export enum PlayStatus {
  NotPlayed = 0,
  Started = 1,
  Completed = 2,
  Aborted = 3
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
