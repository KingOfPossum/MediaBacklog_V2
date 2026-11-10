export const useRatingSort = () => {
  const sortRatingAscending = useState('sortRatingAscending', () => { return false })

  return { sortRatingAscending }
}
