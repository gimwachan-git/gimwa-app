import { motion,AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

interface TransitionProps {
    children: React.ReactNode;
    location: string;
}

const AnimationSettings = {
    transition: { duration: 0.5 },
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }  
};

const variants = {
  fadeIn: {
    opacity: 1,
    x: 0,
    transition: {
      duration: .25,
      ease: "linear",
      delay: .15,

    }
  },
  inactive: {
    x: 50,
    opacity: 0,
    transition: {
      duration: .25,
      ease: "easeIn",

    }
  },
  fadeOut: {
    opacity: 0,
    x: -50,
    transition: {
      duration: .2,
      ease: "easeOut"
    }
  }
};
    
export const Transition = ({ children, location }: TransitionProps) => {
  const { asPath } = useRouter();

    return (
        <AnimatePresence initial={false} exitBeforeEnter>
        {/* {isVisible && ( */}
          <motion.main
            key={asPath}
            variants={variants}
            initial="inactive"
            animate="fadeIn"
            exit="fadeOut"
          >
            {children}
          </motion.main>
        {/* )} */}
      </AnimatePresence>

    );
  };
  