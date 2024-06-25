"use client"

import Slider from "@/components/slider"
import { useRouter } from 'next/navigation'

const Onboarding = () => {
  const router = useRouter()

  return (
    <main className="dark:bg-[#141718]">
      <div className="mt-[41px] flex justify-end pr-[45px]">
        <p className="font-semibold text-lg text-[#D7D7D7] hover:text-[#8E9295]" onClick={() => router.push('home')}>Skip</p>
      </div>
      <Slider />
      <div className="flex items-center flex-col gap-2">
        <h1 className="text-3xl font-bold w-[266px] text-center">Unlock the Power Of Future AI</h1>
        <p className="text-base font-light text-[#8E9295] w-[263px] text-center">Chat with the smartest AI Future Experience power of AI with us</p>
      </div>
    </main>
  )
}

export default Onboarding