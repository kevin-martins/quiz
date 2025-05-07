import Settings from "./Settings";
import Questions from "./Questions";

const App = () => {
  return (
    <div className="relative">
      <div className="container m-auto bg-white">
        <h1 className="text-3xl font-bold underline">
          Quiz game!
        </h1>
        <div className="w-full">
          <div className="w-[1024px] m-auto flex">
            <Settings />
          </div>
          <Questions />
        </div>
      </div>
    </div>
  );
}

export default App;
