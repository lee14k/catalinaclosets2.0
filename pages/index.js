import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../Components/Navbar'
const inter = Inter({ subsets: ['latin'] })
import Homehead from '@/Components/Homehead'
import Homegrid from '@/Components/Homegrid'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Homehead/>
      <h1>Custom solutions for your entire home</h1>
      <Homegrid/>
      </div>
  )
}
