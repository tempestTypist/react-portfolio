import { motion } from "framer-motion";
import { NavHashLink as NavLink } from "react-router-hash-link";
import './style.css';

const Navigation = () => {
  const navVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  
  const itemVariants = {
    open: {
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
  
  return (
      <motion.ul className="navbar-nav ms-auto mt-2 mt-md-0 me-md-2" variants={navVariants}>

        <motion.li 
          className="nav-item"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          <NavLink 
            smooth
            to={ "/#home" } 
            className="nav-link">
              Home
          </NavLink>
        </motion.li>
        
        <motion.li 
          className="nav-item"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          <NavLink 
            smooth
            to={ "/#about"} 
            className="nav-link">
              About
          </NavLink>					
        </motion.li>

        <motion.li 
          className="nav-item"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          <NavLink 
            smooth
            to={ "/#work" }
            className="nav-link">
              Work
          </NavLink>					
        </motion.li>

        <motion.li 
          className="nav-item"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          <NavLink 
            smooth
            to={ "/#contact" }
            className="nav-link">
              Contact
          </NavLink>					
        </motion.li>

      </motion.ul>
  )
}
export default Navigation;