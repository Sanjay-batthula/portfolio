import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Hero
export const Hero = () => {
  const typedElement1 = useRef<HTMLSpanElement>(null);
  const typedElement2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed1 = new Typed(typedElement1.current, {
      strings: ["Hi, I'm "],
      typeSpeed: 150,
      backSpeed: 70,
      backDelay: 2000,
      startDelay: 0,
      loop: false,
      showCursor: false,
    });
    const typed2 = new Typed(typedElement2.current, {
      strings: ["Sanjay"],
      typeSpeed: 300,
      backSpeed: 70,
      backDelay: 2000,
      startDelay: 500,
      loop: false,
      showCursor: false,
    });

    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5",
        )}
      >
        {/* Title */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* About Me */}
        <div>
          <h1 className={cn(styles.heroHeadText, "text-white")}>
            <span ref={typedElement1}></span>
            <span className="text-[#915eff]" ref={typedElement2}></span>
          </h1>
          <p className={cn(styles.heroSubText, "mt-2 text-white-100")}>
  I’m an AI & Automation Enthusiast and Software Developer,<br className="sm:block hidden" />
  building smart chatbots, automated workflows, and responsive web applications.
</p>
        </div>
      </div>

      {/* Computer Model */}
      <ComputersCanvas />

      {/* Scroll to about section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
