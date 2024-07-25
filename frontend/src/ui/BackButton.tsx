import Button from "src/ui/Button";
import {ChevronLeftIcon} from "lucide-react";

export function BackButton() {
  return <Button variant={"secondary"} onClick={() => {
    window.history.back()
  }}>
    <ChevronLeftIcon size={18}/>
    <span>Retour</span>
  </Button>
}