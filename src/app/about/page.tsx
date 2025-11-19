import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import AboutContent from '@/components/about-content'

export const metadata: Metadata = {
  title: 'About Smartnex Technologies | Founded by Himanshu Sekhar Parida',
  description: 'Learn about Smartnex Technologies, founded by Himanshu Sekhar Parida. We deliver innovative healthcare, software, and attendance solutions with a vision to democratize enterprise technology.',
  keywords: 'Smartnex founder, Himanshu Sekhar Parida, tech company India, software solutions',
}

export default function About() {
  return (
    <>
      <Navbar />
      <AboutContent />
      <Footer />
    </>
  )
}
