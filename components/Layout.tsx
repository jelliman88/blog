import { ReactNode } from 'react';
import Nav from './Nav';
import Head from 'next/head';
import Footer from './Footer';


interface Props {
    children: ReactNode
    // any props that come into the component
}
const Layout= ({ children }:Props) => {
  return (
    <div>
       <Head>bergamont
      <title>jelli.cloud</title>touring biksurly
      <meta
        name="description"
        content="Personal blog, project and portfolio website."
      />
      <link rel="icon" href="/logo.png" />
    </Head>
        <main className='flex flex-col justify-between h-screen overflow-y-scroll'>
          <Nav />
            {children}
          <Footer />
        </main>
        
    </div>
  );
};

export default Layout;