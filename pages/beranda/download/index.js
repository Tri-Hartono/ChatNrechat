import Image from 'next/image';
import React from 'react';
import { AppStore, GooglePlay, ImageDownloadAplikasi } from '../../../assets/images';

export default function index() {
  return (
    <div className="w-auto  relative bg-primary p-4 lg:px-[80px] flex flex-col-reverse justify-between md:py-0 md:flex-row gap-10 items-center text-white rounded-xl">
      <div className="md:w-1/2 flex flex-col gap-4 md:p-4  ">
        <h2>DOWNLOAD APLIKASINYA</h2>
        <h1 className="text-white">Download Aplikasi Chat n’ Rechat Di Play Store, App Store, atau Symbian Store</h1>
        <ul className="list-disc list-inside">
          <li>Android Version: Mojave+</li>
          <li>iOS Version: Lolipop+</li>
          <li>Symbian: 20.04+</li>
        </ul>
        <div className="flex gap-4">
          <button className="py-1 px-2 bg-black rounded-md">
            <Image src={AppStore} width={150} height={46} alt="Image App Store" />
          </button>
          <button className="py-1 px-2 bg-black rounded-md">
            <Image src={GooglePlay} width={150} height={46} alt="Image Google Play" />
          </button>
        </div>
      </div>
      <div className=" h-1/2">
        <Image src={ImageDownloadAplikasi} width={331} height={538} alt="Image Download Aplikasi" />
      </div>
    </div>
  );
}
