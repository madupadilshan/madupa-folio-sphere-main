import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
  loop?: boolean;
}

const TypingEffect = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = '',
  cursorClassName = '',
  loop = true,
}: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const cursorControls = useAnimation();

  // Cursor blink animation
  useEffect(() => {
    cursorControls.start({
      opacity: [1, 0, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: 'linear',
      },
    });
  }, [cursorControls]);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        if (loop || textIndex < texts.length - 1) {
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
        return;
      }

      const deleteTimeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
      return () => clearTimeout(deleteTimeout);
    }

    if (displayText === currentText) {
      if (loop || textIndex < texts.length - 1) {
        setIsPaused(true);
      }
      return;
    }

    const typeTimeout = setTimeout(() => {
      setDisplayText(currentText.slice(0, displayText.length + 1));
    }, typingSpeed);
    return () => clearTimeout(typeTimeout);
  }, [
    displayText,
    isDeleting,
    isPaused,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    loop,
  ]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="min-w-[1ch]">{displayText}</span>
      <motion.span
        animate={cursorControls}
        className={`inline-block w-[3px] h-[1.2em] bg-primary ml-1 ${cursorClassName}`}
      />
    </span>
  );
};

// Alternative: Word by Word Reveal
interface WordRevealProps {
  text: string;
  delay?: number;
  staggerDelay?: number;
  className?: string;
}

export const WordReveal = ({
  text,
  delay = 0,
  staggerDelay = 0.1,
  className = '',
}: WordRevealProps) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap gap-x-2 ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Character by Character Reveal
interface CharRevealProps {
  text: string;
  delay?: number;
  staggerDelay?: number;
  className?: string;
}

export const CharReveal = ({
  text,
  delay = 0,
  staggerDelay = 0.03,
  className = '',
}: CharRevealProps) => {
  const characters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TypingEffect;
