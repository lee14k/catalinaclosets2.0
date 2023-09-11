export default function Form () {
    return (
        <div className="formwrapper">
            <form action="">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="phone" name="phone" id="phone" placeholder="Phone Number" />
            <input type="text" name="message" id="message" placeholder="Message" />

            </form>
        </div>
    )
}