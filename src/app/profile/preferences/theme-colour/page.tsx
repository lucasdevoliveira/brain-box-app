"use client"

import Header from "@/components/header"
import Nav from "@/components/nav"
import { useRouter } from 'next/navigation'
import Button from "@/components/button"

type Route = {
  name: string;
  value: string;
}

const ThemeColour = () => {
  const router = useRouter()
  const route:Route = {
    name: "Change password",
    value: "change-password"
  }

  return (
    <main className="dark:bg-[#141718]">
      <Header title={route.name} />
      <div className="flex flex-col items-center px-5 mt-64 gap-6">
        <Button type="button" label="light" onClick={() => [
          document.querySelector("html")?.classList.remove("dark")
        ]} />
        <p className="dark:text-[#fff]">ou</p>
        <Button type="button" label="dark" onClick={() => {
          document.querySelector("html")?.classList.add("dark");
        }}/>
      </div>
      <Nav onClick={(route: string) => router.push(route)} />
    </main>
  )
}

export default ThemeColour