export default function Dropdownconsult () {
    return (
        <div>
            <div className="formwrapper flex flex-col justify-center items-center dropdownconsult">
      <h1 className="text-2xl mb-10">Schedule your Consultation</h1>
      <form action="">
        <ul className="flex flex-col gap-5">
          <li>
            {" "}
            <input type="text" name="name" id="name" placeholder="Name" />
          </li>
          <li>
            {" "}
            <input type="email" name="email" id="email" placeholder="Email" />
          </li>
          <li>
            {" "}
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Phone Number"
            />
          </li>
      
        </ul>
        <button className="mt-5 bg-pink-800 px-6 py-3 text-xl font-semibold text-white shadow-sm border-solid border-white border-2">Schedule Now</button>
      </form>
    </div>
        </div>
    )
}