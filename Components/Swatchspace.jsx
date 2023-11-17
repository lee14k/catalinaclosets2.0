export default function Swatchspace ({swatch, space}) {
    return (
        <div className="grid grid-rows-2">
            <div>{swatch}</div>
            <div>{space}</div>

        </div>
    )
}