"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import EmbedVideo from "./components/ui/EmbedVideo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import CompanyGallery from "./components/ui/CompanyGallery";
import FeatureCards from "./components/featureCards/FeatureCards";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <div className="flex flex-col px-5 justify-center items-center">
        <div className="flex flex-col justify-center items-center px-5 sm:px-36 pt-20 xl:max-w-[60%]">
          <h1 className="scroll-m-20 text-4xl flex justify-center items-center text-center font-bold lg:text-6xl">
            Build, Evaluate and Improve Prompts 10x faster
          </h1>
          <p className="pt-10">
            Empower your team to build, evaluate, and deploy high-performing
            prompts for LLM-based applications. Pype streamlines collaboration,
            version control, and performance analysis, helping you deliver
            reliable AI solutions faster.
          </p>
        </div>
        {/* Embedded Video */}
        <div className="flex justify-center w-full" data-aos="fade-up">
          <EmbedVideo
            link="https://www.youtube.com/embed/-y_KrosGWaU"
            title="Pype AI"
            className="rounded-xl my-10 w-[80%] md:w-[60%] h-[250px] md:h-[450px]"
            data-aos="fade-up"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-center items-center my-10 w-full">
          <Link
            target="_blank"
            href="https://app.pypeai.com/"
            className="w-full md:w-40 px-10 flex justify-center"
          >
            <Button className="w-full px-16 py-3">Launch App</Button>
          </Link>
          <Link
            target="_blank"
            href="https://app.pypeai.com/"
            className="w-full md:w-40 px-10 flex justify-center"
          >
            <Button className="w-full px-16 py-3 bg-blue-600">
              Book a demo <ArrowRight height="15" />
            </Button>
          </Link>
        </div>

        {/* Companies Gallery */}
        <p>Helping individuals and teams at the world&apos;s best companies</p>
        <section className="px-20 hidden md:block">
          <CompanyGallery />
        </section>

        <section
          className="flex flex-col justify-center items-center mt-5"
          id="features"
        >
          <Link href="/features">
            <Button variant="outline" className="rounded-full px-6 py-2 gap-3">
              <Sparkles className="w-5" />
              Features
            </Button>
          </Link>

          <div className="text-2xl md:text-4xl font-medium my-5 md:my-10">
            Turbocharge your LLM apps development
          </div>

          {/* Features in Cards */}
          <FeatureCards />

          <Link href="/features">
            <Button
              variant="outline"
              className="rounded-full px-6 py-2 gap-3 mb-10"
            >
              <Sparkles className="w-5" />
              See More
            </Button>
          </Link>
        </section>
      </div>
    </>
  );
}
