"use client";
import { useParams } from "next/navigation";
// import Sellmac from "@/components/Sellmac";
// import Techable from "@/components/Techable";
import AppleTech from "@/components/projectSlider/AppleTech";
import TechableProject from "@/components/projectSlider/TechableProject";
import Techable from "@/components/projectSlider/Techable";

export default function Page() {
    const { slug } = useParams(); // get slug from URL

    return (
        <div>
            {slug === "sellmac" && <TechableProject />}
            {slug === "apple-tech" && <AppleTech />}
            {slug === "techable" && <Techable />}
            {!["sellmac", "apple-tech", "techable"].includes(slug) && (
                <p>Page not found or no component available.</p>
            )}
        </div>
    );
}
