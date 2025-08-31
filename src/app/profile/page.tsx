'use client';

import { useSession } from 'next-auth/react';
import Header from '../components/Header';

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div>
        <Header />
        <main className="container mx-auto px-6 py-12">
          <p>Loading...</p>
        </main>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <div>
        <Header />
        <main className="container mx-auto px-6 py-12">
          <p>Access Denied. Please sign in to view your profile.</p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <img
              src={session?.user?.image || '/default-avatar.png'}
              alt="User Avatar"
              className="w-24 h-24 rounded-full"
            />
            <div className="ml-6">
              <h2 className="text-2xl font-bold">{session?.user?.name}</h2>
              <p className="text-gray-600">{session?.user?.email}</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold">Details</h3>
            <p className="mt-2 text-gray-600">More profile details will be available here soon.</p>
            {/* Additional profile fields from the database will go here */}
          </div>
        </div>
      </main>
    </div>
  );
}
