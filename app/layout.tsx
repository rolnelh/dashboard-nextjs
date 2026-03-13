import './globals.css'
import { Poppins } from 'next/font/google'
import ClientWrapper from '@/components/layout/ClientWrapper'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={poppins.variable} suppressHydrationWarning>
      <body className={`${poppins.className} antialiased text-slate-900 dark:text-slate-100`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}