"use client"

import { House, MessageSquare, Box, User } from "lucide-react"
import { FC } from "react"

type NavProps = {
  onClick: (route: string) => void
}

const Nav:FC<NavProps> = ({ onClick }) => {
  return (
    <div className="py-6 border-t-[1px] border-[#DADADA] absolute bottom-0 w-full flex justify-around">
      <House onClick={() => onClick('/home')} size={28} color="#9E9E9E"/>
      <MessageSquare onClick={() => onClick('/chat')} size={28} color="#9E9E9E"/>
      <User onClick={() => onClick('/profile')} size={28} color="#9E9E9E"/>
    </div>
  )
}

export default Nav