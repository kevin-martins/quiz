import { DifficultiesModel } from "../models/difficulties"
import { GameModesModel } from "../models/gameModes"

export const setGameModeColor = (gameMode: GameModesModel) => {
  switch (gameMode as GameModesModel) {
    case "Classique":
      return "bg-blue-300"
    case "Contre la montre":
      return "bg-fuchsia-300"
    case "Sans faute":
      return "bg-indigo-300"
    case "Vrai ou Faux":
      return "bg-lime-300"
    case "Survie":
      return "bg-cyan-300"
    case "Masqué":
      return "bg-orange-300"
  }
}

export const setDifficultyColor = (difficulty: DifficultiesModel) => {
  switch (difficulty as DifficultiesModel) {
    case "Facile":
      return "bg-green-300"
    case "Moyen":
      return "bg-yellow-300"
    case "Difficile":
      return "bg-red-300"
    case "Expert":
      return "bg-purple-300"
  }
}