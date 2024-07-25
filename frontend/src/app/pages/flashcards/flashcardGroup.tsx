import ContentHeader from "../../../ui/ContentHeader";
import {FileIcon, Folder, PlayIcon, PlusIcon, XIcon} from "lucide-react";
import Button from "../../../ui/Button";
import {FolderIllustration} from "../../../ui/illustrations/FolderIllustration";
import {Link, useLoaderData, useLocation, useParams, useSearchParams} from "react-router-dom";
import FolderCard from "../../../ui/FolderCard";
import * as Dialog from "@radix-ui/react-dialog";
import {Stack} from "../../../ui/layouts/Stack/Stack";
import {DialogOverlay} from "@radix-ui/react-dialog";
import React from "react";
import { FormBlock } from "src/ui/FormBlock";
import { Label } from "src/ui/Label";
import { Input } from "src/ui/Input";
import { Textarea } from "src/ui/Textarea";
import {AppContext} from "src/app/contexts/AppContext";
import * as http from "../../api";

export function FlashcardsGroup() {
  const [flashcard, setFlashcard] = React.useState<Flashcard>({
    name: "",
    question: "",
    answer: ""
  })


  const [group, setGroup] = React.useState<FlashcardGroup>({
    name: ""
  });

  const {id} = useParams();
  const data = useLoaderData() as FlashcardGroup

  React.useEffect(() => {
    async function getFlashcard() {
      const res = await http.get(`v1/flashcards/group/${id}`)
      setGroup(res.data.group)
    }

    if(data) {
      console.log(data)
      return setGroup(data)
    }

    getFlashcard().then()
  }, [])

  async function createFlashcard() {
    console.log(flashcard)
    const res = await http.post("v1/flashcards", flashcard)
    const f = res.data.flashcard

    if(group.flashcards) {
      const r = await http.patch(`v1/flashcards/group/${id}`, {
        flashcards: [...group.flashcards, f._id]
      })

      console.log(group)
     setGroup(r.data.group)
    }
  }

  return <section className={"space-y-6"}>
    <ContentHeader title={`Flashcards / ${group.name}`}>

      <div className={"flex flex-row items-center justify-center space-x-4"}>
        {/*Créer un group*/}
        <Link to={`/flashcards/play/${group._id}`}>
          <Button><PlayIcon size={18}/></Button>
        </Link>

        {/*Créer une flashcard*/}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant={"secondary"}><PlusIcon size={18}/> Ajouter</Button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <DialogOverlay
              className={"w-full h-full absolute left-0 top-0 bottom-0 right-0 backdrop-blur-sm transparent-overlay"}/>

            <Dialog.Content
              className={"bg-white shadow-md border-solid border-[1px] border-gray-100 fixed rounded-xl top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[28rem]"}>

              <Stack direction={"row"} align={"center"} justify={"space-between"} className={"p-4 text-gray-700"}>
                <Dialog.Title className={"text-sm text-gray-700"}>Ajouter un flashcard</Dialog.Title>
                <Dialog.Close>
                  <XIcon size={18}/>
                </Dialog.Close>
              </Stack>

              <div className={"p-6 border-solid border-b-[1px] border-t-[1px] border-gray-200 space-y-2"}>
                <FormBlock>
                  <Label>Nom</Label>
                  <Input
                    type={"text"}
                    placeholder={"Fonction Récursive..."}
                    onChange={(e) => setFlashcard(prev => ({...prev, name: e.currentTarget.value}))}
                  />
                </FormBlock>

                <FormBlock>
                  <Label>Question</Label>
                  <Textarea
                    placeholder={"Quelle structure de donnée utilise..."}
                    onChange={(e) => setFlashcard(prev => ({...prev, question: e.currentTarget.value}))}
                  />
                </FormBlock>

                <FormBlock>
                  <Label>Réponse</Label>
                  <Textarea
                    placeholder={"Réponse..."}
                    onChange={(e) => setFlashcard(prev => ({...prev, answer: e.currentTarget.value}))}
                  />
                </FormBlock>

              </div>


              <Stack direction={"row"} className={"flex items-center"}>
                <Dialog.Close asChild>
                  <button
                    type={"button"}
                    onClick={() => {
                    }}
                    className={"p-4 text-sm flex items-center justify-center w-full h-14 border-solid border-r-[.25px] border-gray-200"}
                  >Annuler
                  </button>
                </Dialog.Close>

                <Dialog.Close asChild>
                  <button
                    type={"button"}
                    className={"h-full w-full p-4 text-sm flex items-center text-blue-600 justify-center w-full h-12 border-solid border-l-[.25px] border-gray-200"}
                    onClick={() => createFlashcard()}
                  >Ajouter
                  </button>
                </Dialog.Close>

              </Stack>

            </Dialog.Content>
          </Dialog.Portal>

        </Dialog.Root>
      </div>
    </ContentHeader>

    <ul className={"grid grid-cols-6 gap-4"}>
     {group && group.flashcards && group.flashcards.map((card, index) => {
        return <li className={""} key={index}>
          <Link to={`/flashcards/${card._id}`}>
            <FlashcardCard data={card}/>
          </Link>
        </li>
      })}


    </ul>
  </section>;
}

function FlashcardCard({data}: {data: Flashcard}) {
  return <div className={"group flex flex-col items-center justify-center space-y-2 p-4 rounded-xl hover:bg-gray-100"}>
    <FileIcon size={80}/>
    <span className={"group-hover:underline text-sm capitalize text-gray-800 text-center"}>{data.name}</span>
  </div>
}
