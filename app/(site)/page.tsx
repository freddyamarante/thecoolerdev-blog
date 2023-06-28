import DarkModeToggler from '@/stories/components/DarkModeToggler'

export default async function Home() {
  return (
    <div className="flex justify-center flex-col">
      <main className="text-8xl font-extrabold">
        <h1 className="text-taxi">The Cooler Dev</h1>
      </main>
      <DarkModeToggler />
    </div>
  )
}
