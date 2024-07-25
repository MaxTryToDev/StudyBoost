import React from "react";
import classNames from "classnames";


interface ButtonProps extends React.ComponentProps<"button"> {
variant?: "primary" | "secondary" | "outline"
}

export default function Button(props: ButtonProps) {
  const {children, className, variant="primary", ...rest} = props;

  return <button className={classNames("flex items-center justify-center h-10 px-6 py-4 rounded-xl text-sm ",
    {" text-white bg-blue-600": variant == "primary"},
    {"hover:bg-blue-100": variant == "secondary",},
    {"hover:bg-blue-100 border-solid border-[1px] border-gray-200 shadow-sm": variant == "outline",},
    className
  )
  } {...rest}>
    {children}
  </button>
}