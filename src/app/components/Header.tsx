'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-transparent py-4">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-white">
          Alumni<span className="text-accent">Portal</span>
        </Link>
        <div className="flex items-center">
          <Link href="/directory" className="text-light-text hover:text-accent px-4 py-2 transition-colors duration-300">
            Directory
          </Link>
          <Link href="/events" className="text-light-text hover:text-accent px-4 py-2 transition-colors duration-300">
            Events
          </Link>
          <Link href="/mentorship" className="text-light-text hover:text-accent px-4 py-2 transition-colors duration-300">
            Mentorship
          </Link>
          {session ? (
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center focus:outline-none">
                <img
                  src={session.user?.image || '/default-avatar.png'}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-accent"
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card-bg rounded-md shadow-lg py-1 z-20">
                  <div className="px-4 py-2 text-sm text-light-text border-b border-gray-700">
                    Signed in as <br/>
                    <span className="font-bold text-white">{session.user?.name}</span>
                  </div>
                  <Link href="/profile" className="block px-4 py-2 text-sm text-light-text hover:bg-dark-bg">
                    Profile
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 text-sm text-light-text hover:bg-dark-bg"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="ml-4 px-6 py-2 bg-accent text-dark-bg font-bold rounded-full hover:bg-opacity-80 transition-colors duration-300"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
