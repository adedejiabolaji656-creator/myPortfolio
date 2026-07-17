import { Toaster } from 'sonner'
import Navbar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Services from '@/sections/Services'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#05060a]">
      <Toaster position="bottom-right" theme="dark" richColors />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
