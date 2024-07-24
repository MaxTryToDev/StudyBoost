import classNames from "classnames"

interface TextareaProps extends React.ComponentProps<"textarea"> {}
export function Textarea(props:TextareaProps) {
  const {className, ...rest} = props
  return <textarea className={classNames("w-full px-4 py-2 rounded-lg bg-gray-100 text-sm", className)} {...rest}/>
}