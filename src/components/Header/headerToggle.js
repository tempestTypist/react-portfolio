import { motion } from "framer-motion";

const HeaderToggle = ({ toggle }) => {
  return (
    <button 
      type="button" 
      aria-label="Toggle navigation"
      className="navbar-toggler bg-transparent ms-auto border-0" 
      onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="hsl(0, 100%, 100%)"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="hsl(0, 100%, 100%)"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="hsl(0, 100%, 100%)"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  );
}
export default HeaderToggle;