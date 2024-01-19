import Timeline from "@/Components/Timeline";
import NewNav from "@/Components/NewNav";
import Image from "next/image";
const About = () => {
    return (
        <div>
            <NewNav />
            <div className="grid grid-cols-2 ml-10">
                <Image
                    src="/aboutpic.jpg"
                    height={500}
                    width={500}
                />
                <div className="flex flex-col justify-center items-center">
            <h2>About Us</h2>
            <p>Blurb about the company</p>
                </div>
            </div>
            <h2>Our Process</h2>
            <Timeline />
        </div>
    );
}
export default About