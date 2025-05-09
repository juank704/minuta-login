'use client';

import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace('/minutas'); // Redirección automática si está logueado
    }
  }, [user, router]);

  return (
    <>
      <ParticlesBackground />

      <main className="relative flex flex-col items-center justify-center min-h-screen p-4 z-10 text-white">
        <img
          src="/instituto_libertad.png"
          alt="Instituto Libertad"
          className="w-32 h-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">MinutAI</h1>

        <p className="mt-4 text-center">
          Por favor inicia sesión para acceder al sistema.
        </p>
      </main>
    </>
  );
}
