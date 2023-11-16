export default function Form() {
  return (
    <div className="formwrapper flex flex-col justify-center mx-10 ">
      <h1 className="text-2xl mb-10  ml-10 ">Schedule your Consultation</h1>
      <form className="ml-10" action="">
        <ul className="flex flex-col gap-5">
          <li>
            {" "}
            <input className="border-solid border-2 w-9/12" type="text" name="name" id="name" placeholder="Name" />
          </li>
          <li>
            {" "}
            <input className="border-solid border-2 w-9/12" type="email" name="email" id="email" placeholder="Email" />
          </li>
          <li>
            {" "}
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              className="border-solid border-2 w-9/12"
            />
          </li>
          <li>
            {" "}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border-solid border-2 w-9/12"
            />
          </li>
        </ul>
        <button className="mt-5 bg-pink-800 px-6 py-3 text-xl font-semibold text-white shadow-sm border-solid border-white border-2 w-9/12">Schedule Now</button>
      </form>
    </div>
  );
}


