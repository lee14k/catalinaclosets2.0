import Imagegrid from "./Imagegrid"
export default function Finishbox({header, description, images}) {
return (
<div>
    <h1>
        {header}
    </h1>
    <p>{description}</p>
    <Imagegrid images={images}/>
</div>
)
}