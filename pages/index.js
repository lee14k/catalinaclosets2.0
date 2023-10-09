import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import Navbar from '../Components/Navbar'
const inter = Inter({ subsets: ['latin'] })
import Homehead from '@/Components/Homehead'
import Homegrid from '@/Components/Homegrid'
import CTA from '@/Components/CTA'
import Footer from '@/Components/Footer'
import Rightphoto from '@/Components/Rightphoto'
import Conbar from '@/Components/Conbar'
import Leftphoto from '@/Components/Leftphoto'
import { Oooh_Baby } from 'next/font/google'

const Oooh = Oooh_Baby({
  weight: '400',
  subsets: ['latin'],
})
export default function Home() {
  return (
    <div>
      <Conbar/>
      <Navbar/>
      <Homehead/>
      <span className="text-6xl flex justify-center my-10">
      <h1 className={Oooh.className}>Custom solutions for your entire home</h1></span>
      <Homegrid/>
      <Rightphoto/>
      <CTA
      headlineone="Get started with a free consultation"
      headlinetwo="We'll help you find the right solution for your home"
      buttontext="Schedule a free consultation"
      />
      <Leftphoto/>
      <Footer/>
      </div>
  )
}
