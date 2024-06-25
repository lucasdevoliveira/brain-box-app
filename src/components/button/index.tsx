import { FC } from "react"

type ButtonProps = {
  label: string;
  type: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}

const Button:FC<ButtonProps> = ({ label, onClick, type }) => {
  return (
    <button type={type} className="bg-[#141718] dark:bg-[#1B1E20] text-[#fff] w-full p-5 rounded-2xl font-semibold" onClick={onClick}>{label}</button>
  )
}

export default Button