export const useTimeFilter = () => {
  const timeRange = useState<number[]>('timeRange', () => [0, 50])

  return { timeRange }
}
