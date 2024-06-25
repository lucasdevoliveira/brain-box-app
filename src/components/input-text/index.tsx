import { ReactNode, FC } from "react"
import { SquarePen } from "lucide-react"

type InputText = {
  icon: ReactNode;
  error: string | undefined;
}

const InputText:FC<InputText & React.InputHTMLAttributes<HTMLInputElement>> = ({ 
  id,
  icon, 
  name,
  placeholder, 
  onChange, 
  onBlur,
  type,
  error
}) => {
  return (
    <div>
      <div className="flex gap-2 items-center outline-[0px] bg-[#F5F5F5] dark:bg-[#2B2D30] rounded-xl p-5 relative">
        {icon}
        <input 
          id={id}
          name={name}
          type={type} 
          className="bg-[#F5F5F5] dark:bg-[#2B2D30] outline-[0px]" 
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
        <SquarePen className="absolute right-5" color="#C2C3CB" />
      </div>
      { error ? <p className="absolute text-xs ml-5 mt-[2px] text-red-600">{error}</p> : null }
    </div>
  )
}

export default InputText