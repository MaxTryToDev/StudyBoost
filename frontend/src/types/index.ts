interface Flashcard {
  _id: string
  name: string,
  answer: string,
  question: string,
  createAt?: number
  acquire?: boolean,
  group?: string
}

interface FlashcardGroup {
  _id: string
  name: string
}
