"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSwitch = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <div>
      <button onClick={handleSwitch} className={`bg-black text-pink-200 dark:bg-pink-200 dark:text-black text-sm rounded-md p-1 mb-4`}>
        Switch theme
      </button>
      <div>the theme now is: {mounted && resolvedTheme === "dark" ? "/dark" : "/light"}</div>
    </div>
  )
}
