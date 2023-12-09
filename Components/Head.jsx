import Form from "./Form"
export default function Head ({head, caption, backgroundImageUrl}) {
    const style  = {
    backgroundImage:`url(${backgroundImageUrl})`,
    }
    return (
        <div className="w-full h-full pt-24 headercontainer  ">
        <div className=" ">
            
<div className="headbg  flex justify-center items-center mt-10 " style={style}>
         <div className=" grid grid-cols-2 headwrap">
                <div className=" ">
<h1 className="text-6xl text-white headtextshadow">{head}</h1>
<p className="text-4xl text-white mr-60 headtextshadow">{caption}</p>
</div>
<div className="headspacewrapper">
                    <Form />
                </div>
</div>
</div>
</div>
</div>
    )
}