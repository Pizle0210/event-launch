import React, { useEffect, useState } from "react";
import { Framework } from "@/utils/frameworks-utils";
import { calculateTimeToEvent } from "@/utils/countdown-utils";
import { TimeUnit } from "./Time-unit";// Assuming TimeUnit is the correct component import

export default function CountdownTimer({
  currentFramework,
}: {
  currentFramework: Framework;
}) {
  const [countdown, setCountdown] = useState(calculateTimeToEvent());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(calculateTimeToEvent());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="flex gap-[86px] text-center">
      <TimeUnit
        label="DAYS"
        value={countdown.days}
        currentFramework={currentFramework}
      />
      <TimeUnit
        label="HOURS"
        value={countdown.hours}
        currentFramework={currentFramework}
      />
      <TimeUnit
        label="MINUTES"
        value={countdown.minutes}
        currentFramework={currentFramework}
      />
      <TimeUnit
        label="SECONDS"
        value={countdown.seconds}
        currentFramework={currentFramework}
      />
    </div>
  );
}
