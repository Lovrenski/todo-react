// src/layouts/MainLayout.tsx
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">📋 To-Do App</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <button className="text-red-500 hover:underline">
            Logout
          </button>
        </nav>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
