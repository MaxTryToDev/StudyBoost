import ContentHeader from "../../../ui/ContentHeader";
import {Folder, PlusIcon, XIcon} from "lucide-react";
import Button from "../../../ui/Button";
import {Link, useLoaderData, useLocation} from "react-router-dom";
import FolderCard from "../../../ui/FolderCard";
import * as Dialog from "@radix-ui/react-dialog";
import {DialogOverlay} from "@radix-ui/react-dialog";
import React from "react";
import { FormBlock } from "src/ui/FormBlock";
import { Label } from "src/ui/Label";
import { Input } from "src/ui/Input";
import {AppContext} from "src/app/contexts/AppContext";
import { Stack } from "src/ui/layouts/Stack/Stack";
import * as http from "../../api";
import {BackButton} from "src/ui/BackButton";

export function Courses() {
  const data = useLoaderData() as Course[];
  const [courses, setCourses] = React.useState(data)
  const [course, setCourse] = React.useState({
    title: "",
  })


  async function createCourse() {
    const res = await http.post('v1/folders', course)
    setCourse(res.data.folder)
    setCourses([...courses, res.data.folder])
  }


  return <section className={"space-y-6"}>
    <ContentHeader title={"Mes cours"}>
      <div className={"flex flex-row items-center justify-center space-x-4"}>
        {/*Créer un group*/}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button> <PlusIcon size={18}/> Créer un cours</Button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <DialogOverlay
              className={"w-full h-full absolute left-0 top-0 bottom-0 right-0 backdrop-blur-sm transparent-overlay"}/>

            <Dialog.Content
              className={"bg-white shadow-md border-solid border-[1px] border-gray-100 fixed rounded-xl top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[28rem]"}>

              <Stack direction={"row"} align={"center"} justify={"space-between"} className={"p-4 text-gray-700"}>
                <Dialog.Title className={"text-sm text-gray-700"}>Créer un cours</Dialog.Title>
                <Dialog.Close>
                  <XIcon size={18}/>
                </Dialog.Close>
              </Stack>

              <div className={"p-6 border-solid border-b-[1px] border-t-[1px] border-gray-200 space-y-2"}>
                <FormBlock>
                  <Label>Nom</Label>
                  <Input
                    type={"text"}
                    placeholder={"Algorithmique"}
                    onChange={(e) => setCourse({title: e.currentTarget.value})}
                  />
                </FormBlock>
              </div>


              <Stack direction={"row"} className={"flex items-center"}>
                <Dialog.Close asChild>
                  <button
                    type={"button"}
                    onClick={() => {
                    }}
                    className={"p-4 text-sm flex items-center font-medium justify-center w-full h-14 border-solid border-r-[.25px] border-gray-200"}
                  >Annuler
                  </button>
                </Dialog.Close>

                <Dialog.Close asChild>
                  <button
                    type={"button"}
                    onClick={() => createCourse()}
                    className={"p-4 text-sm flex items-center font-medium text-blue-700 justify-center w-full h-14 border-solid border-l-[.25px] border-gray-200"}
                  >Céer
                  </button>
                </Dialog.Close>

              </Stack>

            </Dialog.Content>
          </Dialog.Portal>

        </Dialog.Root>

        {/*Créer une flashcard*/}
        {/*<Dialog.Root>
          <Dialog.Trigger asChild>
            <Button><PlusIcon size={18}/> Ajouter</Button>
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
                  />
                </FormBlock>

                <FormBlock>
                  <Label>Question</Label>
                  <Textarea
                    placeholder={"Quelle structure de donnée utilise..."}
                  />
                </FormBlock>

                <FormBlock>
                  <Label>Réponse</Label>
                  <Textarea
                    placeholder={"Réponse..."}
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
                  >Ajouter
                  </button>
                </Dialog.Close>

              </Stack>

            </Dialog.Content>
          </Dialog.Portal>

        </Dialog.Root>*/}
      </div>
    </ContentHeader>

    <ul className={"grid grid-cols-6 gap-4"}>
      {courses.length !==0 && courses.map((course, index) => {
        return <li className={""} key={index}>
          <Link to={`${course._id}`}>
            <FolderCard data={{name: course.title}}/>
          </Link>
        </li>
      })}

    </ul>
  </section>;
}