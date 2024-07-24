import React from "react";
import classNames from "classnames";


interface ButtonProps extends React.ComponentProps<"button"> {
variant?: "primary" | "secondary"
}

export default function Button(props: ButtonProps) {
  const {children, variant="primary", ...rest} = props;

  return <button className={classNames("flex items-center justify-center h-10 px-6 py-4 rounded-xl text-sm ",
    {" text-white bg-blue-600": variant == "primary"},
    {"hover:bg-blue-100": variant == "secondary",}
  )
  } {...rest}>
    {children}
  </button>
}