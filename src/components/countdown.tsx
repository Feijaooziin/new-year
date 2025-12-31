"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function getTimeLeft() {
  const now = new Date();
  const nextYear = new Date(now.getFullYear() + 1, 0, 1);
  const diff = nextYear.getTime() - now.getTime();

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const labelsPT = {
  days: "dias",
  hours: "horas",
  minutes: "minutos",
  seconds: "segundos",
} as const;

export function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex gap-6 text-center mt-6 justify-center"
    >
      {Object.entries(time).map(([label, value]) => (
        <div key={label}>
          <p className="text-3xl font-bold">{value}</p>
          <span className="text-sm text-muted-foreground uppercase">
            {labelsPT[label as keyof typeof labelsPT]}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
