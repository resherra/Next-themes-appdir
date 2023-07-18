import ThemeSwitcher from "@/components/ThemeSwitcher"
import Link from "next/link"

export default function Home() {
  return (
    <main className={`p-10 min-h-screen bg-pink-200 dark:bg-black`}>
      <h1 className={`text-3xl pb-5 dark:text-pink-200`}>Testing next-themes w/ App dir</h1>
      <ThemeSwitcher />
      <div className="flex gap-5">
        <Link href="/light" className={`bg-black text-pink-200 dark:bg-pink-200 dark:text-black text-sm rounded-md p-2`}>
          Forced light
        </Link>
        <Link href="/dark" className={`bg-black text-pink-200 dark:bg-pink-200 dark:text-black text-sm rounded-md p-2`}>
          Forced dark
        </Link>
      </div>
    </main>
  )
}
