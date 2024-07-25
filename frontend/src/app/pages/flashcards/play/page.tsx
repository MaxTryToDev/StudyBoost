import {useLoaderData} from "react-router-dom";
import Button from "src/ui/Button";
import React from "react";
import {Stack} from "src/ui/layouts/Stack/Stack";
import * as http from "../../../api";
import * as Toast from "../../../../ui/Toast/Toast"
import {BackButton} from "src/ui/BackButton";

export function FlashcardPlayer() {
  const flashcardGroupData = useLoaderData() as FlashcardGroup;
  const data = flashcardGroupData.flashcards as Flashcard[]
  const [showAnswer, setShowAnswer] = React.useState(false)
  const [index, setIndex] = React.useState(0)
  const [current, setCurrent] = React.useState<Flashcard>(data[index])

  const setAsAcQuired = async (id: string, val: boolean) => {
    const rest = await http.patch(`v1/flashcards/${id}`, {acquired: val})

    if (!val) {
      Toast.open({
        title: "Marqué comme non acquise",
        style: "info",
        position: "top-right",
        description: "Flashcard marqué comme non acquise"
      })
    } else {
      Toast.open({
        title: "Marqué comme acquise",
        style: "success",
        position: "top-right",
        description: "Flashcard marqué comme acquise"
      })
    }
  }

  return <>
    {data && current && (<div className={"h-full w-full"}>
      <div className={"flex flex-row items-center pb-4 border-solid border-gray-200 border-b-[1px] space-x-4"}>
        <BackButton/>
        <p className={"text-lg font-medium text-gray-700"}>{flashcardGroupData.name}</p>
      </div>
      <div
        className={"h-2/4 flex flex-col items-center justify-center space-y-2 border-solid border-b-[.5px] border-gray-200 p-6"}>
        <h3>Question</h3>
        <p>{current.question}</p>
      </div>
      <div className={"h-2/4 border-solid space-y-4 border-t-[.5px] border-gray-200 p-6"}>
        <div className={"min-h-16 min-w-16 flex items-center justify-center rounded-xl bg-gray-200"}>
          {showAnswer && <span>{current.answer}</span>}
        </div>

        <Stack direction={"row"} align={"center"} justify={"center"} gapy={8}>
          <Button onClick={() => setShowAnswer(prev => !prev)}>Afficher/Masquer la réponse</Button>

          {current.acquire &&
              <Button variant={"secondary"} onClick={() => setAsAcQuired(current._id as string, false)}>Marquer comme
                  non acquise</Button>}
          {!current.acquire &&
              <Button variant={"secondary"} onClick={() => setAsAcQuired(current._id as string, true)}>Marquer comme
                  acquise</Button>}
        </Stack>


        <Stack direction={"row"} align={"center"} justify={"center"} gapy={8}>
          {index < data.length - 1 && <Button variant={"outline"} onClick={() => {
            if (index <= data.length) {
              setIndex(index + 1)
              setCurrent(data[index + 1])
              setShowAnswer(false);
            }
          }}>Suivant</Button>}

          {index > 0 &&
              <Button variant={"outline"} onClick={() => {
                if (index <= data.length) {
                  setIndex(index - 1)
                  setCurrent(data[index - 1])
                  setShowAnswer(false);
                }
              }}>Précédent</Button>}
        </Stack>

      </div>
    </div>)}
  </>
}