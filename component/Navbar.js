import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '../assets/images';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const NavbarLink = [
  {
    name: 'Beranda',
    url: '/',
  },
  {
    name: 'Fitur',
    url: '/fitur',
  },
  {
    name: 'Teknologi',
    url: '/teknologi',
  },
  {
    name: 'FAQ',
    url: '/faq',
  },
];
const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-100%' },
};

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: '-100%' }}
      transition={{ duration: 1.4 }}
      className="w-full 2xl:w-4/5 mx-auto px-setting py-6 lg:h-12 lg:py-12 flex flex-col lg:flex-row text-dark bg-indigo-900 transition duration-300 overflow-hidden items-center justify-between fixed top-0 z-[100]"
      style={navbarOpen ? { backgroundColor: '#4A72FF' } : { backgroundColor: 'transparent' }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex justify-between items-center w-full lg:w-auto   ">
          <Image src={Icon} width={35} height={35} alt="Icon Tangan" />
          <div className="flex flex-col gap-1 p-2 rounded-md bg-primary lg:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>
            <div className="w-7 h-1 bg-white rounded-sm"></div>
            <div className="w-7 h-1 bg-white rounded-sm"></div>
            <div className="w-7 h-1 bg-white rounded-sm"></div>
          </div>
        </div>

        <ul className="  text-dark hidden lg:flex gap-4 items-center  ">
          {NavbarLink.map((item, index) => (
            <li className="cursor-pointer">
              <Link href={item.url}> {item.name}</Link>
            </li>
          ))}
        </ul>

        <button className="py-2 px-4 bg-primary text-white font-semibold rounded-md hidden lg:flex ">Download</button>
      </div>
      {/* mobile menu */}

      <motion.div animate={navbarOpen ? 'open' : 'closed'} variants={variants} transition={{ duration: 1 }}>
        <ul className="flex flex-col gap-4 text-center text-white lg:hidden">
          {NavbarLink.map((item, index) => (
            <li className="cursor-pointer">
              <Link href={item.url}> {item.name}</Link>
            </li>
          ))}
        </ul>
        <button className="py-2 px-4 bg-white text-primary font-semibold rounded-md flex md:hidden ">Download</button>
      </motion.div>
    </motion.div>
  );
}
