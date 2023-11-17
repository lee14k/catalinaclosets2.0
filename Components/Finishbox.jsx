import Imagegrid from "./Imagegrid"
export default function Finishbox({header, description, images}) {
return (
<div>
    <h1 className="text-6xl flex justify-center align-center">
        {header}
    </h1>
    <p className="text-2xl flex justify-center align-center mx-16">{description}</p>
</div>
)
}