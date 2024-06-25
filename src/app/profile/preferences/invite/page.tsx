"use client"

import Nav from "@/components/nav"
import { useRouter } from 'next/navigation'
import Header from "@/components/header"
import InviteImage from "../../../../../public/images/illustration.png"
import Image from "next/image"
import { Copy } from "lucide-react"

type Route = {
  name: string;
  value: string;
}

const Invite = () => {
  const router = useRouter()
  const route:Route = {
    name: "Invite Friends",
    value: "invite-friends"
  }

  const copyCoupom = (name: string) => {
    navigator.clipboard.writeText(name);
  }

  return (
    <main className="dark:bg-[#141718]">
      <Header title={route.name} />
      <div className="mt-12 flex items-center flex-col">
        <Image src={InviteImage} alt="invite image" />
        <div className="flex flex-col gap-2 mt-12">
          <h1 className="text-2xl font-semibold text-center dark:text-[#fff]">Refer A Friend</h1>
          <p className="text-center text-[#666666] dark:text-[#fff] font-normal w-[266px]">Share Your Promo Code & Get $3 For Each Friend</p>
        </div>
        <button className="border-2 border-[#141718] border-[#fff] dark:text-[#fff] rounded-2xl p-6 flex justify-between w-[300px] mt-6 bg-[#1417181A] active:bg-[#141718] active:text-[#fff]" onClick={() => copyCoupom('BrainAiPartnerMR')}>
          <span className="font-semibold">BrainAiPartnerMR</span>
          <Copy />
        </button>
      </div>
      <Nav onClick={(route: string) => router.push(route)}/>
    </main>
  )
}

export default Invite