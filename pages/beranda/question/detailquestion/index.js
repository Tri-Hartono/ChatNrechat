import React, { useEffect, useState } from 'react';
import ArrowDownSvg from '../../../../assets/svg/ArrowDownSvg';
import { motion } from 'framer-motion';

const variants = {
  open: { scale: 1 },
  closed: { scale: 0 },
};
export default function Index({ title, detail }) {
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {}, []);
  return (
    <div className={dropDown ? 'bg-primary rounded-md w-full text-white mb-2' : 'w-full bg-transparent text-dark'} onClick={() => setDropDown(!dropDown)}>
      <div className="py-5 gap-4 px-2 md:px-[30px] flex items-center justify-between border-b border-slate-200">
        <h2 className="font-medium">{title}</h2>
        <div className={dropDown ? 'rotate-180' : 'rotate-0'}>
          <ArrowDownSvg stroke={dropDown ? '#ffffff' : '#0C1B4D'} />
        </div>
      </div>
      <motion.div animate={dropDown ? 'open' : 'closed'} variants={variants} transition={{ duration: 0.5 }} className={dropDown ? 'flex px-4 md:px-[30px] py-2' : 'hidden'}>
        <p className="text-white">{detail}</p>
      </motion.div>
    </div>
  );
}
