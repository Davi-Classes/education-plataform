import { twMerge } from "tailwind-merge"

type InputProps = React.ComponentProps<'input'>

const InputClassname = "bg-white shadow-lg shadow-indigo-200 ps-2 py-1 rounded-lg border border-zinc-300 outline-0 text-lg"

export const Input = ({ className, ...props}: InputProps) => {
  return (
    <input 
      {...props}
      className={twMerge(InputClassname, className)}
    />
  )
}