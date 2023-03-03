import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { LogoCompany } from '../../../assets/images';
export default function Benner() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();
  useEffect(() => {
    if (isInView) {
      animation.start('visible');
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [isInView]);
  const variants = {
    hidden: { y: '50%', opacity: 0, transition: { duration: 1.4 } },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div ref={ref} animate={animation} initial="hidden" variants={variants} className="w-full h-20 bg-primary bg-opacity-5 p-4 md:py-[60px] md:px-[83px] flex items-center justify-center">
      <Image src={LogoCompany} width="auto" height="auto" alt="Image Logo Company" />
    </motion.div>
  );
}
