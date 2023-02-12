import Link from "next/link"
import DarkModeButton from './DarkModeButton';

const Nav = () => { 
    return ( 
        <nav className='text-center my-5'>
            <Link className='mx-5' href="/">Home</Link>
            <Link className='mx-5' href="/contact">Contact</Link>
            <DarkModeButton />
        </nav>
    )   
}

export default Nav