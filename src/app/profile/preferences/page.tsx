"use client"

import Nav from "@/components/nav"
import { useRouter } from 'next/navigation'
import Header from "@/components/header"
import { UserRound, Eye, CreditCard, Pencil, Settings } from "lucide-react"

type Route = {
  name: string;
  value: string;
}

const Preferences = () => {
  const router = useRouter()
  const route:Route = {
    name: "Preferences",
    value: "preferences"
  }

  return (
    <main className="dark:bg-[#141718]">
      <Header title={route.name} />
      <div className="px-10 mt-12 flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <UserRound size={32} className="dark:text-[#fff]" />
          <div className="w-[240px] flex flex-col items-start text-lg text-[#212121] dark:text-[#fff] font-medium gap-1" onClick={() => router.push('/profile/preferences/edit-information')}>
            <p className="font-semibold text-lg">Account Information</p>
            <p className="text-xs">Change your Account information</p>
          </div>
          <div className="w-4"></div>
        </div>
        <div className="flex justify-between items-center">
          <Eye size={32} className="dark:text-[#fff]" />
          <div className="w-[240px] flex flex-col items-start text-lg text-[#212121] dark:text-[#fff] font-medium gap-1" onClick={() => router.push('/profile/preferences/change-password')}>
            <p className="font-semibold text-lg">Password</p>
            <p className="text-xs">Change your Password</p>
          </div>
          <div className="w-4"></div>
        </div>
        <div className="flex justify-between items-center">
          <CreditCard size={32} className="dark:text-[#fff]" />
          <div className="w-[240px] flex flex-col items-start text-lg text-[#212121] dark:text-[#fff] font-medium gap-1">
            <p className="font-semibold text-lg">Payment Methods</p>
            <p className="text-xs">Add Your Credit / Credit Cards</p>
          </div>
          <div className="w-4"></div>
        </div>
        <div className="flex justify-between items-center">
          <Pencil size={32} className="dark:text-[#fff]" />
          <div className="w-[240px] flex flex-col items-start text-lg text-[#212121] dark:text-[#fff] font-medium gap-1" onClick={() => router.push('/profile/preferences/invite')}>
            <p className="font-semibold text-lg">Invite Your Friends</p>
            <p className="text-xs">Get $3 For Each Invitation!</p>
          </div>
          <div className="w-4"></div>
        </div>
        <div className="flex justify-between items-center">
          <Settings size={32} className="dark:text-[#fff]" />
          <div className="w-[240px] flex flex-col items-start text-lg text-[#212121] dark:text-[#fff] font-medium gap-1" onClick={() => router.push('/profile/preferences/theme-colour')}>
            <p className="font-semibold text-lg">Theme Colour</p>
            <p className="text-xs">Change Your Theme Colour</p>
          </div>
          <div className="w-4"></div>
        </div>
      </div>
      <Nav onClick={(route: string) => router.push(route)} />
    </main>
  )
}

export default Preferences