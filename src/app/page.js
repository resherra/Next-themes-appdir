import ThemeSwitcher from "@/components/ThemeSwitcher"

export default function Home() {
  return (
    <main className={`p-10 min-h-screen bg-pink-200 dark:bg-black`}>
      <h1 className={`text-3xl pb-5 dark:text-pink-200`}>Testing next-themes w/ App dir</h1>
      <ThemeSwitcher />
    </main>
  )
}
