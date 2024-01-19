export default function spacecta({ headlineone, quote, buttontext }) {
  return (
    <div className="bg-slate-100 px-8 py-16">
      
      <div className="flex justify-center items-center">
</div>
      <div className="flex flex-col justify-center align-center quotebox mx-8 ">
        <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"> <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
        <span className="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repudiandae, cum minus illo odit ex magnam enim quam similique corrupti, fugiat aperiam ut ullam cumque neque iusto sint repellendus reiciendis.</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"> <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/></svg>
        {quote}
        <span>-John Doe</span>
        </div>
    </div>
  );
}
