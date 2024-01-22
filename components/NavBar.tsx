// components/NavBar.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from './ModeToogle';

const NavBar = () => {
  return (
    <nav className="p-4 flex justify-between items-center">
      <div className="rounded-full overflow-hidden w-12 h-12">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex gap-4 justify-center">
        <Link href="#education" className="hover:underline">Études</Link>
        <Link href="#skills" className=" hover:underline">Compétences</Link>
        <Link href="#experience" className=" hover:underline">Expériences</Link>
        <Link href="#contact" className=" hover:underline">Contact</Link>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default NavBar;
