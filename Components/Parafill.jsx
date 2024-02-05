import Link from "next/link"
export default function Parafill() {
    return (
        <div className="paracontainer flex flex-col justify-center items-center lakerhead">
            <h1 className="text-white text-6xl">Contact Us Today</h1>
            <div className="mt-8">
              <span className="z-500 rounded-md bg-pink-700  px-10 py-6 text-xl font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 mb-48">
              <Link href="/Contact">
              <span>Schedule your consultation</span>
              </Link>
            </span>
          </div>
        </div>
    )
}