import { ReactNode, useState, useEffect } from 'react';
import DarkModeButton from './DarkModeButton';
import Nav from './Nav';
import Head from 'next/head';


interface Props {
    children: ReactNode
    // any props that come into the component
}
const Layout= ({ children }:Props) => {
  return (
    <div>
       <Head>
      <title>My awesome Harry Potter blog</title>
      <meta
        name="description"
        content="This is a blog with many intersting articles about Harry Potter."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
        <Nav />
        <DarkModeButton />
        {children}
    </div>
  );
};

export default Layout;