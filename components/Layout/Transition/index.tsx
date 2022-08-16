import { motion,AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { variants } from "components/Layout/Transition/styles";

interface TransitionProps {
    children: React.ReactNode;
    location: string;
}
    
export const Transition = ({ children, location }: TransitionProps) => {
  const { asPath } = useRouter();

    return (
      <AnimatePresence initial={false} exitBeforeEnter>
        {/* {isVisible && ( */}
          <motion.article
            key={asPath}
            variants={variants}
            initial="inactive"
            animate="fadeIn"
            exit="fadeOut"
          >
            {children}
          </motion.article>
        {/* )} */}
      </AnimatePresence>

    );
  };
  