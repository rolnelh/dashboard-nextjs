import './globals.css'
import { Poppins } from 'next/font/google'
import ClientWrapper from '@/components/layout/ClientWrapper'
import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Kkiapay Dashboard",
  description: "Gestion simplifiée des paiements pour commerçants",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Kkiapay",
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  themeColor: "#e31937",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={poppins.variable} suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className={`${poppins.className} antialiased text-slate-900 dark:text-slate-100`}>
        <ClientWrapper>{children}</ClientWrapper>
        <Analytics />
      </body>
    </html>
  )
}