import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="text-gray-500 body-font">
  <div className="container mx-auto flex-wrap justify-between p-5 flex-col md:flex-row items-center">
    <Link href={'#'} className="flex title-font font-medium items-center text-gray-200 mb-4 md:mb-0">
      <span className="ml-3 text-3xl font-bold">TA</span>
    </Link >
    <nav className="md:ml-auto flex flex-wrap items-center gap-5 text-base justify-center">
      <Link href={'/'}  className="mr-5 text-white hover:text-gray-500">Home</Link >
      <Link href={'/about'} className="mr-5 text-white hover:text-gray-500">About</Link >
      <Link href={'/projects'} className="mr-5 text-white hover:text-gray-500">Project</Link >
      <Link href={'/contact'} className="mr-5 text-white hover:text-gray-500">Contact</Link >
    </nav>
    
  </div>
</header>

  )
}

export default Navbar
