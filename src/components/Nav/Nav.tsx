import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <nav className="flex  p-12" >
            <Link className='p-4' href={'/'}>Home</Link>
            <Link className='p-4' href={'/about'}>About</Link>
            <Link className='p-4' href={'/contact'}>Contact</Link>
            <Link className='p-4' href={'settings'}>Settings</Link>
        </nav>
    )
}

export default Nav