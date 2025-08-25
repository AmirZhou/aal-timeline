"use client";

import { useState } from "react";
import { Timeline } from "@bitravage/timeline";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const isDarkMode = theme === "dark";

  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className={`min-h-screen py-16 relative ${
      theme === "dark" ? "bg-[#1a1a1a]" : "bg-[#f8fafc]"
    }`}>
      <div className="absolute top-8 right-8">
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleTheme}
          size={24}
          sunColor="#f59e0b"
          moonColor="#e5e7eb"
        />
      </div>
      
      <div className="max-w-[1200px] mx-auto px-6">
        <h1 className={`text-[6rem] font-black tracking-[-0.03em] py-8 mb-16 text-left ${
          theme === "dark" ? "text-white" : "text-[#1e293b]"
        }`}>
          Access Alberta Legal
        </h1>
        <Timeline theme={theme} convexUrl={process.env.NEXT_PUBLIC_CONVEX_URL} />
      </div>
    </div>
  );
}
