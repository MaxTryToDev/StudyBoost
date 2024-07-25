import {useLoaderData} from "react-router-dom";
import Button from "src/ui/Button";
import React from "react";
import {Stack} from "src/ui/layouts/Stack/Stack";
import * as http from "../../../api";
import * as Toast from "../../../../ui/Toast/Toast"
import {BackButton} from "src/ui/BackButton";

export function FlashcardPresentation() {
  const data = useLoaderData() as Flashcard;
  const [showAnswer, setShowAnswer] = React.useState(false)

  const setAsAcQuired = async (val:boolean) => {
    const rest = await http.patch(`v1/flashcards/${data._id}`, {acquired: val} )

    if(!val) {
      Toast.open({
        title: "Marqué comme non acquise",
        style: "info",
        position: "top-right",
        description:"Flashcard marqué comme non acquise"
      })
    }else {
      Toast.open({
        title: "Marqué comme acquise",
        style: "success",
        position: "top-right",
        description:"Flashcard marqué comme acquise"
      })
    }
  }

  return <>
    {data && (<div className={"h-full w-full"}>
      <BackButton/>
      <div className={"h-2/4 flex flex-col items-center justify-center space-y-2 border-solid border-b-[.5px] border-gray-200 p-6"}>
        <h3>Question</h3>
        <p>{data.question}</p>
      </div>
      <div className={"h-2/4 border-solid space-y-4 border-t-[.5px] border-gray-200 p-6"}>
        <div className={"min-h-16 min-w-16 flex items-center justify-center rounded-xl bg-gray-200"}>
          {showAnswer && <span>{data.answer}</span>}
        </div>

        <Stack direction={"row"} align={"center"} justify={"center"} gapy={8}>
          <Button onClick={() => setShowAnswer(prev => !prev)}>Afficher/Masquer la réponse</Button>

          {data.acquire &&  <Button variant={"secondary"} onClick={() =>  setAsAcQuired(false)}>Marquer comme non acquise</Button> }
          {!data.acquire &&  <Button variant={"secondary"} onClick={() =>  setAsAcQuired(true)}>Marquer comme acquise</Button> }
        </Stack>
      </div>
    </div>)}
  </>
}