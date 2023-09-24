import Navbar from '@/app/compnents/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {AuthContextProvider} from "./contexts/AuthContext"
import {  GlobalContextProvider } from './contexts/GlobalContext'
import Head from 'next/head'
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={inter.className}>
        <AuthContextProvider >
          <GlobalContextProvider>
          <Navbar/>
          {children}
          </GlobalContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  )
}
