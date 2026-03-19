
//  import React from 'react';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
    const[open,setOpen]=useState(false)
    return (
        <nav className='flex justify-between text-black mt-5'>
            <span className='flex' onClick={()=>setOpen(!open)}>
                {open? <X className='md:hidden'></X> :<Menu className='md:hidden'></Menu> }
                <ul className={`md:hidden absolute duration-1000 bg-amber-400 ${open? 'top-4' : '-top-40'}`}>
            <li className='mr-10'><a href=''>Home</a></li>
            <li className='mr-10'><a href=''>About</a></li>
            <li className='mr-10'><a href=''>Blog</a></li>
            </ul> 
                
            <h2 className='ml-4'>My navbar</h2>

            </span>
          <ul className='md:flex hidden'>
            <li className='mr-10'><a href=''>Home</a></li>
            <li className='mr-10'><a href=''>About</a></li>
            <li className='mr-10'><a href=''>Blog</a></li>
            </ul> 
            <button>Click</button> 
        </nav>
    );
};

export default Navbar;