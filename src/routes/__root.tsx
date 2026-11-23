import { createRootRoute, HeadContent, Link, Outlet } from "@tanstack/react-router"

export const Route = createRootRoute({ component: RootLayout })

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-page text-ink">
      <HeadContent />
      <header className="border-b border-edge">
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link to="/" className="font-display text-xl">Kissena Baked Goods</Link>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/"
              className="text-ink-soft hover:text-ink"
              activeProps={{ className: "font-semibold underline decoration-brand underline-offset-8" }}
              activeOptions={{ exact: true }}
            >Home</Link>
            <Link to="/income-statement"
              className="text-ink-soft hover:text-ink"
              activeProps={{ className: "font-semibold underline decoration-brand underline-offset-8" }}
              activeOptions={{ exact: true }}
            >Income Statement</Link>
            <Link to="/balance-sheet"
              className="text-ink-soft hover:text-ink"
              activeProps={{ className: "font-semibold underline decoration-brand underline-offset-8" }}
              activeOptions={{ exact: true }}
            >Balance Sheet</Link>
            <Link to="/disclosures"
              className="text-ink-soft hover:text-ink"
              activeProps={{ className: "font-semibold underline decoration-brand underline-offset-8" }}
              activeOptions={{ exact: true }}
            >Disclosures</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
        <Outlet />
      </main>
      <footer className="border-t border-edge text-sm text-ink-soft">
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-1">
          <p>Kissena Baked Goods Inc., Astoria, Queens, New York</p>
          <p>© 20X5 Kissena Baked Goods Inc.</p>
          <p>A fictional company used for accounting examples.</p>
        </div>
      </footer>
    </div>
  )
}
