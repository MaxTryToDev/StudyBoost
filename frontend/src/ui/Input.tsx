import classNames from "classnames"

interface InputProps extends React.ComponentProps<"input"> {}
export function Input(props:InputProps) {
  const {className, ...rest} = props
  return <input className={classNames("w-full px-4 py-2 rounded-lg bg-gray-100 text-sm")} {...rest}/>
}