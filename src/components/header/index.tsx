import { FC } from "react"
import { ChevronLeft } from "lucide-react"
import { useRouter } from 'next/navigation'

type HeaderProps = {
  title: string
  hiddenRoute: boolean
}

const Header:FC<HeaderProps> = ({ title, hiddenRoute }) => {
  const router = useRouter()
  
  return (
    <div className="flex justify-center p-6 items-center dark:bg-[#141718]">
      { !hiddenRoute ? <div className="absolute left-5 shadow rounded p-1" onClick={() => router.back()}>
        <ChevronLeft size={24} className="text-[#212121] dark:text-[#FFFFFF]"/>
      </div> : null }
      <h1 className="font-medium text-2xl text-[#212121] dark:text-[#FFFFFF]">{title}</h1>
    </div>
  )
}

export default Header