import React from 'react';
import Head from 'next/head';
export default function Teknologi() {
  return (
    <div className="min-h-screen w-full  flex items-center justify-center">
      <Head>
        <title>Teknologi</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <h1>Teknologi</h1>
    </div>
  );
}
