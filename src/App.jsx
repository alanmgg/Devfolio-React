import Header from "./components/Header";
import ButtonTheme from "./components/ButtonTheme";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-t from-gray-50 dark:from-slate-900 to-gray-300 dark:to-slate-700">
        <ButtonTheme />

        <Header />
      </div>
    </>
  );
}

export default App;
