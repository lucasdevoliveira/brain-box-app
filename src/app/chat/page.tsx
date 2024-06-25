"use client"

import Nav from "@/components/nav"
import { useRouter } from 'next/navigation'
import Header from "@/components/header"

type Route = {
  name: string;
  value: string;
}

const Chat = () => {
  const router = useRouter()
  const route:Route = {
    name: "Chat",
    value: "chat"
  }

  return (
    <main className="dark:bg-[#141718]">
      <Header title={route.name} />
      
      <Nav onClick={(route: string) => router.push(route)}/>
    </main>
  )
}

export default Chat