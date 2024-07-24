import {FolderIllustration} from "./illustrations/FolderIllustration";

export default function FolderCard({data}: { data: { name: string } }) {
  return (
    <div className={"group flex flex-col items-center justify-center space-y-2 p-4 rounded-xl hover:bg-gray-100"}>
      <FolderIllustration size={80}/>
      <span className={"group-hover:underline text-sm capitalize text-gray-800"}>{data.name}</span>
    </div>
  )
}