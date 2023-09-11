import Form from "./Form"

export default function Homehead () {
    return (
        <div className="homeheadwrapper">
            <div className="homehead">
                <div className="homeheadtext">
                    <h1>Custom Creations</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius reiciendis, ipsam possimus, explicabo, maiores deleniti nulla quo itaque saepe consectetur quis impedit magnam molestiae repellat. Quaerat perspiciatis quis fugiat doloremque?</p>
                </div>
                <div className="homeheadform">
                    <Form />
                </div>
            </div>
        </div>
    )
}