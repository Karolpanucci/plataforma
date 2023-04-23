import './globals.css'

export const metadata = {
  title: 'KP videos',
  description: 'Paltaforma de videos e musicas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' text-fuchsia-700 '>{children}</body>
    </html>
  )
}
