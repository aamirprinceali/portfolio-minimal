export default function App() {
  return (
    <div className="min-h-screen bg-background p-12">
      {/* Display font test — Cormorant Garamond */}
      <h1 className="font-display text-7xl font-semibold text-primary mb-4">
        Aamir Ali
      </h1>

      {/* Body font test — DM Sans */}
      <p className="font-sans text-xl text-secondary mb-6">
        Operations & Customer Success Professional
      </p>

      {/* Color token tests */}
      <div className="flex gap-4">
        <div className="bg-accent text-white px-4 py-2 rounded-full text-sm font-sans">
          Navy Accent
        </div>
        <div className="bg-surface border border-border px-4 py-2 rounded-full text-sm font-sans text-primary">
          Surface Card
        </div>
        <div className="bg-accent-light text-white px-4 py-2 rounded-full text-sm font-sans">
          Accent Light
        </div>
      </div>
    </div>
  )
}
