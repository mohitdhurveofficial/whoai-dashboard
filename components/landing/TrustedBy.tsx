"use client";

import { motion } from "framer-motion";

const logos = ["OpenAI", "LangChain", "crewai", "ANTHROPIC", "AutoGen", "Hugging Face"];

export default function TrustedBy() {
  return (
    <section className="px-4 pb-4 pt-7 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        className="premium-panel mx-auto max-w-[1368px] rounded-[22px] px-8 py-5"
      >
        <p className="text-center text-[11px] font-black uppercase tracking-[0.36em] text-[#071126]/38">
          Trusted by innovative AI teams
        </p>
        <div className="mt-5 grid grid-cols-2 items-center gap-0 text-center sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <span
              key={logo}
              className={`flex min-h-10 items-center justify-center border-black/12 text-[22px] font-black tracking-[-0.04em] text-[#071126] lg:border-r lg:last:border-r-0 ${
                logo === "crewai" ? "font-serif italic" : ""
              }`}
            >
              {logo}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
