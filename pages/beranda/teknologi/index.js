import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ImageTeknologi, IconAngry, IconBear, IconSleep } from '../../../assets/images';

export default function index() {
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
    hiddenLeft: { x: '-50%', opacity: 0, transition: { duration: 1 } },
    hiddenRight: { x: '50%', opacity: 0, trantion: { duration: 1 } },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        type: 'spring',
      },
    },
  };
  return (
    <div ref={ref} className="flex flex-col items-center lg:flex-row  gap-[30px] ">
      <motion.div animate={animation} initial="hiddenLeft" variants={variants} className="w-1/2">
        <Image src={ImageTeknologi} width="auto" height="auto" alt="" />
      </motion.div>
      <motion.div animate={animation} initial="hiddenRight" variants={variants} className="lg:w-1/2 h-full flex flex-col  ">
        <div className="flex flex-col gap-4">
          <h3>TEKNOLOGI YANG DIGUNAKAN</h3>
          <h1>Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan Membuat DHH Dan Jason Fried Pensiun! 😱</h1>
          <p>
            Lo bisa bayangin DHH sama Jason Fried aja jadi pensiun gegara aplikasi ini, apalagi lo yang cuma user dan beban kami, gegara lo pake dan daftar di aplikasi ini jadi kita harus bayar server DO tiap bulan, mana pas bayar harus
            tunjuk-tunjukan. Inilah alasan kenapa gak usah daftar:
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-[30px]">
          <div className="flex gap-6 ">
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-md bg-dark bg-opacity-5">
              <Image src={IconAngry} width={30} height={30} alt="Image Angry" />
            </div>
            <div className="w-full">
              <h2>Kamu Adalah Beban Kami</h2>
              <p>Semakin banyak kamu yang mendaftar di aplikasi ini, artinya semakin banyak data yang perlu disimpan, nah kan jadi perlu server gede tuh. Makanya kamu beban!</p>
            </div>
          </div>
          <div className="flex gap-6 ">
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-md bg-dark bg-opacity-5">
              <Image src={IconBear} width={30} height={30} alt="Image Bear" />
            </div>
            <div className="w-full">
              <h2>Males Buat Ngembangin</h2>
              <p>Lo bakal nemu bug, entah pesan yang mau dikirim gak bisa dikirim padahal lo belom pencet tombol enter atau masalah lainnya. Nah soal itu kita males buat benerin.</p>
            </div>
          </div>
          <div className="flex gap-6 ">
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-md bg-dark bg-opacity-5">
              <Image src={IconSleep} width={30} height={30} alt="Icon Sleep" />
            </div>
            <div className="w-full">
              <h2>Pokoknya Males Aja Lah</h2>
              <p>Nggak tau lagi harus ngomong apa, pokoknya males aja sih kita bikin aplikasi chat kek gini. Makannya mending lo pake WhatsApp aja udah.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
