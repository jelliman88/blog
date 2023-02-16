import Link from "next/link"
import DarkModeButton from './DarkModeButton';
import Image from "next/image";

const Nav = () => { 
    return ( 
        <nav className="font-['Margarine'] flex justify-evenly my-5 text-2xl border-b-2 border-gray-400 p-1">
             <Link href="/">
             <span className="flex"><Image src="/logo.png" alt="logo" height="75" width="75"/><span className="font-['Margarine'] text-pink-500">JELLI.CLOUD</span></span>
             </Link>
            <Link className='mx-5 hover:text-pink-500' href="/">Home</Link>
            <Link className='mx-5 hover:text-pink-500' href="/blog">Blog</Link>
            <Link className='mx-5 hover:text-pink-500' href="/contact">Portfolio</Link>
            <DarkModeButton />

            
        </nav>
    )   
}

export default Nav