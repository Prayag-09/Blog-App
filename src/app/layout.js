import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'For Writting and Posting Blogs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='containers'>
            <Navbar />
            {children}
            <Footer />
        </div>
        </body>
    </html>
  )
}