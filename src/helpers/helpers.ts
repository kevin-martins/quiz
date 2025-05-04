import { data } from "../data/data"
import { DataModel } from "../models/data"
import { SettingsModels } from "../models/settings"

export const getGameModeDescription = {
  "Classique": "Réponds à une série de questions avec plusieurs choix de réponse.",
  "Contre-la-montre": "Réponds à un maximum de questions en un temps limité.",
  "Sans faute": "Le jeu s'arrête à la première erreur. Jusqu'où iras-tu ?",
  "Vrai ou Faux": "Réponds à des affirmations en choisissant si elles sont vraies ou fausses.",
  "Survie": "Chaque bonne réponse te fait gagner du temps, chaque mauvaise t'en fait perdre.",
  "Masqué": "Réponds à une série de questions avec une des réponses masquée."
}

export const setQuestions = (settings: SettingsModels): DataModel[] => {
  const { categories, difficulties, gameMode } = settings

  return data.filter(d => categories.includes(d.category) && difficulties.includes(d.difficulty) && d.gameMode.includes(gameMode))
}

export const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
}