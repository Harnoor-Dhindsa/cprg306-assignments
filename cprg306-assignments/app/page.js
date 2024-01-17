import Navigation from "@/components/Navigation"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold py-2 px-20">CPRG 306: Web Development 2 - Assignments</h1>
        <div className="hover:text-green-500 text-lg px-20 py-5 hover:underline">
        <Navigation/>
        </div>
      </div>
    </main>
  )
}
