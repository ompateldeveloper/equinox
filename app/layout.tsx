import Navbar from '@/app/compnents/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {AuthContextProvider} from "./contexts/AuthContext"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  // user-scalable:"no"
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
          <Navbar/>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
