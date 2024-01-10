import Form from "./Form"
import { Oooh_Baby } from 'next/font/google'

const Oooh = Oooh_Baby({
  weight: '400',
  subsets: ['latin'],
})

export default function Homehead () {
    return (
        <div className="homeheadwrapper flex justify-center items-center mt-10">
            <div className="homehead grid grid-cols-2">
                <div className="homeheadtext mx-20 flex justify-center items-center flex-col">
                    <span className="text-8xl text-white homeheadhead">
                    <h1 className={Oooh.className}>Custom Creations</h1>
                    </span>
                    <p className="text-2xl homeheadhead text-white"> We help customers find extra space in every room of their home - let's make magic together today</p>
                </div>
               
            </div>
        </div>
    )
}