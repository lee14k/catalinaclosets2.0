export default function Twophotobutton () {
    return (
        <div className="flex justify-center items-center flex-col gap-10 mt-20">

            <div className="grid grid-cols-2">
                <div>Image<img src="library.jpg"/></div>
                <div>Image<img src="library.jpg"/></div>
             
            </div>
               <button>Learn More</button>
        </div>
    )
}