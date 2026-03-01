import AboutSnippet from './components/AboutSnippet'
import FeaturedProducts from './components/FeaturedProducts'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductCategories from './components/ProductCategories'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <ProductCategories />
      <FeaturedProducts />
      <AboutSnippet />
      <Testimonials />
      <Footer />
    </main>
  )
}
