import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { LadderBoardType } from "../models/ladderBoard";
import { getAllQuestionsById, setDifficultyColor } from "../helpers/helpers";

const LadderBoard = () => {
  const { questions, answers } = useAppSelector((state: RootState) => state.game)
  const [ladderBoard, setLadderBoard] = useState<LadderBoardType>(LadderBoardType.ANSWERS)

  return (
    <div className='w-[1024px] m-auto border-[1px] border-gray-300 rounded-lg p-1 mt-4'>
      <div className='grid grid-cols-2 mb-3 rounded-lg'>
        <button
          onClick={() => setLadderBoard(LadderBoardType.ANSWERS)}
          className={`rounded-tl-lg py-2 ${
            ladderBoard === LadderBoardType.ANSWERS ? "bg-gray-300" : "hover:bg-gray-200 cursor-pointer"}`}
        >
          Réponses
        </button>
        <button
          onClick={() => setLadderBoard(LadderBoardType.STATISTICS)}
          className={`rounded-tr-lg py-2 ${
            ladderBoard === LadderBoardType.STATISTICS ? "bg-gray-300" : "hover:bg-gray-200 cursor-pointer"}`}
        >
          Statistiques
        </button>
      </div>
      {ladderBoard === LadderBoardType.ANSWERS &&
        <div className='flex flex-col gap-[2px]'>
          {getAllQuestionsById(questions, answers).map((answer) => {
            return (
              <div key={answer.id} className='grid grid-cols-8 gap-1'>
                <p className={`px-4 py-1 rounded-lg text-center ${setDifficultyColor(answer.difficulty)}`}>{answer.difficulty}</p>
                <p
                  className={`rounded-lg px-2 py-1 w-max ${answer.isCorrect ? "bg-green-200" : "bg-red-200"}`}
                >
                  {answer.question}
                </p>
              </div>
            )
          })}
        </div>
      }
      {ladderBoard === LadderBoardType.STATISTICS &&
        <div className='flex flex-col gap-[2px]'>
          <p>Nombre de réponses: {answers.length}</p>
          <p>Bonnes réponses: {answers.reduce((acc, curr) => { return curr.isCorrect ? acc += 1 : acc }, 0)}</p>
          <p>Mauvaises réponses: {answers.reduce((acc, curr) => { return !curr.isCorrect ? acc += 1 : acc }, 0)}</p>
        </div>
      }
    </div>
  );
}

export default LadderBoard