import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { TfiLinkedin } from 'react-icons/tfi'

export const Footer = () => {
  return (
    <footer className="h-full w-full bg-neutral-900 py-6 pl-4 text-white">
        <div className='w-full flex flex-col gap-10 justify-center items-start sm:flex-row'>
        <div>
          <h3 className='text-3xl font-bold text-white'>BONSAI</h3>
          <p>Bogota, Colombia</p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <a className='text-lg' href="#">bonsaicontact@worlwide.com</a>
        </div>

        <div className="flex gap-4">
          <a href="#" className='shadow-lg cursor-pointer hover:scale-110 ease-in duration-300'>
          <TfiLinkedin size={ 30 } />
          </a>
          <a href="#" className='shadow-lg cursor-pointer hover:scale-110 ease-in duration-300'>
          <AiFillFacebook size={ 30 } />
          </a>
          <a className='shadow-lg cursor-pointer hover:scale-110 ease-in duration-300' href="#">
          <BsInstagram size={ 30 } />
          </a>

        </div>

        
        </div>

        <div>
          <p className='text-sm text-gray-500 text-center mt-6'>© Copyright | All right reserved 2022</p>
        </div>

    </footer>
  )
}
