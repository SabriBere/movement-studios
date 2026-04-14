import Herobar from "@/components/Hero/Herobar";
import ContentHome from "@/components/Content/ContentHome";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Herobar />
            <ContentHome />
        </main>
    );
}
