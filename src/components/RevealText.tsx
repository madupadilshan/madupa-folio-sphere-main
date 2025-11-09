import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const RevealText = ({ children, delay = 0, className = '' }: RevealTextProps) => {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    },
  };

  return (
    <motion.div
      className={className}
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default RevealText;
