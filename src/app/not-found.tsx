import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif', background: '#0f172a', color: '#f8fafc' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#6366f1' }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>The page you are looking for does not exist.</p>
        <Link href="/" style={{ padding: '0.75rem 2rem', background: '#6366f1', color: '#fff', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: '600' }}>
          Go Home
        </Link>
      </body>
    </html>
  )
}
