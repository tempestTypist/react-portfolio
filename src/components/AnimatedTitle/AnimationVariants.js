// Origin and blogpost!
// https://webanimation.blog/blog/wavy-text-animation-using-react-hooks-with-framer-motion/

// Add staggering effect to the children of the container
export const letterContainerVariants = {
  before: { transition: { staggerChildren: 0.1 } },
  after: { transition: { staggerChildren: 0.1 } }
};

// Variants for animating each letter
export const letterVariants = {
  before: {
    y: 20,
    transition: {
      ease: "linear",
      duration: 1,
      repeat: Infinity,
      repeatType: "loop"
    }
  },
  after: {
    y: 0,
    transition: {
      ease: "linear",
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
};
