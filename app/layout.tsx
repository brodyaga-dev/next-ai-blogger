import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/sonner'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <ClerkProvider>
        <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <Toaster position='top-right' theme='light' richColors />
        </body>
      </ClerkProvider>
    </html>
  )
}
