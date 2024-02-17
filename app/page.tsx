import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import React from 'react'
import { CardPorto } from '@/components/CardPorto'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import AvatarPorto from '@/components/AvatarPorto'

const Home = () => {
  return (
    <div>
      <div className='py-10'>
        <Sheet>
          <SheetTrigger asChild className='absolute left-5 top-5'>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </button>
          </SheetTrigger>
          <SheetContent>
            <div className='mx-auto p-5'>
                <CardPorto/>
              </div>
            <SheetFooter>
              <p className='sticky mx-auto bottom-5'>&copy; {new Date().getFullYear()} by Benedict Ell Nino</p>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div className='px-10 mx-auto'>
        <AvatarPorto/>
        <div className='py-5'>
          <p>Hello 👋 My name is Benedict Ell Nino. I'am a specialist in Front End Developer and beginner in Back End Developer. Currently, i'm working in 
            <b>
              <span className='text-blue-500'> Sistem</span> 
              <span className='text-red-500'> Aksesindo</span> 
              <span className='text-lime-500'> Perdana </span>
            </b>
              as <i>Research and Development</i> team using VB.NET and MySQL Server. I have interned at CST United Tractors for three months as a Fullstack Developer using .NET6, C#, and MSSQL. I am a detail-oriented and collaborative team player with experience in UI/UX Design and Front End Development.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home