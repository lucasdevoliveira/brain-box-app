"use client"

import Nav from "@/components/nav"
import { useRouter } from 'next/navigation'
import Header from "@/components/header"
import Image from "next/image"
import UserImage from "../../../public/images/first.jpg"
import { Settings, ChevronRight, LockKeyholeOpen, CircleHelp, LogOut } from "lucide-react"

type Route = {
  name: string;
  value: string;
}

const Profile = () => {
  const router = useRouter()
  const route:Route = {
    name: "Profile",
    value: "profile"
  }

  return (
    <main className="dark:bg-[#141718]">
      <Header title={route.name} />
      <div className="flex items-center flex-col">
        <Image src={UserImage} alt="Logo" width={164} className="rounded-[30px]" />
        <p className="mt-3 text-3xl font-semibold dark:text-[#fff]">Tom Hillson</p>
        <p className="mt-1 text-sm text-[#323142] dark:text-[#fff]">Tomhill@mail.com</p>
      </div>
      <div className="px-10 mt-12 flex flex-col gap-7">
        <div className="flex justify-between items-center" onClick={() => router.push('profile/preferences')}>
          <Settings size={32} className="dark:text-[#fff]" />
          <div className="w-[240px] flex items-center text-lg text-[#212121] font-medium dark:text-[#fff]">
            <p className="font-medium">Preferences</p>
          </div>
          <ChevronRight color="#A7A7AB" size={16} />
        </div>
        <div className="flex justify-between items-center">
          <LockKeyholeOpen size={32} className="dark:text-[#fff]" />
          <div className="w-[240px] flex items-center text-lg text-[#212121] font-medium dark:text-[#fff]">
            <p className="font-medium">Account Security</p>
          </div>
          <ChevronRight color="#A7A7AB" size={16} />
        </div>
        <div className="flex justify-between items-center">
          <CircleHelp size={32} className="dark:text-[#fff]" />
          <div className="w-[240px] flex items-center text-lg text-[#212121] font-medium dark:text-[#fff]">
            <p className="font-medium">Customer Support</p>
          </div>
          <ChevronRight color="#A7A7AB" size={16} />
        </div>
        <div className="flex justify-between items-center">
          <LogOut size={32} className="dark:text-[#fff]" />
          <div className="w-[240px] flex items-center text-lg text-[#212121] font-medium dark:text-[#fff]">
            <p className="font-medium">Logout</p>
          </div>
          <div></div>
        </div>
      </div>
      <Nav onClick={(route: string) => router.push(route)}/>
    </main>
  )
}

export default Profile