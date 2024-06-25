"use client"

import Image from "next/image";
import LogoImg from "@/images/logo.svg"
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()

  setTimeout(() => {
    router.push('/onboarding')
  }, 3000)

  return (
    <main className="flex justify-center items-center h-screen">
      <Image src={LogoImg} alt="Logo BrainBox" />
      <div className="absolute bottom-4">
        <h1 className="text-[35px] font-medium">BrainBox</h1>
        <p className="text-center">Version 1.0</p>
      </div>
    </main>
  );
}

export default Home
