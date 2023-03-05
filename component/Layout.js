import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className=" bg-backgroundColor w-auto px-setting flex items-center justify-center flex-col overflow-hidden 2xl:w-4/5 mx-auto relative">
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </div>
  );
}
