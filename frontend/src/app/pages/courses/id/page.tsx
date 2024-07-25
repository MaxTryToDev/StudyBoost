import ContentHeader from "../../../../ui/ContentHeader";
import {Folder, PlusIcon, XIcon} from "lucide-react";
import Button from "../../../../ui/Button";
import {Link, useLoaderData, useLocation, useParams} from "react-router-dom";
import FolderCard from "../../../../ui/FolderCard";
import * as Dialog from "@radix-ui/react-dialog";
import {DialogOverlay} from "@radix-ui/react-dialog";
import React, {useState} from "react";
import {FormBlock} from "src/ui/FormBlock";
import {Label} from "src/ui/Label";
import {Input} from "src/ui/Input";
import {AppContext} from "src/app/contexts/AppContext";
import {Stack} from "src/ui/layouts/Stack/Stack";
import * as http from "../../../api";
import {BackButton} from "src/ui/BackButton";

export function Course() {
  const data = useLoaderData() as Course;
  const {id} = useParams();
  const [documents, setDocuments] = React.useState(data.documents)
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  // Gérer le changement de fichier
  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };


  // Gérer la soumission du formulaire
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!selectedFile) {
      setUploadStatus('Veuillez sélectionner un fichier PDF.');
      return;
    }


    const formData = new FormData();
    formData.append('doc', selectedFile);

    try {
      const response = await http.postFile('v1/documents', formData);
      const doc = response.data.doc;

      const r = await http.patch(`v1/folders/${id}`, {documents:  [...data.documents as any, doc._id]})
      console.log(r)
    } catch (error:any) {
      setUploadStatus(`Erreur lors du téléchargement : ${error.response?.data || error.message}`);
    }
  };


  return <section className={"space-y-6"}>
    <BackButton/>
    <ContentHeader title={`${data.title}`}>
      <div className={"flex flex-row items-center justify-center space-x-4"}>
        {/*Créer un group*/}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button> <PlusIcon size={18}/> Nouveau document</Button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <form >
              <DialogOverlay
                className={"w-full h-full absolute left-0 top-0 bottom-0 right-0 backdrop-blur-sm transparent-overlay"}/>

              <Dialog.Content
                className={"bg-white shadow-md border-solid border-[1px] border-gray-100 fixed rounded-xl top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[28rem]"}>

                <Stack direction={"row"} align={"center"} justify={"space-between"} className={"p-4 text-gray-700"}>
                  <Dialog.Title className={"text-sm text-gray-700"}>Ajouté un document</Dialog.Title>
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
                      onChange={(e) => {
                      }}
                    />
                  </FormBlock>

                  <FormBlock>
                    <Label>Ajouter un document</Label>

                    <Input
                      type={"file"}
                      accept="application/pdf"
                      onChange={handleFileChange}
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
                      onClick={handleSubmit}
                      className={"p-4 text-sm flex items-center font-medium text-blue-700 justify-center w-full h-14 border-solid border-l-[.25px] border-gray-200"}
                    >Importer
                    </button>
                  </Dialog.Close>

                </Stack>

              </Dialog.Content>
            </form>

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
      {documents?.length !== 0 && documents?.map((course, index) => {
        return <li className={""} key={index}>
          <Link to={`course/${course._id}`}>
            <FolderCard data={{name: course.title}}/>
          </Link>
        </li>
      })}

    </ul>
  </section>;
}
