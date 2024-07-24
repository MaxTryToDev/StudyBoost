export default function ContentHeader({children, title}: {children: React.ReactNode, title: string}) {
  return <header className={"flex flex-row items-center gap-x-4 w-full pb-4 border-solid border-b-[1px] border-gray-200"}>
    <h3 className={"text-xl font-medium md:text-2xl"}>{title}</h3>
    <div className={"ml-auto"}>{children}</div>
  </header>
}