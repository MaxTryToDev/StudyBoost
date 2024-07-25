import React from "react";
import * as http from '../api';

interface AppContext {
  flashcard: {
    all: Flashcard[]
    add: (data: Flashcard) => void
    get: (id: string) => Flashcard | {}
  }

  flashCardGroup: {
    all: FlashcardGroup[]
    create: (data: FlashcardGroup) => void
    add: (data: FlashcardGroup) => void
    get: (id: string) => FlashcardGroup
  }
}

const AppContext = React.createContext<AppContext>(
  {
    flashcard: {
      all: [],
      add: (data: Flashcard) => {
      },
      get: (id: string) => ({})
    },

    flashCardGroup: {
      all: [],
      create: (data) => {
      },
      add: (data: FlashcardGroup) => {
      },
      get: (id: string) => ({} as Flashcard)
    }
  }
)


const AppContextProvider = ({children}: { children: React.ReactNode }) => {

  const [flashcards, setFlashcards] = React.useState<Flashcard[]>([]);
  const [flashcardGroups, setFlashcardGroups] = React.useState<FlashcardGroup[]>([]);


  React.useEffect(() => {
    async function getFlashcardGroups() {
      const res = await http.get("v1/flashcards/group");
      setFlashcardGroups(res.data.groups);
    }

    {/*GET*/}
    getFlashcardGroups().then()
  }, [])

  const flashcardRessource = {
    all: flashcards,
    add: (data: Flashcard) => {
      setFlashcards([...flashcards, data])
    },
    get: (id: string) => {
      return flashcards.filter(card => card._id === id)[0]
    }
  }

  const flashcardGroup = {
    all: flashcardGroups,

    create: async function (data: FlashcardGroup) {
      const res = await http.post("v1/flashcards/group", data)
      if (res.status === "success") {
        this.add(res.data.group)
      }
    },

    add: (data: FlashcardGroup) => {
      setFlashcardGroups([...flashcardGroups, data])
    },

    get: function (id: string) {
      return flashcardGroups.filter(group => group._id === id)[0]
    },

  }

  return <AppContext.Provider value={{flashcard: flashcardRessource, flashCardGroup: flashcardGroup}}>
    {children}
  </AppContext.Provider>
}


export {AppContextProvider, AppContext}