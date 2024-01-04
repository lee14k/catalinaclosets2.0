import Imagegrid from "./Imagegrid"
export default function Finishbox({header, description, images}) {
return (
<div className="mx-24 my-8">
    <h1 className="text-6xl flex justify-center align-center mt-16">
        {header}
    </h1>
    <p className="text-2xl flex justify-center align-center mx-24 mt-2">{description}</p>
</div>
)
}