import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from "next"
const inter = Inter({ subsets: ['latin'] })

export const metadata : Metadata = {
  title: "Fernando's Home Page",
  description: 'Generated with love by Vercel',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}