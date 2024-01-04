import Form from "./Form"
export default function Head ({head, caption, backgroundImageUrl}) {
    const style  = {
    backgroundImage:`url(${backgroundImageUrl})`,
    }
    return (
        <div className="w-full h-full headercontainer  ">
        <div className=" pt-24 ">
            
<div className="headbg  flex justify-center items-center mt-10 " style={style}>
         <div className=" grid grid-cols-2 headwrap">
                <div className="flex justify-center flex-col ">
<h1 className="text-6xl text-white headtextshadow">{head}</h1>
<p className="text-4xl text-white mr-60 headtextshadow">{caption}</p>
</div>
<div className="headspacewrapper px-10 py-10">
                    <Form />
                </div>
</div>
</div>
</div>
</div>
    )
}