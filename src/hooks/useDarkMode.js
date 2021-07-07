import { useState, useEffect } from 'react'
const useDarkMode = () => {
  const [theme, setTheme] = useState(false)
  const toggleTheme = () => setTheme((a) => (a === 'light' ? 'dark' : 'light'))
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light'
    setTheme(theme)
  }, [])
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])
  return [theme, toggleTheme]
}
export default useDarkMode
