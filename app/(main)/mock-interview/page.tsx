import Marquee from "react-fast-marquee";
import { MarqueImg } from "./_componants/marquee-img";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import MockInterviewServices from "./_componants/mock-interview-services";
import Link from "next/link";
import { StarsIcon } from "lucide-react";

export default async function MockInterviewPage() {
    return (
        <div className="relative w-full flex flex-col items-center gap-16 px-4 py-16 overflow-hidden">
            {/* Background Grid */}
            <div className="grid-background absolute inset-0 -z-10 opacity-20"></div>

            {/* Hero Heading */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-center gradient-title">
                Mock Interview Preparation
            </h1>

            {/* Banner Image */}
            <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-xl border border-muted-foreground/20">
                <Image
                    src="/banner.jpeg"
                    width={1280}
                    height={720}
                    alt="Mock Interview Banner"
                    className="w-full h-auto object-cover rounded-2xl"
                    priority
                />
            </div>

            {/* CTA Button */}
            <div className="flex justify-center ">
                <Link href="/mock-interview/generate">
                    <Button className="!cursor-pointer px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:scale-105 transition-all duration-200 ease-in-out">
                        <StarsIcon className="h-5 w-5 mr-2" />
                        Start Mock Interview
                    </Button>
                </Link>
            </div>

            {/* Service Cards */}
            <div className="w-full max-w-6xl">
                <h2 className="text-3xl font-bold mb-4 text-center w-full">
                    How it Works
                </h2>
                <MockInterviewServices />
            </div>

            {/* Company Logos Marquee */}
            <div className="w-full flex flex-col items-center gap-4 mt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
                    Get Interview-Ready for <span className="text-blue-400">Top Tech Companies</span>
                </h2>
                <div className="w-full max-w-5xl">
                    <Marquee pauseOnHover speed={40} gradient gradientColor="#000">
                        <MarqueImg img="/logos/meet.png" />
                        <MarqueImg img="/logos/zoom.png" />
                        <MarqueImg img="/logos/microsoft.png" />
                        <MarqueImg img="/logos/meet.png" />
                        <MarqueImg img="/logos/microsoft.png" />
                    </Marquee>
                </div>
            </div>
        </div>
    );
}
