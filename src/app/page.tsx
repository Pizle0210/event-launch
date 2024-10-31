"use client";
import CountdownTimer from "@/components/Countdown-timer";
import { Cursor } from "@/components/Cursor";
import FrameworkRotation from "@/components/Framework-rotation";
import { assets } from "@/utils/asset-utils";
import { type Framework, frameWorks } from "@/utils/frameworks-utils";
import { cn } from "@/utils/tailwind-utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [currentFramework, setCurrentFramework] = useState<Framework>(
    frameWorks[0],
  );
  const [showBackground, setShowBackground] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    let currentIndex = 0;
    const rotateFrameworks = () => {
      setCurrentFramework(frameWorks[currentIndex]);
      currentIndex = (currentIndex + 1) % frameWorks.length;
    };

    const intervalId = setInterval(rotateFrameworks, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setShowBackground(true);
  }, []);

  return (
    <main>
      {/* Background color */}
      <div
        className={cn(
          "transition-color fixed inset-0 opacity-25 delay-100 duration-700",
          {
            "bg-purple-300": currentFramework === "qwik",
            "bg-sky-300": currentFramework === "safari",
            "bg-yellow-300": currentFramework === "chrome",
            "bg-teal-300": currentFramework === "tailwind",
            "bg-blue-300": currentFramework === "react",
            "bg-green-300": currentFramework === "vue",
            "bg-orange-400": currentFramework === "svelte",
            "bg-red-300": currentFramework === "mobile",
            "bg-neutral-300": currentFramework === "desktop",
          },
        )}
      />
      {/* Grid */}
      <div
        style={{
          backgroundSize: "30px",
          backgroundImage: `url(${assets.square})`,
        }}
        className="fixed inset-0 opacity-30"
      />
      {/* Gradient */}
      <Image
        width={1200}
        height={1200}
        role="presentation"
        alt="gradient background"
        className="fixed inset-0 h-screen w-screen object-cover"
        src={assets.gradient}
      />
      {/* Reveal */}
      <div
        className={cn(
          "fixed inset-0 bg-black transition-opacity duration-1000",
          !showBackground ? "opacity-100" : "opacity-0",
        )}
      />
      {/* Content */}
      <div className="mx-auto mt-20 max-w-7xl">
        <div className="relative z-10 flex flex-col items-center">
          {/* Heading */}
          <h1 className={`leading-snug} mb-12 max-w-3xl text-center text-7xl`}>
            <Image
              alt="Figma logo"
              className="-mt-2 mr-8 inline-block"
              src={assets.figma}
              width="50"
              height="50"
            />
            to <FrameworkRotation currentFramework={currentFramework} /> will{" "}
            <span
              className={cn("transition-colors duration-200", {
                "text-purple-300": currentFramework === "qwik",
                "text-sky-300": currentFramework === "safari",
                "text-yellow-300": currentFramework === "chrome",
                "text-teal-300": currentFramework === "tailwind",
                "text-blue-300": currentFramework === "react",
                "text-green-300": currentFramework === "vue",
                "text-orange-400": currentFramework === "svelte",
                "text-red-300": currentFramework === "mobile",
                "text-neutral-300": currentFramework === "desktop",
              })}
            >
              never
            </span>{" "}
            be the same again
          </h1>
          {/* Sub heading */}
          <p className="mb-8">
            <span className="text-gray-300">
              Join us for an AI launch event by{" "}
            </span>
            <Image
              alt="Builder.io logo"
              className="-mt-1 ml-1 inline-block"
              width={100}
              height={20}
              src={assets.builder}
            />
            {" + "}
            <Image
              alt="Figma logo"
              className="mx-1 inline-block"
              width={55}
              height={20}
              src={assets.figmatwo}
            />
          </p>
          {/* Claim ticket button */}
          <div className="mb-8">
            <button
              ref={buttonRef}
              className={cn(
                "rounded-md px-6 py-3 text-sm font-semibold text-black transition-colors duration-200",
                {
                  "bg-purple-300": currentFramework === "qwik",
                  "bg-sky-300": currentFramework === "safari",
                  "bg-yellow-300": currentFramework === "chrome",
                  "bg-teal-300": currentFramework === "tailwind",
                  "bg-blue-300": currentFramework === "react",
                  "bg-green-300": currentFramework === "vue",
                  "bg-orange-400": currentFramework === "svelte",
                  "bg-red-300": currentFramework === "mobile",
                  "bg-neutral-300": currentFramework === "desktop",
                },
              )}
            >
              Claim Ticket
            </button>
          </div>
          {/* Countdown timer */}
          <CountdownTimer currentFramework={currentFramework} />
        </div>
      </div>
      {/* <Cursor buttonRef={buttonRef} /> */}
      <Cursor buttonRef={buttonRef} />
    </main>
  );
}
