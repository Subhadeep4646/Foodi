"use client"
import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import { SignUp } from '@clerk/clerk-react';

function Header() {
  const {user,isSignedIn}=useUser();
  return (
    <div className='flex justify-between items-center p-6 md:px-20 shadow-md'>
      <Image src='/images.png' alt='logo' width={100} height={150} />
      <div className='hidden md:flex border p-2 rounded-lg bg-gray-200 w-96'>
        <input type='text' className='bg-transparent w-full outline-none'/>
        <Search/>
      </div>
      {isSignedIn?
      <UserButton/>
      :<div className='flex gap-5'>
        <SignInButton mode='modal'>
        <Button >login</Button>
        </SignInButton> 
        <SignInButton mode='modal'>
        <Button variant ="outline">Sign Up</Button>
        </SignInButton>
      </div>
}
    </div>
  );
}

export default Header;
