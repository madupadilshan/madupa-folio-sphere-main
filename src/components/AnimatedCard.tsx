import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

const AnimatedCard = ({
  children,
  className = '',
  delay = 0,
  hover = true,
}: AnimatedCardProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: 'easeOut',
      }}
      whileHover={
        hover
          ? {
              scale: 1.03,
              transition: { duration: 0.2 },
            }
          : undefined
      }
      whileTap={hover ? { scale: 0.98 } : undefined}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
