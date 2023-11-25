export default function Spaceform () {
    return (
        <div className="flex justify-center items-center flex-col ">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl">Why wait?</h1>
            <p>Let's get together and design the space of your dreams</p>
            </div>
            <div className="flex justify-center">
                <form action="" className="flex flex-col">
        <ul className="flex">
          <li>
            {" "}
            <input type="text" name="name" id="name" placeholder="Name"               className="px-6 py-3"
/>
          </li>
          <li>
            {" "}
            <input type="email" name="email" id="email" placeholder="Email"               className="px-6 py-3"
 />
          </li>
          <li>
            {" "}
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              className="px-6 py-3"
            />
          </li>
        <li>
               
        </li>

        </ul>
        <div className="flex justify-center">
           <button className="bg-pink-800 px-6 py-3 text-xl font-semibold text-white shadow-sm border-solid w-1/2">Schedule Now</button>
           </div>
      </form>
            </div>
        </div>
    )
}