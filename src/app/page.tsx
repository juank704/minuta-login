'use client';

import ParticlesBackground from '@/components/ParticlesBackground';
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import Link from 'next/link';

export default function Home() {
  const { user } = useUser();

  return (
    <>
      {/* Partículas de fondo, colocadas en nivel más bajo */}
      <ParticlesBackground />

      <main className="relative flex flex-col items-center justify-center min-h-screen p-4 z-10 text-white">
        {/* Logo */}
        <img
          src="/instituto_libertad.png"
          alt="Instituto Libertad"
          className="w-32 h-auto mb-4"
        />
        {/* Título */}
        <h1 className="text-4xl font-bold mb-4">MinutAI</h1>

        <SignedOut>
          <p className="mt-4">Inicia sesión para acceder al sistema.</p>
        </SignedOut>

        <SignedIn>
          <p className="mt-4">Hola, {user?.firstName} 👋</p>
          <Link
            href="/dashboard"
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Ir al Dashboard
          </Link>
        </SignedIn>
      </main>
    </>
  );
}