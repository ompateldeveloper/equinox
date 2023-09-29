import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {AuthContextProvider} from "./contexts/AuthContext"
import {  GlobalContextProvider } from './contexts/GlobalContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HibiEQ | Let it Resonate',
  description: 'Let it Resonate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider >
          <GlobalContextProvider>
          {children}
          </GlobalContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  )
}
