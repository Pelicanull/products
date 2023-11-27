import Image from 'next/image'
import Navbar from './component/Navbar'
import Products from './component/Products'
import Home from './component/Home'
import Footer from './component/Footer'
import About from './component/About'
import Contact from './component/Contact'
export default function Main() {
  return (
    <main> 
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Products></Products>
    <Contact></Contact>
    <Footer></Footer>
    </main>
  )
}
