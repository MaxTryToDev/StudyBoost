
type ressourceName = "flashcard" | "user"


interface AppContext {
  flashcard: {
    all: Flashcard[]
    create: (data: Flashcard) => void
    add: (data: Flashcard) => void
    get: (id: string) => Flashcard
  }

  flashCardGroup : {
    all: [{name: string}]
    create: (data: Flashcard) => void
    add: (data: Flashcard) => void
  }
}

const AppContext = React.createContext<AppContext>({})



const AppContextProvider = ({children}: {children: React.ReactNode}) => {

  return <AppContext.Provider value={}>
    {children}
  </AppContext.Provider>
}
