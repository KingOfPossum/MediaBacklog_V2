export const useRatingSort = () => {
  const sortAscending = useState('sortAscending', () => { return false })

  return { sortAscending }
}
