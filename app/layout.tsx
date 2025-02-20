import './globals.css'

export const metadata = {
  title: 'Frontend Mentor | Job Listings with Filtering',
  icons: {
    icon: '/favicon-32x32.png',
  },
  description: 'Job listings built with Next',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-background bg-mobile bg-contain bg-no-repeat md:bg-desktop">
        {children}
      </body>
    </html>
  )
}
