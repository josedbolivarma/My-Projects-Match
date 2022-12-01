import { getAuth } from 'firebase/auth'
import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { BsFillPersonFill, BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth'

export const Header = () => {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#000');
    const [linkColor, setLinkColor] = useState('#1f2937');

    const [user, setUser] = useState(null);
  const { logoutAsync } = useContext(AuthContext);

  const navigate = useNavigate();
  const n = localStorage.getItem("llave");

  useEffect(() => {
    const auth = getAuth().currentUser;
    setUser(auth);
  }, []);

  const handleLogout = () => {
    logoutAsync()
    navigate("/login");
  };


    const handleNav = () => {
        setNav(!nav);
      };
    
      useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
            setNavBg('#000');
          } else {
            setNavBg('transparent')
            setShadow(false);
          }
        };
        window.addEventListener('scroll', handleShadow);
      }, []);

  return (
    <nav className={`relative w-full h-20 ${ shadow? 'shadow-xl' : '' } z-[100] ease-in-out duration-300 px-3 pt-6`} style={{
        backgroundColor: '#FFF'
      }}>
          <div className='flex justify-between items-center w-full h-full px-3 2xl:px-16 pb-6'>
               <Link className='flex items-center gap-2' to='/match'>
                  <div>
                  <img style={{
                    width: '100px',
                    height: '60px'
                  }} src='https://res.cloudinary.com/duzncuogi/image/upload/v1669842422/hackaton/my%20project%20match/My_Project_Match_qw7nkd.png'/>
                  
                  </div>
                  
              </Link>
  
              <div>
                  <ul className='hidden md:flex'>
                      <li className="ml-10 text-sm uppercase hover:border-b">
                          <Link href='/'>
                              Home
                          </Link>
                      </li>
                      <li className="ml-10 text-sm uppercase hover:border-b">
                          <Link href='/#about'>
                              About
                          </Link>
                      </li>
                      <li className="ml-10 text-sm uppercase hover:border-b">
                          <Link href='/#contact'>
                          Contact
                          </Link>
                      </li>
                      <li className="ml-10 text-sm uppercase hover:border-b">
                      <div className='flex gap-2 items-start'>
                      <p onClick={ handleLogout }>Logout</p>
        
        <BsFillPersonFill size={ 30 } className="pb-3" />
                      </div>
                      </li>
                  </ul>
                  {/* Hamburger Icon */}
            <div
              style={{ color: `${linkColor}` }}
              onClick={handleNav}
              className='md:hidden'
            >
              <AiOutlineMenu size={25} />
            </div>
              </div>
          </div>
  
          
        {/* Mobile Menu */}
        {/* Overlay */}
        <div
          className={
            nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/10' : ''
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#111] p-10 ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
          >
            <div>
              <div className='flex w-full items-center justify-between text-white'>
               
                <div
                  onClick={handleNav}
                  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4 text-white'>
                  Let&#39;s build something legendary together
                </p>
              </div>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='uppercase text-white'>
                <Link href='/'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Home
                  </li>
                </Link>
                <Link href='/#about'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    About
                  </li>
                </Link>
                <Link href='/#projects'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Projects
                  </li>
                </Link>
                <Link href='/#certifications'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Certifications
                  </li>
                </Link>
              </ul>
              <div className='pt-40'>
                <p className='uppercase tracking-widest text-[#5651e5]'>
                  Let&#39;s Connect
                </p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <a
                    href='https://www.linkedin.com/in/clint-briley-50056920a/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/fireclint'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>
                  <Link href='/#contact'>
                    <div
                      onClick={() => setNav(!nav)}
                      className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                    >
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href='/resume'>
                    <div
                      onClick={() => setNav(!nav)}
                      className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                    >
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
          </div>
          </div>
          </div>
      </nav>
  )
}
