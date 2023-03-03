import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ImageAhmad, ImageUstadz, ImageSmile, ImageLock, ImageSmileAngel, ImageSmileLove, ImageCheck, ImageText, ImageDownload, ImageUser, ImageArrow } from '../../../assets/images';

function Header() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();
  useEffect(() => {
    if (isInView) {
      animation.start('visibleLeft');
      animation.start('visibleRight');
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [isInView]);
  const variants = {
    hiddenLeft: { x: '-50%', opacity: 0, transition: { duration: 1 } },
    hiddenRight: { x: '50%', opacity: 0, trantion: { duration: 1 } },
    hiddenTop: { y: '-50%', opacity: 0, transition: { duration: 2 } },
    hiddenBottom: { y: '50%', opacity: 0, transition: { duration: 2 } },
    visibleLeft: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        type: 'spring',
      },
    },
    visibleRight: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        type: 'spring',
      },
    },
  };
  return (
    <div ref={ref} className="mt-20 lg:mt-36 flex flex-col lg:flex-row  justify-center items-center gap-[50px] ">
      <motion.div animate={animation} initial="hiddenLeft" variants={variants} className="flex flex-col gap-[50px] md:gap-[70px] lg:w-1/2">
        <div className="flex flex-col gap-[15px]">
          <h3 className=" text-primary font-normal">CHAT N’ RECHAT</h3>
          <h1 className=" ">Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi tidak lupa jasa pahlawan!</h1>
          <p className="text-dark text-opacity-60">Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini, maka dari itu lebih baik pake yang lain aja deh ya daripada pake aplikasi yang ini.</p>
          <div className="flex gap-4">
            <div className="px-[20px] py-[10px] md:px-[45px] md:py-[15px] flex gap-2 cursor-pointer bg-blue-600 text-white font-semibold rounded-md">
              <div>Register</div>
              <Image src={ImageArrow} width={20} height={20} style={{ width: 20, height: 20 }} alt="Image Arrow" />
            </div>
            <button className="px-[20px] py-[10px] md:px-[45px] md:py-[15px] rounded-md bg-blue-100 text-blue-600 font-semibold">Learn More</button>
          </div>
        </div>
        <div className="flex items-center gap-6 text-dark">
          <div className="flex gap-4">
            <div className="w-6 h-6">
              <Image src={ImageDownload} width={24} height={24} style={{ width: 24, height: 24 }} alt="Image Download" />
            </div>
            <div>
              <p className="text-xs">TOTAL DON’TLOUD</p>
              <h2>1,501,234</h2>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-6 h-6">
              <Image src={ImageUser} width={24} height={24} style={{ width: 24, height: 24 }} alt="" />
            </div>
            <div>
              <p className="text-xs">TOTAL USERS</p>
              <h2>1,501,234</h2>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="md:w-1/2  flex flex-col gap-6 items-center text-dark justify-center h-full relative rotate-12 hover:rotate-0 transition duration-300">
        <div className="absolute w-[356px] h-[356px] bg-gradient-to-b from-[#E3EAFF] to-[#E3EAFF]/10 rounded-full "></div>
        <div className="relative flex flex-col py-4 items-center justify-between w-[241px] h-[488px] bg-white  rounded-xl shadow-lg">
          <Image src={ImageSmileAngel} width={49} height={49} className="absolute -right-6" alt="" />
          <div className="flex gap-2  items-center justify-center">
            <div className="w-10 h-1 rounded-md bg-slate-200"></div>
            <div className="w-1 h-1 rounded-md bg-slate-200"></div>
          </div>
          <div className="w-[203px] h-[35px] rounded-2xl border border-slate-300 relative flex items-center gap-4 p-2">
            <Image src={ImageSmile} width={14} height={14} alt="" />
            <p className="text-[10px] ">Type a message</p>
            <Image className="absolute -left-12 -top-6 -rotate-12" src={ImageLock} width={56} height={56} alt="" />
          </div>
        </div>

        {/* AhmadRifai */}
        <motion.div
          animate={animation}
          initial="hiddenTop"
          variants={variants}
          className="absolute flex flex-col gap-2 
          top-20 -left-12 md:-left-8"
        >
          <div className="flex flex-col gap-4 bg-white p-4 shadow-2xl rounded-md md:w-[308px]">
            <Image src={ImageSmileLove} width={27} height={27} className="absolute -top-3 right-1/3 " alt="" />
            <div className="absolute -top-1 -left-1 flex items-center justify-center">
              <div className="w-4 h-4 absolute rounded-full bg-primary z-40 animate-ping"></div>
              <div className="w-6 h-6 absolute rounded-full bg-primary opacity-30 z-30 animate-ping"></div>
              <div className="w-8 h-8 absolute rounded-full bg-primary opacity-20 z-20 animate-ping"></div>
              <div className="w-10 h-10 absolute rounded-full bg-primary opacity-10 z-10 animate-ping"></div>
            </div>
            <p className="text-sm text-dark">Assalamualaikum. Izin tanya, Ustadz. Hukum bayar internet indihom menurut Imam Syafi’i apa ya, Ustadz? Syukron before.</p>
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full">
                <Image src={ImageAhmad} width={20} height={20} alt="" />
              </div>
              <h3>Ahmad Rifai</h3>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Image src={ImageCheck} width={13} height={13} alt="" />
            <p className="text-sm">Today, at 15:30</p>
          </div>
        </motion.div>

        {/* UstadzAhmad */}
        <motion.div animate={animation} initial="hiddenBottom" variants={variants} className="absolute -right-14 md:-right-8 bottom-20 gap-2 ">
          <div className="md:w-[308px] md:h-[142px] flex flex-col justify-between   rounded-md shadow-lg p-4 bg-primary">
            <div className="flex flex-col  gap-2">
              <div className="w-[249px] h-[11px] rounded-md bg-white/50 animate-pulse"></div>
              <div className="w-[223px] h-[11px] rounded-md bg-white/50 animate-pulse"></div>
              <div className="w-[66px] h-[11px] rounded-md bg-white/50 animate-pulse"></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full">
                <Image src={ImageUstadz} width={20} height={20} alt="" />
              </div>
              <h3 className="text-slate-200">Ustadz Ahmad </h3>
            </div>
            <Image src={ImageText} width={31} height={31} className="absolute bottom-0 -right-2" alt="" />
          </div>
          <div className="flex gap-4 items-center">
            <Image src={ImageCheck} width={13} height={13} alt="" />
            <p className="text-sm">Today, at 15:30</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
