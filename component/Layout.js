import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className=" bg-backgroundColor w-auto px-setting flex items-center justify-center flex-col overflow-hidden 2xl:w-4/5 mx-auto relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
