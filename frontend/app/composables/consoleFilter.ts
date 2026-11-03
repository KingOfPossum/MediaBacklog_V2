export const useConsoleFilter = () => {
  const consoles = ref(['PC', 'PS1', 'PS2', 'PS3', 'PS4', 'PS5', 'PSP', 'PSVita', 'NES', 'SNES', 'N64', 'GameCube', 'Wii', 'Wii U', 'Switch', 'Switch 2', 'GameBoy', 'GameBoy Advance', 'DS', '3DS', 'XBOX', 'XBOX 360', 'XBOX One', 'XBOX Series X'])
  const activatedConsoles = useState('activatedConsoles', () => { return consoles.value })

  const checkAllConsoles = () => {
    activatedConsoles.value = []
    consoles.value.forEach((item) => {
      activatedConsoles.value.push(item)
    })
  }

  const uncheckAllConsoles = () => {
    activatedConsoles.value = []
  }

  return { consoles, activatedConsoles, checkAllConsoles, uncheckAllConsoles }
}
