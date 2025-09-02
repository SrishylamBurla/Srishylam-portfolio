import React from "react";

const Sample = () => {
  return (
    <div className="group relative max-w-md mx-auto">
      {/* Default content (visible before hover) */}
      <div className="rounded-2xl p-6 bg-[#14161d] shadow-lg transition-opacity duration-500 group-hover:opacity-0">
        <div className="flex items-center justify-center h-32">
          <img src="/clerk-logo.svg" alt="clerk" className="w-24" />
        </div>
      </div>

      {/* Hover content (appears on hover) */}
      <div className="absolute inset-0 rounded-2xl p-6 bg-gradient-to-b from-[#1f2330] to-[#0e1018] shadow-[0_0_25px_4px_rgba(59,130,246,0.4)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <h2 className="text-xl font-bold text-white">Hover Card</h2>
        <p className="text-gray-300 mt-2">
          This content replaces the logo on hover.
        </p>
        <a href="#Home" className="text-blue-400 font-semibold mt-4 inline-block">
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default Sample;
