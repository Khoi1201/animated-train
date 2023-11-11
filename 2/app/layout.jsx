import './ui/globals.css'
import { open_sans } from './ui/fonts'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Recruitery</title>
      </head>
      <body className={`${open_sans.className}`}>{children}</body>
    </html>
  )
}
