export const useDateSort = () => {
  const sortDateAscending = useState('sortDateAscending', () => { return false })

  return { sortDateAscending }
}
