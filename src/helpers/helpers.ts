import { questions } from "../data/questions"
import { AnswersModel } from "../models/answers"
import { QuestionModel } from "../models/questions"
import { SettingsModels } from "../models/settings"

export const getGameModeDescription = {
  "Classique": "Réponds à une série de questions avec plusieurs choix de réponse.",
  "Contre-la-montre": "Réponds à un maximum de questions en un temps limité.",
  "Sans faute": "Le jeu s'arrête à la première erreur. Jusqu'où iras-tu ?",
  "Vrai ou Faux": "Réponds à des affirmations en choisissant si elles sont vraies ou fausses.",
  "Survie": "Chaque bonne réponse te fait gagner du temps, chaque mauvaise t'en fait perdre.",
  "Masqué": "Réponds à une série de questions avec une des réponses masquée."
}

export const filterQuestions = (settings: SettingsModels): QuestionModel[] => {
  const { categories, difficulties, gameMode } = settings

  if (gameMode === "Masqué") {
    return questions.filter(question =>
      categories.includes(question.category) &&
      difficulties.includes(question.difficulty) &&
      question.gameMode === "Classique"
    )
  }

  if (gameMode === "Sans faute") {
    return questions.filter(question =>
      categories.includes(question.category) &&
      difficulties.includes(question.difficulty)
    )
  }

  return questions.filter(question =>
    categories.includes(question.category) &&
    difficulties.includes(question.difficulty) &&
    question.gameMode.includes(gameMode)
  )
}

export const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
}

export const getBooleanValue = (boolean: boolean) => {
  return boolean ? "Vrai" : "Faux"
}

export const getAllQuestionsById = (questions: QuestionModel[], answers: AnswersModel[]) => {
  return answers.reduce((acc: (QuestionModel & { isCorrect: boolean })[], curr: AnswersModel) => {
    const { id, isCorrect } = curr
    const question = questions.find((question: QuestionModel) => question.id === id)!
    acc.push({ ...question, isCorrect })
    return acc
  }, [])
}

export const shuffleArray = <T>(array: T[]): T[] => {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

