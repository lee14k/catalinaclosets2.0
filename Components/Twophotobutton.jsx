export default function Twophotobutton () {
    return (
        <div className="flex justify-center items-center flex-col gap-10 mt-20">

            <div className="grid grid-cols-2">
                <div className="twoimoen">Image<img src="library.jpg"/></div>
                <div className="twoimoen">Image<img src="library.jpg"/></div>
             
            </div>
               <button>Learn More</button>
        </div>
    )
}