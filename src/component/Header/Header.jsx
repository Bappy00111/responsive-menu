import React, { useState } from 'react';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open,setOpen] = useState(false)

    return (
      <nav className='bg-slate-400 h-[80px] p-4'>
        <div className='md:hidden' onClick={()=> {setOpen(!open)}}>
            <span>{open ?
             <XMarkIcon className="h-6 w-6 " />
             :
             <Bars3Icon className="h-6 w-6" />
              }</span>
            
        </div>
            <ul className={`md:flex bg-orange-300 cursor-pointer   text-gray-950 space-y-3
           absolute md:static duration-700 p-10 ${open ? "top-16" : "-ml-60"}`}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Service</li>
            </ul>  
      </nav>
    );
};

export default Header;