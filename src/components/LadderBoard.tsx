import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { LadderBoardType } from "../models/ladderBoard";
import { getAllQuestionsById } from "../helpers/helpers";
import { setDifficultyColor } from "../helpers/setColors";
import { QuestionModel } from "../models/questions";
import { AnswersModel } from "../models/answers";
// import { Chart } from "chart.js/auto";

const PieChart = ({ data }: {data: any}) => {
  const dataPie = {
    labels: ["JavaScript", "Python", "Ruby"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(133, 105, 241)",
          "rgb(164, 101, 241)",
          "rgb(101, 143, 241)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const configPie = {
    type: "pie",
    data: dataPie,
    options: {},
  };
  
  // var chartBar = new Chart(document.getElementById("chartPie"), configPie);
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
      <div className="py-3 px-5 bg-gray-50">Pie chart</div>
      <canvas className="p-1 ml-40 mr-40" id="chartPie"></canvas>
    </div>
  )
}

type StatisticsBoardProps = {
  answers: AnswersModel[]
}

const StatisticsBoard = ({ answers }: StatisticsBoardProps) => {
  const correctAnswers = answers.filter(answer => answer.isCorrect).length;
  const incorrectAnswers = answers.length - correctAnswers;
  const data = {}
  return (
    <div className='flex flex-col gap-[2px]'>
      <p>Nombre de réponses: {answers.length}</p>
      <p>Bonnes réponses: {answers.reduce((acc, curr) => { return curr.isCorrect ? acc += 1 : acc }, 0)}</p>
      <p>Mauvaises réponses: {answers.reduce((acc, curr) => { return !curr.isCorrect ? acc += 1 : acc }, 0)}</p>
      <PieChart data={data} />
      <div className="relative w-[200px] h-[200px] m-auto rounded-full bg-purple-200">
        <div className="absolute top-0 right-0 bg-blue-500 bg-conic w-[200px] h-[200px]">purple</div>
        <div className="pie-text text2">purple</div>
        <div className="pie-text text3">purple</div>
      </div>
    </div>
  )
}

type AnswersBoardProps = {
  questions: QuestionModel[]
  answers: AnswersModel[]
}

const AnswersBoard = ({ questions, answers }: AnswersBoardProps) => {
  return (
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
  )
}

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
        <AnswersBoard questions={questions} answers={answers} />
      }
      {ladderBoard === LadderBoardType.STATISTICS &&
        <StatisticsBoard answers={answers} />
      }
    </div>
  );
}

export default LadderBoard