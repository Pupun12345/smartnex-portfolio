import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Smartnex Technologies | Healthcare, Software & Attendance Solutions',
  description: 'Smartnex Technologies offers innovative healthcare middleware platforms, enterprise software solutions (HRMS, Procurement), and AI-powered attendance management systems with customization and support.',
  keywords: 'healthcare solutions, HRMS, attendance management, AI face recognition, software development, procurement solutions, India tech company',
  authors: [{ name: 'Himansu Sekhar Parida', url: 'https://in.linkedin.com/company/smartnex-technologies' }],
  generator: 'v0.app',
  creator: 'Smartnex Technologies',
  publisher: 'Smartnex Technologies',
  robots: 'index, follow',
  // canonical: 'https://smartnex.tech',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://smartnex.tech',
    siteName: 'Smartnex Technologies',
    title: 'Smartnex Technologies | Healthcare, Software & Attendance Solutions',
    description: 'Innovative tech solutions for healthcare, enterprise software, and AI-powered attendance management.',
    images: [
      {
        url: '/og-image.jpg',
        secureUrl: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Smartnex Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@smartnex',
    creator: '@smartnex',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0F172A" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0F172A" media="(prefers-color-scheme: dark)" />
        <link rel="alternate" hrefLang="en" href="https://smartnex.tech" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Smartnex Technologies',
              url: 'https://smartnex.tech',
              logo: 'https://smartnex.tech/logo.png',
              description: 'Innovative tech solutions for healthcare, enterprise software, and AI-powered attendance management.',
              founder: {
                '@type': 'Person',
                name: 'Himansu Sekhar Parida',
              },
              sameAs: [
                'https://in.linkedin.com/company/smartnex-technologies',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                telephone: '+91-82608-05119',
                email: 'contact@smartnex.tech',
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
