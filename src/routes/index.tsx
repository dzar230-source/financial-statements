import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Home | Kissena Baked Goods" }] }),
  component: Home,
})

function Home() {
  return (
    <div>
      <p className="text-ink-soft">Kissena Baked Goods Inc.</p>
      <h1 className="font-display text-4xl">Financial Statements</h1>
      <p className="mt-2 text-lg text-ink-soft">For the year ended December 31, 20X5</p>
      <p className="mt-6 text-ink-soft">Kissena Baked Goods is a fictional bakery in Astoria, Queens. These pages present its statements as accounting examples.</p>
      <ul className="list-disc pl-6 mt-6 space-y-2 text-ink-soft">
        <li><Link to="/income-statement" className="underline decoration-brand underline-offset-4">Income Statement</Link></li>
        <li><Link to="/balance-sheet" className="underline decoration-brand underline-offset-4">Balance Sheet</Link></li>
      </ul>
    </div>
  )
}
