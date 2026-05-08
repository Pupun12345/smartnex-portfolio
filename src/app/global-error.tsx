'use client'

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Something went wrong</h1>
        <button onClick={reset} style={{ marginTop: '1rem', padding: '0.5rem 1.5rem', cursor: 'pointer' }}>
          Try again
        </button>
      </body>
    </html>
  )
}
