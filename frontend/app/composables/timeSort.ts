export const useTimeSort = () => {
  const sortTimeAscending = useState('sortTimeAscending', () => { return false })

  return { sortTimeAscending }
}
