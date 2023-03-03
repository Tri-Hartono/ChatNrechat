import React from 'react';
import Header from './header';
import Benner from './benner';
import Fitur from './fitur';
import Teknologi from './teknologi';
import Download from './download';
import Question from './question';
import Head from 'next/head';
export default function index() {
  return (
    <div>
      <Head>
        <title>Beranda</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <div className="flex flex-col gap-[50px] lg:gap-[80px] mb-[100px]">
        <Header />
        <Benner />
        <Fitur />
        <Teknologi />
        <Download />
        <Question />
      </div>
    </div>
  );
}
