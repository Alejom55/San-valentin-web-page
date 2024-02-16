import { Inter } from 'next/font/google'
import './globals.css'
import './fonts.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Para la linda de Ana',
  description: 'Creado por Alejito :3',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
