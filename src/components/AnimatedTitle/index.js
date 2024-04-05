// Origin and blogpost!
// https://webanimation.blog/blog/wavy-text-animation-using-react-hooks-with-framer-motion/
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { letterContainerVariants, letterVariants } from "./AnimationVariants";

export const AnimatedTitle = (props) => {
  const { children } = props;
  console.log(children)

  return (
    <motion.h2
      {...props}
      className="animated-title"
      variants={letterContainerVariants}
      initial={"before"}
      animate={"after"}
      key={children}
      aria-label={children}
    >
      {children.split(" ").map((word, wordI) => (
        <div
          key={`word-${word}-${wordI}`}
          style={{ display: "inline-block" }}
        >
          {Array.from(word).map((letter, index) => (
            <motion.span
              key={`${index}-${letter}`}
              style={{
                position: "relative",
                display: "inline-block",
                width: "auto"
              }}
              variants={letterVariants}
              data-text={letter}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
          {"\u00A0"}
        </div>
      ))}
    </motion.h2>
  );
};
