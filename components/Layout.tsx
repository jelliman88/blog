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
       <Head>
      <title>something new</title>
      <meta
        name="description"
        content="This is a blog with many intersting articles about Harry Potter."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
        <main className='flex flex-col justify-between h-screen'>
          <Nav />
            {children}
          <Footer />
        </main>
        
    </div>
  );
};

export default Layout;