import React from 'react';
import Header from './header';
import Benner from './benner';
import Fitur from './fitur';
import Teknologi from './teknologi';
import Download from './download';
import Question from './question';
export default function Beranda() {
  return (
    <div className="flex flex-col gap-[50px] lg:gap-[80px] mb-[100px]">
      <Header />
      <Benner />
      <Fitur />
      <Teknologi />
      <Download />
      <Question />
    </div>
  );
}
