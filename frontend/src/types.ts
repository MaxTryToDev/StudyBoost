 export interface Flashcard {
  name: string,
  answer: string,
  question: string,
  createAt?: number
  acquire?: boolean,
  group?: string
}
