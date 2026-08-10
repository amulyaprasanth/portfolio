"use client";

import { ChevronsDown } from "lucide-react";

 type ScrollProps = {
  id: string;
}

export default function ScrollIndicator({id}: Readonly<ScrollProps>  ) {
  const scrollDown = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={() => scrollDown(id)}
      className="flex flex-col items-center gap-2 cursor-pointer group"
      aria-label="Scroll to About section">
      <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1 group-hover:border-blue-400 transition-colors">
        <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce group-hover:bg-blue-400 transition-colors" />
      </div>

      <ChevronsDown className="w-5 h-5 text-gray-400 animate-bounce group-hover:text-blue-400 transition-colors" />
    </button>
  );
}
