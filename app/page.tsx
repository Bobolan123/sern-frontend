import Navbar from "@/components/header/navbar";
import SlideShow from "@/components/home/slideShow/slideShow";

export default function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <SlideShow />
            </div>
        </div>
    );
}
