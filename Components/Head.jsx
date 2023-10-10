
export default function Head ({head, caption, backgroundImageUrl}) {
    const style  = {
    backgroundImage:`url(${backgroundImageUrl})`,
    }
    return (
<div className="headbg" style={style}>
<h1 className="text-6xl text-white">{head}</h1>
<p className="text-4xl text-white mr-60">{caption}</p>
</div>
    )
}