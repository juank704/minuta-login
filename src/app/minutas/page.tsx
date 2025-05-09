// src/app/minutas/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import MinutasApp from "@/components/MinutasApp";

export default async function MinutasPage() {
  const { userId } = await auth(); // 👈 ¡aquí estaba el error!

  if (!userId) {
    redirect("/sign-in");
  }

  return <MinutasApp />;
}
