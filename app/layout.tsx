import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Raashish Aggarwal - Frontend Developer",
  description:
    "Portfolio of Raashish Aggarwal - Frontend Developer specializing in React, Next.js, and modern web technologies. 3+ years of experience building scalable web applications.",
  generator: "v0.dev",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "JavaScript", "Web Development"],
  authors: [{ name: "Raashish Aggarwal" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
