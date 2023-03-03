import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Card1, Card2, Card3 } from '../../../assets/images';
import CardFitur from './card';

export default function index() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();
  useEffect(() => {
    if (isInView) {
      animation.start('visible');
    }
    console.log('Coba view', useInView);
  }, [isInView]);
  const variants = {
    hiddenLeft: { x: '-50%', opacity: 0, transition: { duration: 1 } },
    hiddenCenter: { y: '-50%', opacity: 0, transition: { duration: 2 } },
    hiddenRight: { x: '50%', opacity: 0, trantion: { duration: 1 } },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        type: 'spring',
      },
    },
  };
  return (
    <div ref={ref} className="text-dark text-center flex flex-col items-center justify-center  relative">
      <div className="relative flex flex-col items-center justify-center gap-[10px]">
        <span className="font-semibold text-xs">NGGAK HARUS SIH SEBENERNYA</span>
        <h1>Kenapa Harus Pakai Chat N’ Rechat?</h1>
        <p className="md:w-1/2">Sebenernya yang bagus itu sih WhatsApp loh, mending pake WhatsApp aja deh. Yaudah berikut ini adalah fitur-fitur WhatsApp.</p>
      </div>
      <div className="grid  md:grid-cols-3 gap-[30px] mt-[100px] relative">
        <motion.div animate={animation} initial="hiddenLeft" variants={variants}>
          <CardFitur ImageFitur={Card1} title="Groups to keep in touch" detail="Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos." />
        </motion.div>
        <motion.div animate={animation} initial="hiddenCenter" variants={variants}>
          <CardFitur ImageFitur={Card2} title="Simple, Reliable Messaging" detail="Message your friends and family for free*. WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees." />
        </motion.div>
        <motion.div animate={animation} initial="hiddenRight" variants={variants}>
          <CardFitur
            ImageFitur={Card3}
            title="Speak Freely"
            detail="With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free* video calls, you can have face-to-face conversations."
          />
        </motion.div>
      </div>
      <div className="absolute w-3/4 h-3/4 rounded-full bg-primary bg-opacity-5 blur-xl z-0"></div>
    </div>
  );
}
