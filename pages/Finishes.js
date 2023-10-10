import Head from "@/Components/Head"
import Navbar from "@/Components/Navbar"
import Imagegrid from "@/Components/Imagegrid";
import Finishbox from "@/Components/Finishbox";
export default function Finishes() {
    const matteImages = [
            {link: "/matteone.png", header: "Matte 1"},
    ]
return (
    <div>
        <Navbar/>
<Head
head="Finishes"
caption="Uniboard© custom colors and finishes allow for whatever you can dream of, from solids of all colors to wood grains of all patterns"
    backgroundImageUrl="/finish.jpg" // Use this path instead of "./finish.jpg"
/>
<Finishbox
header="Mattes"
description="lovely mattes"
images={matteImages}/>
</div>
)
}