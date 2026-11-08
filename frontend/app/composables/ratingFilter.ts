export const useRatingFilter = () => {
  const minRating = useState('minRating', () => { return 0 })
  const maxRating = useState('maxRating', () => { return 25 })

  return { minRating, maxRating }
}
