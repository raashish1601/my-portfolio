import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Raashish Aggarwal - Full Stack Developer",
  description:
    "Portfolio of Raashish Aggarwal - Full Stack Developer specializing in React, Next.js, and modern web technologies",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
