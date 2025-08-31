'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Alumni Portal
        </Link>
        <div className="flex items-center">
          <Link href="/directory" className="text-gray-600 hover:text-gray-800 px-3 py-2">
            Directory
          </Link>
          <Link href="/events" className="text-gray-600 hover:text-gray-800 px-3 py-2">
            Events
          </Link>
          <Link href="/mentorship" className="text-gray-600 hover:text-gray-800 px-3 py-2">
            Mentorship
          </Link>
          {session ? (
            <div className="relative">
              <button className="flex items-center focus:outline-none">
                <img
                  src={session.user?.image || '/default-avatar.png'}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="ml-2 text-gray-800">{session.user?.name}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden">
                <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Profile
                </Link>
                <button
                  onClick={() => signOut()}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
