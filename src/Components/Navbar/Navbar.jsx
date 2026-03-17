import React from 'react';
import Link from './Link';


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
    return (
        <nav >

            <ul className='flex gap-8'>
                {
                    navData.map(routem => <Link key={routem.id} routem={routem}></Link>)
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
        </nav>
    );
};

export default Navbar;