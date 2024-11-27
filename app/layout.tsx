import { Great_Vibes, Roboto } from 'next/font/google'
import './globals.css'

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-great-vibes',
  weight: '400'
})

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${roboto.variable}`}>
      <body className={`${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
