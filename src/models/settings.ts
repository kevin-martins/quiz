import { CategoriesModel } from "./categories"
import { DifficultiesModel } from "./difficulties"
import { GameModesModel } from "./gameModes"

export type SettingsModels = {
  gameMode: GameModesModel
  categories: CategoriesModel[],
  difficulties: DifficultiesModel[],
  showExplanation: boolean
}