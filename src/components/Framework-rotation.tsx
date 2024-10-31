import { assets } from "@/utils/asset-utils";
import { type Framework, frameWorks } from "@/utils/frameworks-utils";
import { cn } from "@/utils/tailwind-utils";
import Image from "next/image";
import React from "react";

export default function FrameworkRotation({
  currentFramework,
}: {
  currentFramework: Framework;
}) {
  return (
    <div className="relative mx-2 -mt-2 inline-flex h-[80px] w-[80px] align-middle">
      {" "}
      {frameWorks.map((framework, index) => (
        <Image
          key={framework}
          alt="frame work"
          src={assets[framework]}
          height={80}
          width={80}
          className={cn(
            `absolute left-0 top-0 h-full w-full object-contain object-center transition-all duration-300`,
            currentFramework === framework
              ? "transform-none opacity-100"
              : index > framework.indexOf(currentFramework as Framework)
                ? "-translate-y-2 opacity-0"
                : "translate-y-2 opacity-0",
          )}
        />
      ))}
    </div>
  );
}
