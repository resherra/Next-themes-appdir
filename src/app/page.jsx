import ThemeSwitcher from "@/components/ThemeSwitcher"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <div className="flex gap-5">
        <Link href="/light" className={`bg-black dark:bg-gray-400 text-white text-sm rounded-md py-1 px-2`}>
          Forced light
        </Link>
        <Link href="/dark" className={`bg-black dark:bg-gray-400 text-white text-sm rounded-md py-1 px-2`}>
          Forced dark
        </Link>
      </div>
    </div>
  )
}
