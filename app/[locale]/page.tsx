import Navbar from "@/components/header/navbar";
import SlideShow from "@/components/home/slideShow/slideShow";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("Index");

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <SlideShow />
            </div>
            <h1>{t("title")}</h1>;
        </div>
    );
}
