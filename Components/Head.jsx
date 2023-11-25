import Form from "./Form"
export default function Head ({head, caption, backgroundImageUrl}) {
    const style  = {
    backgroundImage:`url(${backgroundImageUrl})`,
    }
    return (
        <div className="w-full ">
        <div className="headspacewrapper w-full bg-red-900">
            
<div className="headbg flex justify-center items-center mt-10" style={style}>
         <div className=" grid grid-cols-2">
                <div className=" ">
<h1 className="text-6xl text-white headtextshadow">{head}</h1>
<p className="text-4xl text-white mr-60 headtextshadow">{caption}</p>
</div>
<div className="homeheadform">
                    <Form />
                </div>
</div>
</div>
</div>
</div>
    )
}