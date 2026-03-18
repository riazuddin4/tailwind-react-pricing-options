import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';


const navData = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const links = navData.map(routem => <Link key={routem.id} routem={routem}></Link>)
    return (
        <nav className='flex justify-between mx-10 mt-4'>
          <span className='flex ' onClick={() => setOpen(!open)}> 
            {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
          
          <ul className={`md:hidden absolute duration-1000
            ${open ? 'top-9' : '-top-40'}`}>
            {links}
          </ul>

          <h1 className='ml-4'>My Navbar</h1>
          </span>

            <ul className='md:flex hidden gap-8'>
                {
                    links
                }
            </ul>

            {/* <ul className='flex gap-6'>
               { 
                navData.map(route =><li>
                        <a href="/">{route.name}</a>
                        </li>)
                }
            </ul> */}

            {/* <ul className='flex gap-4'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
            </ul> */}
            <button>Sing In</button>
        </nav>
    );
};

export default Navbar;