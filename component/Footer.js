import React from 'react';
import Image from 'next/image';
import { Icon, InstagramIcon, FacebookIcon, TwitterIcon } from '../assets/images';
export default function Footer() {
  return (
    <div className=" flex flex-col md:flex-row  justify-between gap-[30px] p-6 lg:p-20 bg-primary bg-opacity-5 text-dark ">
      <div className="flex flex-col gap-5 lg:w-[435px]">
        <div className="flex gap-4 items-center ">
          <Image src={Icon} width={30} height={30} alt="" />
          <span className="font-semibold">Chat N’ Rechat</span>
        </div>
        <p className="text-dark text-opacity-60">Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini, maka dari itu lebih baik pake yang lain aja deh ya daripada pake aplikasi yang ini.</p>
        <h4 className="font-semibold text-base">COPYRIGHT (C) 2021. DESIGN BY NAUVAL</h4>
      </div>
      <div className="flex flex-col gap-5">
        <h3>Sitemap</h3>
        <ul className="text-dark text-opacity-60 font-semibold text-xs flex flex-col gap-2">
          <li>Beranda</li>
          <li>Fitur</li>
          <li>Teknologi</li>
          <li>FAQ</li>
          <li>Download</li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h3>Tetep Terhubung</h3>
        <p className="text-dark text-opacity-60">Lihat kami pansos di sosial media berikut:</p>
        <div className="flex gap-[10px] items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-slate-300">
            <Image src={InstagramIcon} width={24} height={24} alt="" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-slate-300">
            <Image src={FacebookIcon} width={24} height={24} alt="" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-slate-300">
            <Image src={TwitterIcon} width={24} height={24} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
