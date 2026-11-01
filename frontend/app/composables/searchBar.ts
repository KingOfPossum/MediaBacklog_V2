export const searchBar = () => {
  const searchQuery = useState('searchQuery', () => { return '' })

  return { searchQuery }
}
