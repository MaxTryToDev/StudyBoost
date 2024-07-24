import classNames from "classnames";

interface LabelProps extends React.ComponentProps<"label"> {}

export function Label(props : LabelProps) {
  const {className, children, ...rest} = props;

  return <label className={classNames("text-sm text-gray-700", className)} {...rest}>{children}</label>
}