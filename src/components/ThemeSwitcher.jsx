"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { forcedTheme, resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div>
      <button disabled={!!forcedTheme} onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className={`bg-black text-white dark:bg-gray-400 text-sm rounded-md py-1 px-2`}>
        Switch theme
      </button>
      <div className="py-4">App theme: {mounted ? resolvedTheme : ""} </div>
    </div>
  )
}

export default ThemeSwitcher
