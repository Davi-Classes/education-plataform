import { twMerge } from "tailwind-merge"

type ButtonProps = React.ComponentProps<'button'>

const buttonClassname = "bg-indigo-600 text-white rounded-2xl px-8 py-2 duration-300 hover:cursor-pointer hover:bg-indigo-500 w-42 font-medium"

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button 
      {...props} 
      className={twMerge(buttonClassname, className)}
    >
      {children}
    </button>
  )
}